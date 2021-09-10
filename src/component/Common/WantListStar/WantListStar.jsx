import wantListStarStyle from "./WantListStar.module.css";

const WantListStar = (props) => {
  return(
      <div className={wantListStarStyle.wantListStar}>
        {/*{props.isVinylInWantlist*/}
        {/*  ? <div className={wantListStarStyle.wantListStar__imageSettings + ' ' + wantListStarStyle.wantListStar__imageFilledStar}*/}
        {/*         onClick={props.switchStarToFalse}*/}
        {/*    />*/}
        {/*  : <div className={wantListStarStyle.wantListStar__imageSettings + ' ' + wantListStarStyle.wantListStar__imageEmptyStar}*/}
        {/*         onClick={props.switchStarToTrue}*/}
        {/*    />*/}
        {/*}*/}
        <div className={wantListStarStyle.wantListStar__imageSettings + ' ' + wantListStarStyle.wantListStar__imageEmptyStar}/>
      </div>
  )
}

export default WantListStar;