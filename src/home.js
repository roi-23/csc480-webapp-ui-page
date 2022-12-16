
import './home.css';
import {useState} from "react";

function Home() {

    const data = require("./test-data.json")
    // The get products rest api would be hooked here.

    const [search, setSearch] = useState('')

    const main = () => (
        <div className="App">
      <header className="app-header">
          <div>Webapp - Ecommerce UI</div>
          <div className="app-sub-header">CSC-480</div>
      </header>
        <main>
            <div className="search-input">
                <input placeholder="search products" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="products-display-container">
                <div className="products-display-main">
                    <div className="product-display-header">Check Out Our Latest Electronic Products</div>
                    <div className="grid-product-display">
                            {data.filter(item =>{
                                return search.toLowerCase() === ''
                                ? item : item.name.toLowerCase().includes(search)
                            }).map((p) =>(
                                <div className="product-container">
                                    <div className="product">
                                        <div className="image">Product Image</div>
                                        <div className="product-details">Product Details</div>
                                        {/*<div> {p.id}</div>*/}
                                        <div className="product-name"><b>{p.name}</b></div>
                                        <div className="product-description">{p.desc}</div>
                                        <div className="view-product">Buy</div>
                                    </div>

                                </div>
                            ))}
                    </div>

                </div>
            </div>
        </main>
        <footer>
            <div className="footer-container">
                    <div className="footer-main">
                        <div> Copyright 2022. Senior project.</div>
                        <div>By Roi Hkawng</div>
                        <div>The College of Idaho</div>
                    </div>
                </div>
        </footer>
    </div>
    );

  return (
   <>
       {main()}
   </>
  );
}

export default Home;
