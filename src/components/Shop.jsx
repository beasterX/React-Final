import "./styles.css";
import "./shops.css";
import { useState } from "react";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  const addToCart = (product) => {
    if (!selectedSize) {
      alert("Please select a size first.");
      return;
    }
    setCart([...cart, { ...product, size: selectedSize }]);
    setTotal(total + product.price);
    setSelectedSize(null);
  };
  const selectSize = (size) => {
    setSelectedSize(size);
  };
  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  const checkout = () => {
    alert(`Purchase successful! Total: $${total}`);
    clearCart();
  };

  return (
    <div className="main">
      <h1>Shop</h1>
      <div className="shop">
        <div className="container">
          <div className="card">
            <div className="imgBx">
              <img src="./Resources/rl-jersey.png" alt="rm-jersey" />
            </div>
            <div className="contentBx">
              <h2>Real Madrid Jersey</h2>
              <div className="size">
                <h3>Size :</h3>
                <button onClick={() => selectSize("S")}>S</button>
                <button onClick={() => selectSize("M")}>M</button>
                <button onClick={() => selectSize("L")}>L</button>
                <button onClick={() => selectSize("XL")}>XL</button>
              </div>
              <div className="color">
                <h3>Price :</h3>
                <span>$100</span>
              </div>
              <button
                className="addcart"
                onClick={() =>
                  addToCart({ name: "Real Madrid Jersey", price: 100 })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="imgBx">
              <img
                src="./Resources/chelsea-jerse.png"
                alt="ch-jersey"
                style={{ width: 230 }}
              />
            </div>
            <div className="contentBx">
              <h2>Chelsea Jersey</h2>
              <div className="size">
                <h3>Size :</h3>
                <button onClick={() => selectSize("S")}>S</button>
                <button onClick={() => selectSize("M")}>M</button>
                <button onClick={() => selectSize("L")}>L</button>
                <button onClick={() => selectSize("XL")}>XL</button>
              </div>
              <div className="color">
                <h3>Price :</h3>
                <span>$100</span>
              </div>
              <button
                onClick={() =>
                  addToCart({ name: "Chelsea Jersey", price: 100 })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="imgBx">
              <img
                src="./Resources/barca-j.png"
                alt="ba-jersey"
                style={{ width: 320 }}
              />
            </div>
            <div className="contentBx">
              <h2>Barcelona Jersey</h2>
              <div className="size">
                <h3>Size :</h3>
                <button onClick={() => selectSize("S")}>S</button>
                <button onClick={() => selectSize("M")}>M</button>
                <button onClick={() => selectSize("L")}>L</button>
                <button onClick={() => selectSize("XL")}>XL</button>
              </div>
              <div className="color">
                <h3>Price :</h3>
                <span>$91</span>
              </div>
              <button
                onClick={() =>
                  addToCart({ name: "Barcelona Jersey", price: 91 })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="imgBx">
              <img
                src="./Resources/manu.png"
                alt="ba-jersey"
                style={{ width: 300 }}
              />
            </div>
            <div className="contentBx">
              <h2>Man United Jersey</h2>
              <div className="size">
                <h3>Size :</h3>
                <button onClick={() => selectSize("S")}>S</button>
                <button onClick={() => selectSize("M")}>M</button>
                <button onClick={() => selectSize("L")}>L</button>
                <button onClick={() => selectSize("XL")}>XL</button>
              </div>
              <div className="color">
                <h3>Price :</h3>
                <span>$80</span>
              </div>
              <button
                onClick={() =>
                  addToCart({ name: "Manchester United Jersey", price: 80 })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="imgBx">
              <img
                src="./Resources/lp-jersey.png"
                alt="ba-jersey"
                style={{ width: 300 }}
              />
            </div>
            <div className="contentBx">
              <h2>Liverpool Jersey</h2>
              <div className="size">
                <h3>Size :</h3>
                <button onClick={() => selectSize("S")}>S</button>
                <button onClick={() => selectSize("M")}>M</button>
                <button onClick={() => selectSize("L")}>L</button>
                <button onClick={() => selectSize("XL")}>XL</button>
              </div>
              <div className="color">
                <h3>Price :</h3>
                <span>$60</span>
              </div>
              <button
                onClick={() =>
                  addToCart({ name: "Liverpool Jersey", price: 60 })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="imgBx">
              <img
                src="./Resources/mancity.png"
                alt="ba-jersey"
                style={{ width: 230 }}
              />
            </div>
            <div className="contentBx">
              <h2>Manchester City Jersey</h2>
              <div className="size">
                <h3>Size :</h3>
                <button onClick={() => selectSize("S")}>S</button>
                <button onClick={() => selectSize("M")}>M</button>
                <button onClick={() => selectSize("L")}>L</button>
                <button onClick={() => selectSize("XL")}>XL</button>
              </div>
              <div className="color">
                <h3>Price :</h3>
                <span>$80</span>
              </div>
              <button
                onClick={() =>
                  addToCart({ name: "Manchester City Jersey", price: 80 })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="imgBx">
              <img
                src="./Resources/ars-jersey-removebg.png"
                alt="ba-jersey"
                style={{ width: 240 }}
              />
            </div>
            <div className="contentBx">
              <h2>Arsenal Jersey</h2>
              <div className="size">
                <h3>Size :</h3>
                <button onClick={() => selectSize("S")}>S</button>
                <button onClick={() => selectSize("M")}>M</button>
                <button onClick={() => selectSize("L")}>L</button>
                <button onClick={() => selectSize("XL")}>XL</button>
              </div>
              <div className="color">
                <h3>Price :</h3>
                <span>$65</span>
              </div>
              <button
                onClick={() => addToCart({ name: "Arsenal Jersey", price: 65 })}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="imgBx">
              <img
                src="./Resources/bayern-jers.png"
                alt="ba-jersey"
                style={{ width: 240 }}
              />
            </div>
            <div className="contentBx">
              <h2>Bayern Munich Jersey</h2>
              <div className="size">
                <h3>Size :</h3>
                <button onClick={() => selectSize("S")}>S</button>
                <button onClick={() => selectSize("M")}>M</button>
                <button onClick={() => selectSize("L")}>L</button>
                <button onClick={() => selectSize("XL")}>XL</button>
              </div>
              <div className="color">
                <h3>Price :</h3>
                <span>$65</span>
              </div>
              <button
                onClick={() =>
                  addToCart({ name: "Bayern Munich Jersey", price: 65 })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="cart">
        <h2>Cart ({cart.length})</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.size} - ${item.price}
            </li>
          ))}
        </ul>
        <h3>Total: ${total}</h3>
        <button className="clear" onClick={clearCart}>
          Clear Cart
        </button>
        <button className="checkout" onClick={checkout}>
          Checkout
        </button>
      </div>
      <footer>
        <div>
          <p>© 2024 by Mir Faiyazur Rahman</p>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
