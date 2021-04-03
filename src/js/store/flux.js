const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			favoritos: [],
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
			agrFav: (index, listaFav, nombre) => {
				//con type se refiere a si es planeta o personaje, así una única función se encarga de manejar los favoritos
				let lista = listaFav;
				let ingresar = true;

				listaFav.map((item, index) => {
					if (listaFav[index] == nombre) {
						ingresar = false; //Si encuentra el nombre en la lista, desactiva la variable que permite añadir el nombre a la lista
						//pass
					}
				});

				if (ingresar == true) {
					lista.push(nombre); //Si la variable es true, permite añadir nuevos elementos
					//así se evita la duplicidad de nombres en la lista
				}
				setStore({ favoritos_personaje: lista });
			},
			delFav: (listaFav, nombre) => {
				let borrar = false;
				let posicion = 0;
				let lista = listaFav;

				listaFav.map((item, index) => {
					if (listaFav[index] == nombre) {
						lista.splice(index, 1);
					}
				});
				setStore({ favoritos_personaje: lista });
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
