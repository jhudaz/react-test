import axios from 'axios';

const urlApi = `https://mathy-dot-tributi-project-baby.appspot.com/tax-objects/?code__startswith=1.1.4`;

export function getData(){
  return dispatch => {
    return axios
    .get(`${urlApi}`)
    .then(res => {
      dispatch({
        type: 'APP_DATA',
        payload: res.data
      })
    })
    .catch(err => {
      throw err
    })
  }
}