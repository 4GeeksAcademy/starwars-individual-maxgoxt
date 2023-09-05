import axios from "axios";
let url = "https://laughing-space-couscous-9pgg5x9g6gw3p4x5-3000.app.github.dev"
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			people: [],
			detallepeople: {},
			planetas: [],
			detalledePlaneta: {},
			autos: [],
			detallesAuto: {},
			favorito: [],
			auth: false,

		},
		actions: {

			signin: async (nombre, Apellido, emailR, passwordR) => {
				try {
					let data = await axios.post(url + '/signup',
					{
						'nombre' : nombre,
						'apellido' : Apellido,
						'email' : emailR,
						'password' : passwordR
					})
					console.log(data);
					return true
				} catch (error) {
					console.log(error);
					if (error.response.status === 404) {
						alert(error.response.data.msj)
						setStore({ signUp : error.response.data.msj})
					}
					return false
				}
			},

			login: async (email,password) => {
				try {
					let data = await axios.post(url + '/login',
					{
						"email" : email,
						"password" : password
					})
					console.log(data);
					localStorage.setItem("token", data.data.access_token)
					setStore({ auth : true})
					return true
				} catch (error) {
					console.log(error);
					if (error.response.status === 404) {
						alert(error.response.data.msj)
					}
					return false
				}
			},

			logout: async () => {
				localStorage.removeItem('token')
				setStore({ auth : false})
			},

			getPerfil: async () => {
				try {
					let data = await axios.get('https://orange-potato-ggvvrpqvq9r2996v-3000.app.github.dev/perfil',
					{
						headers : {"Authorization" : "Bearer " + localStorage.getItem('token')}
					})
					console.log(data);
					return true
				} catch (error) {
					console.log(error);
					// if (error.response.status === 404) {
					// 	alert(error.response.data.msj)
					// }
					return false
				}
			},

			validToken: async () => {
				try {
					let data = await axios.get('https://orange-potato-ggvvrpqvq9r2996v-3000.app.github.dev/valid-token',
					{
						headers : {"Authorization" : "Bearer " + localStorage.getItem('token')}
					})
					console.log(data);
					console.log('soy valid token holaaaaaaaaaaaaa');
					setStore({ auth : true})
					return true
				} catch (error) {
					console.log(error);
					// if (error.response.status === 422) {
					// 	setStore({ auth : false})
					// 	console.log('soy valid token holaaaaaaaaaaaaa');
					// }
					return false
				}
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");

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


			/* personas */
			obtenerInfohome: async function () {
				try {
					let response = await fetch("https://swapi.dev/api/people");
					let data = await response.json();
					setStore({ people: data.results });


				} catch (error) {
					console.log(error);

				}
			},



			/* detalles de personajes*/

			obtenerInfoPerSingle: async function (num) {
				console.log(num)
				try {
					let response = await fetch("https://swapi.dev/api/people/" + num);
					let data = await response.json();

					setStore({ detallepeople: data });

				} catch (error) {
					console.log(error);

				}
			},



			/* planetas */
			obtenerInfoPlaneta: async function () {
				try {
					let response = await fetch("https://swapi.dev/api/planets");
					let data = await response.json();

					setStore({ planetas: data.results });



				} catch (error) {
					console.log(error);

				}
			},



			/* detalles de planetas*/

			obtenerPlanetaSingle: async function (num) {
				try {
					let response = await fetch("https://swapi.dev/api/planets/" + num);
					let data = await response.json();

					setStore({ detalledePlaneta: data });

				} catch (error) {
					console.log(error);

				}
			},

			//Autos
			obtenerAutos: async function () {
				try {
					let response = await fetch("https://swapi.dev/api/vehicles/");
					let data = await response.json();

					setStore({ autos: data.results });



				} catch (error) {
					console.log(error);

				}
			},

			//Detalles de autos
			obtenerAutoSingle: async function (num) {
				try {
					let response = await fetch("https://swapi.dev/api/vehicles/" + num);
					let data = await response.json();

					if (response.status === 404) {
						alert("la informacion detallada de este vehiculo no esta disponible")
					}
					setStore({ detallesAuto: data });

				} catch (error) {
					console.log(error);

				}
			},


			BorrarFavoritos: (nom) => {

				const store = getStore();

				setStore({
					...store, favorito: store.favorito.filter((item, newIndex) => {

						return nom != item
					})



				})


			},


			cargarFavorito: (nom, indi) => {
				const store = getStore();
				const actions = getActions();
				let nombrEx = false

				store.favorito.map((item, index) => {

					if (nom === item) {

						actions.BorrarFavoritos(nom)
						nombrEx = true

					}
				})

				if (nombrEx === false) {
					setStore({ ...store, favorito: [...store.favorito, nom] })
				}

			},

			CambiarColor: (nom) => {

				document.getElementById(nom).className = "far fa-heart"

			}

		}
	};
};




export default getState;

