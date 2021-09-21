import jwt_decode from "jwt-decode";

export const logOut = (dispatch, setAuthData) => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  dispatch(setAuthData(null, null, null, null, false, false));
}

export const setVinylAsWantListItem = (vinylsFromState, vinylId, isWantListItem) => {
  return vinylsFromState.map(vinyl => {
    if (vinyl.id === vinylId) {
      return {...vinyl, isWantListItem: isWantListItem}
    }
    return vinyl;
  })
}

export const setFirstVinylAsWantListItem = (firstVinyl, vinylId, isWantListItem) => {
  if (firstVinyl.id === vinylId) {
    return {...firstVinyl, isWantListItem: isWantListItem}
  }
  return firstVinyl;
}


export const expireCheckingRefreshToken = (refreshToken) => {
  let decodedRefreshToken = jwt_decode(refreshToken);
  let nowTime = Date.now()/1000;
  return nowTime > decodedRefreshToken.exp;
}