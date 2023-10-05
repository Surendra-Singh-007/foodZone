import { useState } from "react";
import "./Menu.css";
import burger from "./images/burger.jpeg"
import fries from "./images/fries.jpeg"
import coke from "./images/coke.jpeg"
import pepsi from "./images/pepsi.jpeg"
export default function Menu() {
  const Data = [
    {
      name: "Hamburger",
      price: "200",
      image: burger,
    },
    {
      name: "Fries",
      price: "100",
      image: fries,
    },
    {
      name: "Coke",
      price: "50",
      image: coke,
    },
    {
      name: "Pepsi",
      price: "50",
      image: pepsi,
    },
  ];

  

  const { data, setData } = useState({});

  const handleClick = (e) => {};
  return (
    <>
      <div className="menu-card">
        {Data.map((item) => {
          return (
            <>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={item.image}
                  className="card-img-top"
                  alt="..."
                  height="200px"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">price : {item.price}</p>
                  <p></p>
                  <a href="#" className="btn btn-primary">
                    +
                  </a>
                  <a
                    href="#"
                    onClick={handleClick}
                    className="btn btn-primary oth"
                  >
                    -
                  </a>
                </div>
              </div>
            </>
          );
        })}
       
      </div>
    </>
  );
}
