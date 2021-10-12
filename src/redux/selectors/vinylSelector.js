import {createSelector} from "reselect";

export const getAllVinyls = (state) => {
  return state.catalogPage.vinyls
}

export const getInStockVinyls = createSelector(getAllVinyls, (vinyls) => {
  return vinyls.filter(vinyl => vinyl.hasOffers !== false)
})