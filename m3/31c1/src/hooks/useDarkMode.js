import React from "react";
import { useLocalStorage } from "useLocalStorage.js";




const useDarkMode = (key, initialValue) => {
  
    const [darkModeOn, setDarkModeOn] = useLocalStorage("darkModeOn");

    return [storedValue];
    
};

export default useLocalStorage;