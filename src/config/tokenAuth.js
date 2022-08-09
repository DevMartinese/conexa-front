import clientAxios from './clientAxios';

const tokenAuth = token => {
  if (token) {
    clientAxios.defaults.headers.common['auth-token'] = token;
  } else {
    delete clientAxios.defaults.headers.common['auth-token'];
  }
}

export default tokenAuth;