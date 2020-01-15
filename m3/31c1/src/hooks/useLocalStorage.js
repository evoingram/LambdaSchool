import React from "react";




const useLocalStorage = (key, initialValue) => {
  //JSON.parse(item)
    /*
- [ ] In the callback function, we'll check to see if the item we passed in already exists in localStorage, and return that value, otherwise we'll return whatever initialValue was passed in.
- [] Quick note, if you pass in arrays or objects to localStorage, you will need to parse it into JSON.Then when you retrieve it, like we do below, you'll need to parse it back into regular JavaScript
    */
    const [storedValue, setStoredValue] = useState(cb);

    cb = () => { 
        // check to see if the item we passed in already exists in localStorage, & return that value
        // otherwise we'll return whatever initialValue was passed in.
        
    }
  return (

      
  );
};

export default useLocalStorage;