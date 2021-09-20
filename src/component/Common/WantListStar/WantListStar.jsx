import wantListStarStyle from "./WantListStar.module.css";

const WantListStar = (props) => {
  return (
      <div className={props.vinylType === "firstVinyl"
          ? wantListStarStyle.wantListStar + ' ' + wantListStarStyle.wantListStar_position
          : wantListStarStyle.wantListStar
      }>
        {props.isWantListItem
            ? <div
                className={wantListStarStyle.wantListStar__imageSettings + ' ' + wantListStarStyle.wantListStar__imageFilledStar}
                onClick={props.switchStarToFalse}
            />
            : <div
                className={wantListStarStyle.wantListStar__imageSettings + ' ' + wantListStarStyle.wantListStar__imageEmptyStar}
                onClick={props.switchStarToTrue}
            />
        }
      </div>
  )
}

export default WantListStar;