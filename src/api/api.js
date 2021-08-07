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
    return {
      data: {
        user: {
          id: 123,
          email: '',
          discogsUserName: '',
          role: '',
          status: false
        },
        token: '',
        resultCode: "0",
        message: ''
      }
    }

    // return axiosWithSetting.delete(`auth`);
  },
  userLogIn(email, password) {
    return axiosWithSetting.post(`login`, {email, password})
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
    return {
      data: {
        resultCode: "0",
        message: `WTF!!`
      }
    }
    // return axiosWithSetting.post(`sign-up`, {email, password, confirmPassword, discogsUserName});
  }
}