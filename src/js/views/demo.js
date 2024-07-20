import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Thinking from "../../img/m101.jpg"; 
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const {store,actions} = useContext(Context)
      
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		address: ""
	  });
	  const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
		  ...formData,
		  [name]: value
		});
	  };
	  const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData); // You can handle form submission logic here
		// Example: sendFormDataToServer(formData);
	  };
	return (
		<div className="container-fluid col-12 mt-5 "style={{width: '100%'}}>
		<h2 className="text-center mb-4 text-light">Contact Information</h2>
		<form onSubmit={handleSubmit}>
		  <div className="mb-3">
			<label htmlFor="fullName" className="form-label text-light">Full Name</label>
			<input
			  type="text"
			  className="form-control"
			  id="fullName"
			  name="fullName"
			  value={formData.fullName}
			  onChange={handleChange}
			  required
			/>
		  </div>
		  <div className="mb-3">
			<label htmlFor="email" className="form-label text-light">Email address</label>
			<input
			  type="email"
			  className="form-control"
			  id="email"
			  name="email"
			  value={formData.email}
			  onChange={handleChange}
			  required
			/>
		  </div>
		  <div className="mb-3">
			<label htmlFor="phone" className="form-label text-light text-light">Phone Number</label>
			<input
			  type="tel"
			  className="form-control"
			  id="phone"
			  name="phone"
			  value={formData.phone}
			  onChange={handleChange}
			  required
			/>
		  </div>
		  <div className="mb-3">
			<label htmlFor="address" className="form-label text-light">Address</label>
			<textarea
			  className="form-control"
			  id="address"
			  name="address"
			  value={formData.address}
			  onChange={handleChange}
			  rows="3"
			  required
			></textarea>
		  </div>
		  	<Link type="button" onClick={()=>actions.handleSendData(formData.fullName,formData.email,formData.phone,formData.address)} className="btn btn-primary text-light">Submit</Link>
		</form>
	  </div>
	)
}
export default Demo