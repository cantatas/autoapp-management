import axios from 'axios'

// const module = '/api/v1/pageList/'
const module = 'http://13.229.242.5:7001/api/v1/pageList/'

export function addPageApi(params) {
  return axios.post(`${module}addPage`, params, { encode: true });
}
export function getPageListApi(params) {
  return axios.get(`${module}getPageList`, { params }).then((res) => res.data);
}
export function getInfoByIdApi(params) {
  return axios.get(`${module}getInfoById`, { params }).then((res) => res.data);
}
export function deletePageByIdApi(params) {
  return axios.post(`${module}deletePageById`, params, { encode: true });
}