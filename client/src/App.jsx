import { useState, useEffect } from "react";
import "./App.css";
import CartItem from "./components/CartItem";
import CardItem from "./components/CardItem";

function App() {
  //? ngambil data
  const [dataMenu, setDataMenu] = useState([]);

  async function getData() {
    const url = "https://adaptable-fortunate-hiss.glitch.me/menu";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);

      setDataMenu(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    // isinya
    getData();
  }, []);

  //? handle cart
  const [cart, setCart] = useState([]);

  function addToCart(menu) {
    setCart([...cart, menu]);
  }
  // Split the menu items into two groups: Mie and Beverages
  const mieMenu = dataMenu.filter(item => item.title.includes("Mie"));
  const beverageMenu = dataMenu.filter(item => !item.title.includes("Mie"));

  return (
    <>
      {/* navbar */}
      <nav className="navbar bg-success-subtle">
        <div className="container d-flex">
          <a class="navbar-brand" href="#">
            <img src="public/logo_mie.png" alt="Logo Mie" height="75"
            />
          </a>

          <button
            className="btn btn-outline-success btn-lg"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <i className="bi bi-cart-plus-fill me-2"> - {cart.length}</i>
          </button>
        </div>
      </nav>

      <div className="container py-5">
        <div className=" d-flex justify-content-center">
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" style={{ width: "8cd0%" }}>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="public/1.jpg" class="d-block w-100" alt="poster promo-1" style={{ height: "400px", "border-radius": "20px" }} />
              </div>
              <div class="carousel-item">
                <img src="public/2.jpg" class="d-block w-100" alt="poster promo-2" style={{ height: "400px", "border-radius":"20px" }} />
              </div>
              <div class="carousel-item">
                <img src="public/3.jpg" class="d-block w-100" alt="poster promo-3" style={{ height: "400px","border-radius": "20px" }} />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      
        
          {/* Mie Menu */}
        <section class="py-5">  
          <h2>MIE SERIES</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            {mieMenu.map((menu) => (
              <CardItem key={menu.id} menu={menu} addToCart={addToCart} />
            ))}
          </div>
        </section>

        {/* Beverage Menu */}
        <h2>BEVERAGE</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {beverageMenu.map((menu) => (
            <CardItem key={menu.id} menu={menu} addToCart={addToCart} />
          ))}
        </div>

      </div>

      {/* drawer */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-2">
          {cart.map((el, i) => {
            return <CartItem cart={el} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
