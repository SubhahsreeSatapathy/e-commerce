import React,{useState,useEffect} from "react"
import './App.css';
import ProductTable from "./components/ProductTable";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";



function App() {
  const [products, setProducts] = useState([]);
  // const getData = async () => {
  //   const response = await fetch(" https://fakestoreapi.com/products");
  //   setProducts(await response.json());
  // };
  // useEffect(()=>{
  //   getData()
  // },[]);
  return (
    <div className="container-fluid mt-5">
      <Topbar />
      <div className="row text-center">
        <Sidebar />
        <ProductTable />
      </div>
    </div>
  );

}

export default App;
