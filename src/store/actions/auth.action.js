import { URL_API, URL_AUTH_SIGNUP } from "../../constants/DataBase";

export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

export const signUp = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(URL_AUTH_SIGNUP, {
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

    const resData = await response.json();
    
    dispatch({
      type: SIGNUP,
      token: resData.idToken,
      userId: resData.localId,
    })
  }
}