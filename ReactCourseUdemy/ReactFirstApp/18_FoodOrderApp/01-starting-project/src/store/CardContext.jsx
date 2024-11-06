import { createContext, useReducer } from "react";

const CardContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_IITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const upadtedItems = [...state.items]; //Copy of the old array

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      upadtedItems[existingCartItemIndex] = updatedItem;
    }else{
      upadtedItems.push({...action.item, quantity: 1});
    }
    return { ...state, items: upadtedItems};
  }
  if (action.type === "REMOVE_ITEM") {
    // ... update the state to remove a meal item
  }

  return state;
}

export function CardContextProvider({ children }) {
  useReducer(cartReducer, { items: [] });

  return <CardContext.Provider>{children}</CardContext.Provider>;
}

export default CardContext;
