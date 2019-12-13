import React from 'react';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // styled components


  // function app
  function App() {

    // variables to hold state
    const [imgURL, setImgURL] = useState("");
    const [copyright, setCopyright] = useState("");
    const [date, setDate] = useState("");
    const [explanation, setExplanation] = useState("");
    const [imgURL1, setImgURL1] = useState("");
    const [copyright1, setCopyright1] = useState("");
    const [date1, setDate1] = useState("");
    const [explanation1, setExplanation1] = useState("");



    useEffect(
      () => {

        axios
          .get('https://swapi.co/api/people/')
          .then(
            response =>{setImgURL(response.data.hdurl);
                        setCopyright(response.data.copyright);
                        setDate(response.data.date);
                        setExplanation(response.data.explanation);
            
            }
          )
          .catch(error => { console.log(error); });
        
        

      }, []);

  }

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
