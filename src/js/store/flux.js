const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			personajes_detalle: [],
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
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			obtainCharacters: () => {
				let url = "https://www.swapi.tech/api/people/";
				let cargardetalles = [];
				fetch(url)
					.then(res => res.json())
					.then(data => {
						//personajes.push(data.results);
						setStore({ personajes: data.results });

						data.results.map((item, index) => {
							//console.log(item.url);

							fetch(item.url)
								.then(res => res.json())
								.then(data => {
									cargardetalles.push(data.result.properties);
									console.log(data.result.properties);
								})
								.catch(err => {
									console.error(err);
								});
						});

						//console.log(personajes);
					})
					.catch(err => {
						console.error(err);
					});

				setStore({ personajes_detalle: cargardetalles });

				//const taskItems = div_cards.map((item, index) => item);
				console.log("flux por aca xd");
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
