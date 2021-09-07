export const logOut = (dispatch, setAuthData) => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  dispatch(setAuthData(null, null, null, null, false, false));
}