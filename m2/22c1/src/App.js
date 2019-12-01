import React, {useState, useEffect, Component} from "react"; 
import ReactDOM from "react-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'reactstrap';
import styled from 'styled-components';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

/*// div
const StyledDiv = styled.div``;
// paragraph
const StyledP = styled.p``;
// section
const StyledSection = styled.section``;
// headers h1 - h6
const StyledHeading = styled.h1``;
// a
const StyledA = styled.a``;
// etc.....*/
// date picker at https://github.com/Hacker0x01/react-datepicker

const nasaImg = styled.img`
    width: 50%;
    height: 100%;
`;
const Button = styled.button`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;

${props => (props.type === 'primary' ? `background: #2196f3;` : null)}
    ${props => (props.type === 'success' ? `background: #4caf50;` : null)}
    ${props => (props.type === 'danger' ? `background: #f44336;` : null)}
    ${props => (props.type === 'warning' ? `background: #fdd835;` : null)}
`;
let photoDay;
let copyright;
let date;
let explanation;
let imgURL;
export class Example extends React.Component {

}
    
    
  

function App() {
  /* couldn't get it to work below
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };


  handleSelect = (date, event, monthSelectedIn) => {
    // Preventing onFocus event to fix issue
    // https://github.com/Hacker0x01/react-datepicker/issues/628
    this.setState({ preventFocus: true }, () => {
      this.preventFocusTimeout = setTimeout(
        () => this.setState({ preventFocus: false }),
        50
      );
      return this.preventFocusTimeout;
    });
    this.setSelected(date, event, undefined, monthSelectedIn);
    if (!this.props.shouldCloseOnSelect || this.props.showTimeSelect) {
      this.setPreSelection(date);
    } else if (!this.props.inline) {
      this.setOpen(false);
    }
  };
    */
  // Initialize state to hold the image URL
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
        .get('https://api.nasa.gov/planetary/apod?api_key=' + process.env.REACT_APP_API_KEY)
        .then(
            response =>{setImgURL(response.data.hdurl);
                        setCopyright(response.data.copyright);
                        setDate(response.data.date);
            setExplanation(response.data.explanation);
            
    }    
        )
        .catch(error => {console.log(error);});
          
        var min = 700;
        var max = 1000;
        var rand =  min + Math.round(Math.random() * (max-min));
                  console.log(rand);
      console.log('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + rand + '&api_key=' + process.env.REACT_APP_API_KEY);
                  
            axios
              .get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol='+ rand + '&api_key=' + process.env.REACT_APP_API_KEY)
              .then(
                response => {
                  console.log(response.data);
                  setImgURL1(response.data.photos[0].img_src);
                  setCopyright1(response.data.photos[0].id);
                  setDate1(response.data.photos[0].earth_date);
                  setExplanation1(`${response.data.photos[0].rover.name}, ${response.data.photos[0].rover.status}`);
                }
          
              )
              .catch(error => {console.log(error);})      
    
    
    
    
    
    }, []);

    
  
      /* couldn't get it to work below
      <DatePicker
  selected={Example.state.date}
  onSelect={this.handleSelect} //when day is clicked
  onChange={this.handleChange} //only when value has changed
      />*/

  
  return (
      

    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    <div className="wrapper">
      <h1>Hello From the Ingram Home Component</h1>
    </div>    <div>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="danger">Danger</Button>
      <Button type="warning">Warning</Button>
    </div>
    <div id="nasa1" className="nasa">Copyright:  {copyright}</div>
    <div id="nasa2" className="nasa">Date:  {date}</div>
      <div id="nasa2" className="nasa">Explanation:  {explanation}</div>
    <div id="nasa3" className="nasaImg"><img src={imgURL} alt="NASA Astronomy Photo of the Day"/></div>
    <div className="wrapper">
      <h1>NASA Mars Rover Mission Photos:</h1>
    </div>   
    <div id="nasa1" className="nasa">Random Images from sols 700 to 1000:</div>
      <div id="nasa2" className="nasa">IMG URL:  {imgURL1}</div>
      <div id="nasa4" className="nasa">ID Number:  {copyright1}</div>
      <div id="nasa5" className="nasa">Status:  {explanation1}</div>
      
    <div id="nasa3" className="nasaImg"><img src={imgURL1} alt="NASA Mars Rover Photo"/></div>
    </div>
  );
}


export default App;


