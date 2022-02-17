import React ,{useContext,useState,useEffect} from 'react'
import Medicines from './Medicines'
import '../App.css';
import { useDispatch ,useSelector } from 'react-redux';
import SlickDemo1 from './Carousel/SlickDemo1';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

const Home = () => {
//   const [med,setMed] = useState(null);
//   useEffect(()=>{
//     fetch("http://localhost:3001/api/meds").then(response=>response.json()).then(data=> setMed(data))
  
// })
//  const item = useSelector(state => state.getProducts.item)
//  const [filterdata, setFilterData] = useState([]);
    return (
      <>
   
     <SearchBar/>
      </>
    )
  }

export default Home;
