import { useState } from "react";

function useLocalStaorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
  getLocalSatorageValue(key, initialValue)
  );

  const setValue =(value) => {
      console.log(value
  }
  
  return [localStorageValue, setValue];
}

export default useLocalStaorage;