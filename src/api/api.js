import axios from "axios";

const axiosWithSetting = axios.create({
  // withCredentials: true,
  // baseURL: 'http://localhost:8080/'
  baseURL: 'https://json-exchange-implementation.herokuapp.com/'
})

export const authApi = {
  checkAuth(){
    return axiosWithSetting.get(`auth`);
  },
  userLogOut(){
    return axiosWithSetting.delete(`auth`);
  },
  userLogIn(email, password){
    return axiosWithSetting.post(`auth`, {email, password});
  }
}

export const vinylApi = {
  getAfterSearchResult(searchQuery) {
    return axiosWithSetting.get(`search?matcher=` + searchQuery);
  },
  getVinylsResponse(){
    return axiosWithSetting.get(`catalog`);
  },
  getOneVinylResponse(vinylId){
    return axiosWithSetting.get(`oneVinyl/${vinylId}`)
  }
}

export const storesApi = {
  getStoresResponse(){
    return axiosWithSetting.get(`stores`);
  }
}