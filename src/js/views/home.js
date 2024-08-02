import React, { useContext } from "react";
 // Adjust path as needed
import "../../styles/home.css"; // Ensure this imports your CSS file
import Thinking from "../../img/m101.jpg"; 
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

   
export const Home = () => {
    const { store, actions } = useContext(Context);
  
    return (
      <div className="container col-12 ">
        <ul className="list-group col-12">
          {store.contacts.length !== 0 && store.contacts.map((item, index) => {
            return (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
                >
                <Link to={"/single/" + index}>
                  <span ><img src={Thinking}/> {item.item}</span>
                </Link>
                  <div className="info col-4">
                    <h5><i className="fas fa-user d-block"></i>{item.name}</h5>
                    <span><i className="fas fa-map-marker-alt d-block"></i>{item.address} </span>
                    <span><i className="fas fa-phone d-block"></i>{item.phone}</span>
                    <span><i className="fas fa-envelope d-block"></i>{item.email}</span>
                  </div>
                {// Conditional render example
                // Check to see if the background is orange, if so, display the message
                }
                <button className="btn " onClick={() => actions.handleDelete(item.id)}>
                <i class="fas fa-trash"></i>
                </button>
              </li>
            );
          })}
        </ul>
        <br />
        <Link to="/">
          <button className="btn btn-primary">Back home</button>
        </Link>
      </div>
    );
  };

  export default Home