import { useState } from "react";

function useLocalStaorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalSatorageValue(key, initialValue)
  );

  const setValue = (value) => {
    // check if function
    const valueTostore =
      value instanceof Function ? value(localStorageValue) : value;
    
    // Set to state
    setLocalStorageValue(value)
    // Set to local storage
    localStorage.setItem(key, JSON.stringify(valueTostore))
  };

  return [localStorageValue, setValue];
}

const getLocalSatorageValue = (key, initialValue) => {
  const itemFromStorage = localStorage.getItem(key);
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
};

export default useLocalStaorage;
