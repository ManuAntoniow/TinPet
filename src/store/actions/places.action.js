import * as FileSystem from "expo-file-system"
import Map from "../../constants/Map"
import { insertDog, fetchDogs } from "../../db/index"

export const ADD_DOG = "ADD_DOG"
export const LOAD_DOGS = "LOAD_DOGS"

export const addDog = (title, image, location) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${Map.API_KEY}`
    )

    if (!response.ok)
      throw new Error("No se ha podido comunicar con Google Mas API")

    const resData = await response.json()

    if (!resData.results)
      throw new Error(
        "No se han encontrado datos para las coordenadas seleccionadas"
      );

    const address = resData.results[0].formatted_address

    const fileName = image.split("/").pop()
    const Path = FileSystem.documentDirectory + fileName

    try {
      FileSystem.moveAsync({
        from: image,
        to: Path,
      })
      console.log('titulo:', title)
      console.log('imagen:', Path)
      console.log('address:', address)
      console.log('titulo:', location)
      const result = await insertDog(
        title,
        Path,
        address,
        location.lat,
        location.lng
      )
      console.log('resultado del insert:', result)
    } catch (err) {
      console.log('error del insert:', err.message)
      throw err
    }

    dispatch({
      type: ADD_DOG,
      payload: {
        title,
        image: Path,
        address: address,
        lat: location.lat,
        lng: location.lng,
      },
    })
  }
}

export const loadDogs = () => {
  return async (dispatch) => {
    try {
      const result = await fetchDogs()
      console.log(result)
      dispatch({ type: LOAD_DOGS, places: result.rows._array })
    } catch (error) {
      throw err
    }
  }
}