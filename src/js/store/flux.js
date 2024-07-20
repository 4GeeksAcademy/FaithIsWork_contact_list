import { json } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "red");
			},
			onClick={() => deleteData(task.id)}

getContacts: () => {
	fetch("https://playground.4geeks.com/contact/agendas/FaithIsWork/contacts")
		.then(res => res.json())
		.then(data => setStore({ contacts: data.contacts }))
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
			.then(data => console.log(data))

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
			}
		}
	};
};

export default getState;
