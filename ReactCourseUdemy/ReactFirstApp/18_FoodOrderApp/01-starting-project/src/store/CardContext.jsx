import { createContext } from "react";

const CardContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});