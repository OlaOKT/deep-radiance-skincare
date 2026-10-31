
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type CartItem = {
  id: number;
  name: string;
  category: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  isLoaded: boolean;
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const CART_STORAGE_KEY = "deep-radiance-cart";

function isValidCartItem(item: unknown): item is CartItem {
  if (typeof item !== "object" || item === null) {
    return false;
  }

  const cartItem = item as CartItem;

  return (
    typeof cartItem.id === "number" &&
    typeof cartItem.name === "string" &&
    typeof cartItem.category === "string" &&
    typeof cartItem.quantity === "number" &&
    Number.isFinite(cartItem.quantity) &&
    cartItem.quantity >= 1
  );
}

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const loadedRef = useRef(false);

  const finishLoading = useCallback(() => {
    if (loadedRef.current) {
      return;
    }

    let savedItems: CartItem[] = [];

    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);

      if (savedCart) {
        const parsed: unknown = JSON.parse(savedCart);

        if (Array.isArray(parsed)) {
          savedItems = parsed.filter(isValidCartItem);
        }
      }
    } catch {
      try {
        localStorage.removeItem(CART_STORAGE_KEY);
      } catch {
        // Storage may be unavailable.
      }
    }

   console.log("SAVED CART ITEMS:", savedItems);
console.log("SETTING CART LOADED TO TRUE");

loadedRef.current = true;
setItems(savedItems);
setIsLoaded(true);
  }, []);

  useEffect(() => {
  console.log("CART PROVIDER EFFECT STARTED");

  const timer = window.setTimeout(() => {
    console.log("CART LOADING TIMER FIRED");
    finishLoading();
  }, 100);

  return () => window.clearTimeout(timer);
}, [finishLoading]);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    try {
      localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(items)
      );
    } catch {
      // Cart remains usable during this session.
    }
  }, [items, isLoaded]);

  function addToCart(product: Omit<CartItem, "quantity">) {
    setItems((currentItems) => {
      const existing = currentItems.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(id: number) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  function updateQuantity(id: number, quantity: number) {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }

  function clearCart() {
    setItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        isLoaded,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside a CartProvider"
    );
  }

  return context;
}
