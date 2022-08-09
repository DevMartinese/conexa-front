import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";

import clientAxios from "../../config/clientAxios";
import tokenAuth from "../../config/tokenAuth";

import {
  REGISTRO_EXITOSO,
  LOGIN_EXITOSO,
  OBTENER_USUARIO,
  CERRAR_SESION,
  OBTENER_POSTS,
  OBTENER_PHOTOS,
  REGISTRO_ERROR,
  LOGIN_ERROR
} from "../../types/types";

const AuthState = props => {

  const initialState = {
    token: localStorage.getItem("token"),
    posts: [],
    photos: [],
    autenticado: null,
    mensaje: null,
    usuario: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const registrarUsuario = async datos => {
    try {
      const respuesta = await clientAxios.post("register", datos);

      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data
      });

      usuarioAutenticado();
      obtenerPosts();
    } catch (error) {
      const alerta = {
        msg: error.response.data.error,
        categoria: "alerta-error",
      };

      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta
      });
    }
  };

  const iniciarSesion = async datos => {
    try {
      const respuesta = await clientAxios.post("login", datos);

      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data
      });

      usuarioAutenticado();
      obtenerPosts();
    } catch (error) {
      console.log(error);
      const alerta = {
        msg: error.response.data.error,
        categoria: "alerta-error",
      };

      dispatch({
        type: LOGIN_ERROR,
        payload: alerta
      });
    }
  };

  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
    }

    try {
      const respuesta = await clientAxios.get("user");
      console.log("USUARIO OBTENIDO", respuesta.data);
      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  const obtenerPosts = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
    }

    try {
      const respuesta = await clientAxios.get("posts");
      console.log("POSTS OBTENIDOS", respuesta.data);

      dispatch({
        type: OBTENER_POSTS,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const obtenerPhotos = async (page) => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
    }

    try {
      const respuesta = await clientAxios.get(`photos?page=${page}`);
      console.log("PHOTOS OBTENIDOS", respuesta.data);

      dispatch({
        type: OBTENER_PHOTOS,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        mensaje: state.mensaje,
        usuario: state.usuario,
        posts: state.posts,
        photos: state.photos,
        registrarUsuario,
        iniciarSesion,
        usuarioAutenticado,
        obtenerPosts,
        obtenerPhotos
      }}
    >
      {props.children}
    </authContext.Provider>
  )
};

export default AuthState;