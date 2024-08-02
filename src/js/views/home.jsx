import React, { useContext, useEffect } from "react";
 // Adjust path as needed
import "../../styles/home.css"; // Ensure this imports your CSS file
import Thinking from "../../img/m101.jpg"; 
import { Context } from "../store/appContext.jsx";
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
                className="list-group-item d-flex justify-content-between col-12"
                >
                
                  <span ><img src={Thinking}/> {item.item}</span>
                
                  <div className="info col-4">
                    <h5><i className="fas fa-user d-block"></i>{item.name}</h5>
                    <span><i className="fas fa-map-marker-alt d-block"></i>{item.address} </span>
                    <span><i className="fas fa-phone d-block"></i>{item.phone}</span>
                    <span><i className="fas fa-envelope d-block"></i>{item.email}</span>
                    <button className="btn " onClick={() => actions.handleDelete(item.id)}>
                <i className="fas fa-trash"></i>
                </button>
                  </div>
                
                
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  export default Home