import axios from "axios";

let jwtToken = localStorage.token ? localStorage.token : '';

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
    return axiosWithSetting.get(`token`);
  },
  userLogOut() {
    return axiosWithSetting.get(`logout`);
  },
  userLogIn(email, password) {
    return axiosWithSetting.post(`login`, {email, password});
  },
  confirmEmailRequest(confirmToken) {
    // return axiosWithSetting.put(`email-confirmation/${confirmToken}`);
    return axiosWithSetting.put(`email-confirmation?confirmToken=${confirmToken}`);
  },
  editProfileRequest(email, discogsUserName) {
    return axiosWithSetting.put(`profile`, {email, discogsUserName},
      {headers: {'Authorization': `${localStorage.token}`}}
    );
  },
  deleteProfileRequest(userId) {
    return axiosWithSetting.delete(`profile/${userId}`,
      {headers: {'Authorization': `${localStorage.token}`}}
      );
  },
  changePasswordRequest(oldPassword, newPassword, newPasswordConfirmation){
    // return axiosWithSetting.put(`/profile/change-password`, {oldPassword, newPassword, confirmNewPassword});
    return axiosWithSetting.put(`/profile/change-password`, {newPassword, newPasswordConfirmation},
      {headers: {'Authorization': `${localStorage.token}`}}
    );
  },
  sendRecoveryPasswordRequest(email){
    return axiosWithSetting.post(`/password-recovery`, {email});
  },
  checkRecoveryTokenRequest(recoveryToken){
    // return axiosWithSetting.get(`/password-recovery/${recoveryToken}`);
    return axiosWithSetting.get(`/password-recovery?token=${recoveryToken}`);
  },
  changeRecoveryPasswordRequest(newPassword, newPasswordConfirmation, token){
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
  contactUsRequest(name, email, contactUsMessage, recaptchaToken){
    return axiosWithSetting.post('contact', {name, email, contactUsMessage, recaptchaToken});
  }
}