import logo from './logo.svg';
import './App.css';
import {ImageGallery} from './ImageGallery'
import {  useState,useEffect } from 'react';
import axios from 'axios'
import {Seacrh}  from './Seacrh'

function App() {

  const [images, setimage] = useState([])
  const [term, setterm] = useState('')
  const [message, setmessage] = useState({
   error: '', success:"",

  })
 
 let data ='yellow+flowers';


   


  useEffect(() => {

console.log(`https://pixabay.com/api/?key=25211925-fa465b29244f522b85edaef9a&q=${term}&image_type=photo`)
    axios.get(`https://pixabay.com/api/?key=25211925-fa465b29244f522b85edaef9a&q=${term}&image_type=photo`)
    .then((response) => {
      // console.log(response.data.hits);
      // console.log(response.status);
      // console.log(response.statusText);
      // console.log(response.headers);
      // console.log(response.config);
      // console.log(response);

      setimage(response.data.hits)
    });
   
  }, [term])


  console.log(term);

  return (
  <>
  

  <Seacrh  searchtext = {(text)=>setterm(text)}/>
  <ImageGallery  images ={images}/>
 
  
  </>
  );
}

export default App;
