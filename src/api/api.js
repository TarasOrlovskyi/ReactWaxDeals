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
    return axiosWithSetting.put(`emailConfirmation?confirmToken=${confirmToken}`)
      .catch(error => {
        return error.response;
      });
  },
  editProfileRequest(email, discogsUserName) {
    return {
      data: {
        resultCode: "0",
        message: `WTF!!`
      }
    }
    // return axiosWithSetting.put(`profile`, {email, discogsUserName})
    //   .catch(error => {
    //     return error.response;
    //   });
  },
  deleteProfileRequest(userId) {
    debugger
    return {
      data: {
        resultCode: "0",
        message: `WTF!!`
      }
    }
    // return axiosWithSetting.delete(`profile/${userId}`)
    //   .catch(error => {
    //     return error.response;
    //   });
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
    return axiosWithSetting.post(`signUp`, {email, password, confirmPassword, discogsUserName})
      .catch(error => {
        return error.response;
      });
  }
}

export const contactUsApi = {
  contactUsRequest(name, email, contactUsMessage, recaptchaToken){
    return {
      data: {
        resultCode: "0",
        message: `WTF!!`
      }
    }
    // return axiosWithSetting.post('contact', {name, email, contactUsMessage, recaptchaToken})
  }
}