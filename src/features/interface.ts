export interface ProductRes {
  _id: string;
  name: string;
  category: {
    name: string;
    _id: string;
  };

  __v?: number;
}

export interface Product {
  _id: string;
  name: string;
  category: {
    name: string;
    _id: string;
  };
}

export interface Category {
  _id: string;
  name: string;
}

export interface CartItem {
  _id: string;
  name: string;
  number: number;
  category: {
    _id: string;
    name: string;
  };
}

export interface Cart {
  _id?: string | null;
  name: string;
  items: CartItem[];
  selectedItems: CartItem[];
}

export interface User {
  username: string;
  _id: string;
}

export interface ShoppingList {
  status: number;
  name: string;
  createdAt: Date;
  _id: string;
}

export interface ShoppingListDetail extends ShoppingList {
  items: CartItem[];
}
