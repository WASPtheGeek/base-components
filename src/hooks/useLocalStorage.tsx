import React from "react";

const useLocalStorage = (key: string, initValue?: string | number) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const item = localStorage.getItem(key);

      const result = item ? JSON.parse(item) : initValue;

      return result;
    } catch {
      return initValue;
    }
  });

  // sets value to the local storage
  const setValue = (value: string | number) => {
    try {
      setStoredValue(value);

      localStorage.setItem(key, value ? JSON.stringify(value) : "");
    } catch (error) {
      console.error(
        "Error occured while setting value to the local storage",
        error
      );
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
