import axios from 'axios'

const module = 'api/v1/pageList/'

export function addPageApi(params) {
  return axios.post(`${module}addPage`, params, { encode: true });
}

export function getPageInfoApi(params) {
  return axios.get(`${module}getInfo`, { params }).then((res) => res.data);
}
export function deletePageById(params) {
  return axios.post(`${module}deletePageById`, params, { encode: true });
}