import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, CheckoutDetails } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  selectedProductForModal: Product | null;
  setSelectedProductForModal: (product: Product | null) => void;
  checkoutWhatsApp: (details: CheckoutDetails) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('zazz_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('zazz_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const checkoutWhatsApp = (details: CheckoutDetails) => {
    if (cart.length === 0) return;

    let itemsText = cart
      .map(
        (item, index) =>
          `${index + 1}. *${item.product.name}* x ${item.quantity} = ₹${(
            item.product.price * item.quantity
          ).toLocaleString('en-IN')}`
      )
      .join('%0A');

    const formattedMessage = `✨ *NEW ONLINE ORDER - ZAZZ LUXURY STORE* ✨%0A%0A` +
      `*Order Items:*%0A${itemsText}%0A%0A` +
      `*Total Order Value:* ₹${totalPrice.toLocaleString('en-IN')}%0A%0A` +
      `*Customer Shipping Details:*%0A` +
      `• *Name:* ${encodeURIComponent(details.fullName)}%0A` +
      `• *Phone:* ${encodeURIComponent(details.phone)}%0A` +
      `• *Address:* ${encodeURIComponent(details.address)}%0A` +
      `• *City:* ${encodeURIComponent(details.city)} - ${encodeURIComponent(details.pincode)}%0A` +
      (details.notes ? `• *Special Request:* ${encodeURIComponent(details.notes)}%0A` : '') +
      `%0APlease confirm my order and send payment link / invoice. Thank you!`;

    const whatsappUrl = `https://wa.me/918686121420?text=${formattedMessage}`;
    window.open(whatsappUrl, '_blank');
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        selectedProductForModal,
        setSelectedProductForModal,
        checkoutWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
