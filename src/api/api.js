import axios from "axios";

const jwtToken = localStorage.token ? localStorage.token : '';

const axiosWithSetting = axios.create({
  // withCredentials: true,
  // baseURL: 'http://localhost:8080/',
  baseURL: 'https://json-exchange-implementation.herokuapp.com/',
  headers: {
    'Authorization': `${jwtToken}`
  }
})

export const authApi = {
  checkAuth() {
    return axiosWithSetting.get(`token`)
      .catch(error => {
        return error.response;
      });
  },
  userLogOut() {
    return axiosWithSetting.get(`successlogout`);
  },
  userLogIn(email, password) {
    return axiosWithSetting.post(`login`, {email, password})
      .catch(error => {
        debugger
        return error.response;
      });
  },
  confirmEmailRequest(confirmToken) {
    // return{
    //   data:{
    //     resultCode: "1",
    //     message: "user email confirmed"
    //     // user:{
    //     //   id: 123,
    //     //   email: "email@mail",
    //     //   discogsUserName: "discogsUserName",
    //     //   role: "User",
    //     //   status: true
    //     // },
    //     // resultCode: "0",
    //     // token: "some-token",
    //     // message: "hello!"
    //   }
    // }
    return axiosWithSetting.put(`emailConfirmation?confirmToken=${confirmToken}`)
      .catch(error => {
        return error.response;
      });
  }
}

export const vinylApi = {
  getAfterSearchResult(searchQuery) {
    return axiosWithSetting.get(`search?matcher=` + searchQuery);
  },
  getVinylsResponse() {
    return axiosWithSetting.get(`catalog`);
  },
  getOneVinylResponse(vinylId) {
    return axiosWithSetting.get(`oneVinyl/${vinylId}`)
  }
}

export const storesApi = {
  getStoresResponse() {
    return axiosWithSetting.get(`stores`);
  }
}

export const registrationApi = {
  registerUserRequest(email, password, confirmPassword, discogsUserName) {
    // return {
    //   data: {
    //     resultCode: "0",
    //     message: `WTF!!`
    //   }
    // }
    return axiosWithSetting.post(`signUp`, {email, password, confirmPassword, discogsUserName})
      .catch(error => {
        return error.response;
      });
  }
}

export const contactUsApi = {
  contactUsRequest(name, email, contactUsMessage){
    return {
      data: {
        resultCode: "0",
        message: `WTF!!`
      }
    }
    // return axiosWithSetting.post('contact', {name, email, contactUsMessage})
  }
}