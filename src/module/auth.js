import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { deleteCookie, setCookie } from "../common/Cookie";
import { history } from "../App";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { authApp } from "../firebase";

const LOG_OUT = "/auth/LOGOUT";
const GET_USER = "/auth/GETUSER";
const SET_USER = "/auth/SETUSER";

//action
export const setUser = createAction(SET_USER, (user) => ({ user }));
export const logOut = createAction(LOG_OUT, (user) => ({
  user,
}));
export const getUser = createAction(GET_USER, (user) => ({
  user,
}));

//middleware
export const loginFB = (id, pwd) => {
  return function (dispatch, getState) {
    setPersistence(authApp, browserSessionPersistence).then((res) => {
      signInWithEmailAndPassword(authApp, id, pwd)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(
            setUser({
              name: user.displayName,
              id: id,
              user_profile: "",
              uid: user.uid,
            })
          );
          history.push("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    });
  };
};

export const signupFB = (id, pwd, name) => {
  console.log("도착?");
  return function (dispatch, getState) {
    createUserWithEmailAndPassword(authApp, id, pwd)
      .then((userCredential) => {
        const user = userCredential.user;
        authApp.currentUser
          .updateProfile({ displayName: name })
          .then(() => {
            dispatch(
              setUser({ name: name, id: id, user_profile: "", uid: user.uid })
            );
            history.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
};

export const loginCheckFB = () => {
  return function (dispatch, getState) {
    authApp.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUser({
            name: user.displayName,
            user_profile: "",
            id: user.email,
            uid: user.uid,
          })
        );
      } else {
        dispatch(logOut());
      }
    });
  };
};

export const logoutFB = () => {
  return function (dispatch, getState) {
    authApp.signOut().then(() => {
      dispatch(logOut());
      history.replace("/login");
    });
  };
};

const initialState = {
  user: null,
  is_login: false,
};

const auth = handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => {},
  },
  initialState
);

export default auth;
