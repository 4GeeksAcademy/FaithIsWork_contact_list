import { json } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "red");
			},
			

getContacts: () => {
	fetch("https://playground.4geeks.com/contact/agendas/FaithIsWork/contacts")
		.then(res => res.json())
		.then(data => {
		setStore({ contacts: data.contacts })})
},
	handleSendData: (fullName, email, phone, address) => {
		fetch('https://playground.4geeks.com/contact/agendas/FaithIsWork/contacts',
			{
				method: "POST",
				headers: { 'Content-Type': "application/json" },
				body: JSON.stringify({
					"name": fullName,
					"phone": phone,
					"email": email,
					"address": address
				})
			}
		).then(res => res.json())
			.then(data => {
				getActions().getContacts()
			})

	},
		loadSomeData: () => {
			/**
				fetch().then().then(data => setStore({ "foo": data.bar }))
			*/
		},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			handleDelete: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/FaithIsWork/contacts/${id}`,
					{
						method: 'DELETE'

					}
				)	.then(respose=>{
					getActions().getContacts()
				})
					

			}
		}
	};
};

export default getState;
