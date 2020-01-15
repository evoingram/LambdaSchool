import React, { useEffect } from "react";
import { useLocalStorage } from "useLocalStorage.js";




const useDarkMode = (key, initialValue) => {
  
    const [darkModeOn, setDarkModeOn] = useLocalStorage("darkModeOn");

    useEffect(() => {
        let bodyElement = window.getElementsByTagName("body");
        if (darkModeOn) {
            bodyElement.classList.remove("dark-mode");
        }
        else {
            bodyElement.classList.add("dark-mode");
        }


    }, [darkModeOn]);
    
    return [darkModeOn, setDarkModeOn];
    
};

export default useDarkMode;