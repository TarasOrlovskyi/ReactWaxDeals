import axios from "axios";

const defaultOptions = {
  // withCredentials: true,
  // baseURL: 'http://localhost:8080/',
  baseURL: 'https://json-exchange-implementation.herokuapp.com/',
};

let axiosWithSetting = axios.create(defaultOptions);

axiosWithSetting.interceptors.request.use(function (config) {
  const token = localStorage.token;
  config.headers.Authorization = token ? `${token}` : '';
  return config;
});

axiosWithSetting.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalConfig = error.config;
      if (error.response) {
        if (error.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
          try {
            const prevRefreshToken = localStorage.refreshToken;
            const response = await authApi.refreshToken(prevRefreshToken);
            const {jwtToken, refreshToken} = response.data;
            localStorage.setItem("token", jwtToken);
            localStorage.setItem("refreshToken", refreshToken);
            axiosWithSetting.defaults.headers.Authorization = jwtToken;
            return axiosWithSetting(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }
      return Promise.reject(error);
    }
);

export const authApi = {
  checkAuth() {
    return axiosWithSetting.get(`token`);
  },
  userLogOut() {
    return axiosWithSetting.get(`logout`);
  },
  userLogIn(email, password) {
    return axiosWithSetting.post(`login`, {email, password});
  },
  refreshToken(refreshToken) {
    return axiosWithSetting.post(`token/refresh-token`, {refreshToken});
  },
  confirmEmailRequest(confirmToken) {
    return axiosWithSetting.put(`email-confirmation`, {confirmToken});
  },
  editProfileRequest(email, discogsUserName) {
    return axiosWithSetting.put(`profile`, {email, discogsUserName});
  },
  deleteProfileRequest(userId) {
    return axiosWithSetting.delete(`profile/${userId}`);
  },
  changePasswordRequest(password, newPassword, newPasswordConfirmation) {
    return axiosWithSetting.put(`/profile/change-password`, {password, newPassword, newPasswordConfirmation});
  },
  sendRecoveryPasswordRequest(email) {
    return axiosWithSetting.post(`/password-recovery`, {email});
  },
  checkRecoveryTokenRequest(recoveryToken) {
    return axiosWithSetting.get(`/password-recovery/${recoveryToken}`);
  },
  changeRecoveryPasswordRequest(newPassword, newPasswordConfirmation, token) {
    return axiosWithSetting.put(`/password-recovery`, {newPassword, newPasswordConfirmation, token});
  }
}

export const vinylApi = {
  getAfterSearchResponse(searchQuery) {
    return axiosWithSetting.get(`search?matcher=` + searchQuery);
  },
  getVinylsResponse() {
    return axiosWithSetting.get(`catalog`);
  },
  getOneVinylResponse(vinylId) {
    return axiosWithSetting.get(`oneVinyl/${vinylId}`)
  },
  getWantListResponse(){
    return axiosWithSetting.get(`wantlist`);
  },
  switchVinylInWantList(id){
    return axiosWithSetting.post(`wantlist`, {id});
  },
  getDiscogsWantlistRequest(){
    return axiosWithSetting.post(`wantlist/import`);
  }
}

export const storesApi = {
  getStoresResponse() {
    return axiosWithSetting.get(`stores`);
  }
}

export const registrationApi = {
  registerUserRequest(email, password, confirmPassword, discogsUserName) {
    return axiosWithSetting.post(`sign-up`, {email, password, confirmPassword, discogsUserName});
  }
}

export const contactUsApi = {
  contactUsRequest(name, email, contactUsMessage, recaptchaToken) {
    return axiosWithSetting.post('contact', {name, email, contactUsMessage, recaptchaToken});
  }
}