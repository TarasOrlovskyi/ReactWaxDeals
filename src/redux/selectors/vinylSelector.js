import {createSelector} from "reselect";

export const getVinyls = (state) => {
  return state.catalogPage.vinyls
}

export const getAndFilterVinyls = createSelector(getVinyls, (vinyls) => {
  return vinyls.filter(vinyl => vinyl.hasOffers !== false)
})