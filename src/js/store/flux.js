const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			favoritos: [],
			id_detail: [],
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

			fetchPeople: async () => {
				const URL = "https://swapi.dev/api/people/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();
				setStore({ personajes: json.results });
			},
			fetchPlanets: async () => {
				const URL = "https://swapi.dev/api/planets/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();
				setStore({ planetas: json.results });
			},
			agrFav: (type, index) => {
				//con type se refiere a si es planeta o personaje, así una única función se encarga de manejar los favoritos
				if (type == "character") {
					//tipo={name: "", tipo:"", indice: ""}
					lista = store.favoritos;
					lista.push("personaje");
				} else if (type == "planet") {
					lista = store.favoritos;
					lista.push("personaje");
				}
				setStore({ favoritos: lista });
			},
			changeDetail_id: id => {
				let update = id;
				setStore({ id_detail: update });
			}
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
	};
};

export default getState;
