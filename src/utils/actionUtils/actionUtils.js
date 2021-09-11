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