import { URL_AUTH_SIGNIN } from "../../constants/DataBase";

export const SIGNIN = "SIGNIN";

export const signIn = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(URL_AUTH_SIGNIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    })

    const resData = await response.json()
    
    console.log(resData)

    dispatch({
      type: SIGNIN,
      token: resData.idToken,
      userId: resData.localId,
    })
  }
}