const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			favoritos: [],
			personaje_detalle: [],
			planeta_detalle: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			fetchPeople: async () => {
				const URL = "https://fabianchs-starwarsapi.herokuapp.com/people";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();
				setStore({ personajes: json });
			},
			fetchPlanets: async () => {
				const URL = "https://fabianchs-starwarsapi.herokuapp.com/planets";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();
				setStore({ planetas: json });
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

			restoreCharPlan: () => {
				const base = [];
				setStore({ personaje_detalle: base });
				setStore({ planeta_detalle: base });
			},

			changeChar_detail: personajes => {
				let character = personajes;

				setStore({ personaje_detalle: character });
			},
			changePlanet_detail: planetas => {
				let planet = planetas;
				setStore({ planeta_detalle: planet });
			}
		}
	};
};

export default getState;
