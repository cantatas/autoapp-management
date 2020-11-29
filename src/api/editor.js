import axios from 'axios'

const module = 'api/v1/editor/'

export function saveDataApi(params) {
  return axios.post(`${module}addEditor`, params, { encode: true });
}