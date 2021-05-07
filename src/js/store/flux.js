const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
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
			synkTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token");
				if (token && token != "" && token != undefined) {
					setStore({ token: token });
				}
			},
			logout: () => {
				sessionStorage.removeItem("token");

				setStore({ token: null });
			},
			login: async (email, password) => {
				const url = "https://3000-blue-chameleon-iwrhsjn1.ws-us03.gitpod.io/token";

				const options = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				};

				try {
					const resp = await fetch(url, options);
					if (resp.status !== 200) {
						alert("Hubo un error desde flux");
						return false;
					}
					const data = await resp.json();
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token });
					return true;
				} catch (error) {
					console.error("Ha ocurrido un error");
				}
			},
			register: async (email, password) => {
				const url = "https://3000-blue-chameleon-iwrhsjn1.ws-us03.gitpod.io/register";

				const options = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				};

				try {
					const resp = await fetch(url, options);
					if (resp.status !== 200) {
						alert("Hubo un error");
						return false;
					}
					const data = await resp.json();
					return true;
				} catch (error) {
					console.error("Ha ocurrido un error");
				}
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
				let lista = listaFav;
				let ingresar = true;

				listaFav.map((item, index) => {
					if (listaFav[index] == nombre) {
						ingresar = false; //Si encuentra el nombre en la lista, desactiva la variable que permite añadir el nombre a la lista
						//pass
					}
				});

				if (ingresar == true) {
					lista.push(nombre); //Si la  variable es true, permite añadir nuevos elementos
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
