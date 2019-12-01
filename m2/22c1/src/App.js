import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'reactstrap';
import styled from 'styled-components';
import axios from 'axios';
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

const WrapperDiv = styled.div`
    width: 100%;
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

function App() {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=' + process.env.REACT_APP_API_KEY)
  .then(response => {
    console.log(response.data);
    copyright  = response.data.copyright;
    console.log("copyright:  "+copyright);
    date = response.data.date;
    console.log("date:  "+date);
    explanation = response.data.explanation;
    console.log("explanation:  "+explanation);
    imgURL=response.data.hdurl;
    console.log("imgURL:  "+imgURL);
  })
  .catch(error => {
    console.log(error);
  });
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
    <div id="nasa1" className="nasa">Copyright:{copyright}</div>
    <div id="nasa2" className="nasa">Date:{date}</div>
    <div id="nasa3" className="nasaImg"><img src={imgURL}/></div>
    </div>

  );
}



export default App;


