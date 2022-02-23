import { base_url } from '../../configs'
import axios from 'axios'

export const fetchUsers = () => {
  return (dispatch) => {
    axios.get(`${base_url}?page=1&results=28`)
    .then(({data}) => {
      dispatch({
        type: "SET_USERS",
        payload: data.results
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}