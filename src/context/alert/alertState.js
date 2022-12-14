import { useReducer } from 'react';
import alertaReducer from './alertReducer';
import alertaContext from './alertContext';

import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types/types';

const AlertaState = props => {
  const initialState = {
    alerta: null
  }

  const [state, dispatch] = useReducer(alertaReducer, initialState);

  const mostrarAlerta = (msg, categoria) => {
    console.log(msg, categoria);
    dispatch({
      type: MOSTRAR_ALERTA,
      payload: {
        msg,
        categoria
      }
    });

    setTimeout(() => {
      dispatch({
        type: OCULTAR_ALERTA
      })
    }, 5000)
  }

  return (
    <alertaContext.Provider value={{ alerta: state.alerta, mostrarAlerta }}>
      {props.children}
    </alertaContext.Provider>
  )
}

export default AlertaState;