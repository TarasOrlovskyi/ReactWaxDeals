import wantListStarStyle from "./WantListStar.module.css";
import React from "react";

const WantListStar = React.memo(({isWantListItem, switchStarToTrue, switchStarToFalse, vinylType}) => {

  return (
      <div className={vinylType === "firstVinyl"
          ? wantListStarStyle.wantListStar + ' ' + wantListStarStyle.wantListStar_position
          : wantListStarStyle.wantListStar
      }>
        {isWantListItem
            ? <div
                className={wantListStarStyle.wantListStar__imageSettings + ' ' + wantListStarStyle.wantListStar__imageFilledStar}
                onClick={switchStarToFalse}
            />
            : <div
                className={wantListStarStyle.wantListStar__imageSettings + ' ' + wantListStarStyle.wantListStar__imageEmptyStar}
                onClick={switchStarToTrue}
            />
        }
      </div>
  )
})

export default WantListStar;