import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

// Initialize new context for store
const StoreContext = createContext();
const { Provider } = StoreContext;

// The provider is responsible for holding our state, updating the state, and persisting values to the children
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
    promotion: '',
    discount: 1,
    appliedDiscount: false,
  });
  // Provider components expect a value prop to be passed
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
