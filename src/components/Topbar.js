import React,{useState,useEffect} from 'react'
import "./styles/style.css";


const Topbar = () => {
     const [clickedSearch, setClickedSearch] = useState(false);
     const [searchValue, setSearchValue] = useState([]);
      const [products, setProducts] = useState([]);
      const [productsCopy, setProductsCopy] = useState([]);
     useEffect(() => {
       if (clickedSearch) {
         console.log(searchValue);
         if (searchValue.toString().trim() === "") setProducts(productsCopy);
         setProducts(
           products.filter((item) => item.title.includes(searchValue))
         );
       }
     }, [clickedSearch, products, productsCopy, searchValue]);
    return (
      <div className="tob-bar">
        <h1>Products</h1>
        <div class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
          <button
            class="btn btn-outline-success"
            type="submit"
            onClick={() => setClickedSearch(true)}
          >
            Search
          </button>
        </div>
      </div>
    );
}

export default Topbar
