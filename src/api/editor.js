import axios from 'axios'

const module = 'api/v1/editor/'

export function saveDataApi(params) {
  return axios.post(`${module}addEditor`, params, { encode: true });
}
export function updateDataApi(params) {
  return axios.post(`${module}updateEditor`, params, { encode: true });
}

export function getInfoByIdApi(params) {
  return axios.get(`${module}getInfoById`, {params});
}