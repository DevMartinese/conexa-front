import { REGISTRO_EXITOSO, LOGIN_EXITOSO, OBTENER_USUARIO, LOGIN_ERROR, REGISTRO_ERROR, CERRAR_SESION, OBTENER_POSTS, OBTENER_PHOTOS } from '../../types/types';

const authReducer = (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO:
    case LOGIN_EXITOSO:
      localStorage.setItem('token', action.payload.token);
      console.log("ACTION.PAYLOAD.TOKEN", action.payload.token);
      return {
        ...state,
        autenticado: true
      }
    case OBTENER_USUARIO:
      console.log("ACTION.PAYLOAD.USER", action.payload.user);
      return {
        ...state,
        autenticado: true,
        usuario: action.payload.user,
      }
    case OBTENER_POSTS:
      console.log("ACTION.PAYLOAD.POSTS", action.payload.posts);
      return {
        ...state,
        autenticado: true,
        posts: action.payload.posts,
      }
    case OBTENER_PHOTOS:
      console.log("ACTION.PAYLOAD.PHOTOS", action.payload.photos);
      return {
        ...state,
        autenticado: true,
        photos: action.payload.photos,
      }
    case REGISTRO_ERROR:
    case LOGIN_ERROR:
      console.log("ACTION.PAYLOAD.ERROR", action.payload);
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        autenticado: null,
        mensaje: action.payload
      }
    default:
      return state;
  }
}

export default authReducer;