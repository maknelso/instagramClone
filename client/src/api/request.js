// import axios from "axios";

// export const postAPI = (url, body={}, headers={}) => {
//   const token = sessionStorage.getItem('token');
//   const baseHeader = {
//     Authorization: 'Bearer ' + token,
//   }
//   axios.post(process.env.REACT_APP_BASEURL + url, {
//     data: body,
//     headers: headers
//   })
// }
// export const getAPI = (url, header={}) => {
//   const token = sessionStorage.getItem('token');
//   const baseHeader = {
//     Authorization: 'Bearer ' + token,
//   }
//   axios.post(process.env.REACT_APP_BASEURL + url, {
//     headers: headers
//   })
// }