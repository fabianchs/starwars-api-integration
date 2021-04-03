const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			favoritos_personaje: [],
			favoritos_planeta: [],
			id_detail: [],
			personaje_detalle: [],
			planeta_detalle: []
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
					setStore({ favoritos_personaje: lista });
					lista.push("personaje");
				} else if (type == "planet") {
					lista = store.favoritos;
					setStore({ favoritos_personaje: lista });
					lista.push("personaje");
				}
			},

			obtainCharacterDetail: async id => {
				const str_id = (id + 1).toString();
				const URL = "https://swapi.dev/api/people/" + str_id + "/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();
				console.log(json);
				setStore({ personaje_detalle: json });
			},
			obtainPlanetDetail: async id => {
				const str_id = (id + 1).toString();
				const URL = "https://swapi.dev/api/planets/" + str_id + "/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();
				console.log(json);
				setStore({ planeta_detalle: json });
			},
			restoreCharPlan: () => {
				const base = [];
				setStore({ personaje_detalle: base });
				setStore({ planeta_detalle: base });
			},

			changeDetail_id: id => {
				let update = id;
				console.log(update);
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
