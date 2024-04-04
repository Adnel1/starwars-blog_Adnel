const base = "https://www.swapi.tech/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			loadStarWarsPeople: async () => {
				try {
					const response = await fetch(base + "people")
					const data = await response.json()
					if (data?.message !== 'ok') throw Error

					const promises = data.results.map(person => fetch(person.url))
					const responses = await Promise.all(promises);
					const finalizedData = await Promise.all(responses.map(response => response.json()));
					const formattedData = finalizedData.map(response => {
						return { 
							description: response.result.description,
							uid: response.result.uid,
							id: response.result._id,
							...response.result.properties
						}
					})
					setStore({ characters: formattedData })
				} catch(e) {
					console.error(e)
				}
				console.log("fetch data and update store here!")
			},
			loadStarWarsPlanets: async () => {
				try {
					const response = await fetch(base + "planets")
					const data = await response.json()
					if (data?.message !== 'ok') throw Error

					const promises = data.results.map(planet => fetch(planet.url))
					const responses = await Promise.all(promises);
					const finalizedData = await Promise.all(responses.map(response => response.json()));
					const formattedData = finalizedData.map(response => {
						return { 
							description: response.result.description,
							uid: response.result.uid,
							id: response.result._id,
							...response.result.properties
						}
					})
					setStore({ planets: formattedData })
				} catch(e) {
					console.error(e)
				}
				console.log("fetch data and update store planets!")
			},
			loadStarWarsVehicles: async () => {
				try {
					const response = await fetch(base + "vehicles")
					const data = await response.json()
					if (data?.message !== 'ok') throw Error

					const promises = data.results.map(vehicle => fetch(vehicle.url))
					const responses = await Promise.all(promises);
					const finalizedData = await Promise.all(responses.map(response => response.json()));
					const formattedData = finalizedData.map(response => {
						return { 
							description: response.result.description,
							uid: response.result.uid,
							id: response.result._id,
							...response.result.properties
						}
					})
					setStore({ vehicles: formattedData })
				} catch(e) {
					console.error(e)
				}
			},
			toggleFavorites: (id, isAdding) => {
				const store = getStore();
				const favoritesArray = store.favorites;

				if (isAdding) {
					setStore(
						{
							favorites: [...favoritesArray, id]
						}
					)
				}
				else {
					const filteredArray = favoritesArray.filter((item) => {return item !== id})
					setStore(
						{
							favorites: filteredArray
						}
					)
				}

			}
		}
	};
};

export default getState;
