import axios from "axios"

//API CALLS
// Nous envoyons une requête get avec le backend axios. Lorsque nous envoyons une requête au chemin /user/18, les informations de l'utilisateur avec un identifiant de 18 du backend sont renvoyées. 
export const getUser = (userId) => {
  return axios.get(`/user/${userId}`)
}

export const getUserActivity = (user_id) => {
  return axios.get(`/user/${user_id}/activity`)

}

export const getUserSessions = (user_id) => {
  return axios.get(`/user/${user_id}/average-sessions`)
}

export const getUserPerformance = (user_id) => {
  return axios.get(`/user/${user_id}/performance`)
}
