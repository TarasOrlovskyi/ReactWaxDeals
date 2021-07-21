import shopListNavStyle from "../ShopListNav.module.css";
import vinylOfferListStyle from "../../VinylOfferList.module.css";
import discogsLink from "./DiscogsLink.module.css";
import React from "react";

const DiscogsLink = (props) => {
  if (props.discogsLink == null) {
    return <div/>
  }
  return (
    <a href={props.discogsLink}
       className={shopListNavStyle.shopList__item + ' ' + shopListNavStyle.shopList__firstItemTitle +
       ' ' + discogsLink.discogsLink} target="_blank">
      <img className={vinylOfferListStyle.shopList__title}
           src="data:image/svg+xml,%3Csvg width='80' height='30' viewBox='0 0 80 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M4.78213 0H0V24.7645H5.62295C8.5658 24.7645 10.6153 23.8587 11.7889 22.0652C12.9626 20.2717 13.5406 16.9928 13.5406 12.2645C13.5406 7.6087 12.9626 4.40217 11.7889 2.64493C10.6153 0.887681 8.28553 0 4.78213 0ZM7.93519 20.8333C7.51478 21.6667 6.76155 22.0652 5.6755 22.0652H4.81717V2.71739H5.6755C6.77907 2.71739 7.5323 3.42391 7.9527 4.81884C8.37311 6.21377 8.58331 8.78623 8.58331 12.5181C8.5658 17.2283 8.35559 20 7.93519 20.8333Z' fill='white'/%3E%3Cpath d='M18.9881 0.0181274H14.4688V4.34784H18.9881V0.0181274Z' fill='white'/%3E%3Cpath d='M18.9881 5.79709H14.4688V24.7645H18.9881V5.79709Z' fill='white'/%3E%3Cpath d='M26.5731 14.058C25.1367 12.7536 24.2784 11.8659 23.9981 11.3768C23.7179 10.8877 23.5777 10.3985 23.5777 9.87317C23.5777 9.43839 23.7003 9.1123 23.9456 8.87679C24.1908 8.64128 24.4886 8.53259 24.8565 8.53259C25.2944 8.53259 25.6272 8.71375 25.8725 9.05795C26.1177 9.40215 26.2403 9.87317 26.2403 10.4348H29.8488C29.8488 8.87679 29.4109 7.66302 28.5525 6.81157C27.6942 5.96012 26.4505 5.54346 24.8214 5.54346C23.2975 5.54346 22.0713 5.96012 21.1429 6.77534C20.2145 7.60868 19.7415 8.71375 19.7415 10.1087C19.7415 11.4493 19.9342 12.5724 20.3021 13.4782C20.6699 14.384 21.5458 15.4529 22.9296 16.7029C24.0157 17.663 24.8039 18.4239 25.2769 18.9493C25.7498 19.4746 25.9951 19.9637 25.9951 20.4166C25.9951 20.9058 25.89 21.2681 25.6622 21.5217C25.4345 21.7753 25.1017 21.884 24.6463 21.884C24.1733 21.884 23.823 21.721 23.5777 21.413C23.3325 21.1051 23.2099 20.5978 23.2099 19.9094H19.5488C19.5488 21.5761 19.9868 22.8442 20.8626 23.6775C21.7384 24.5109 23.0347 24.9275 24.7689 24.9275C26.3804 24.9275 27.6417 24.4746 28.5701 23.5869C29.4985 22.6993 29.9539 21.4493 29.9539 19.8369C29.9539 18.8043 29.7087 17.8623 29.2182 17.029C28.7277 16.1956 27.8519 15.2174 26.5731 14.058Z' fill='white'/%3E%3Cpath d='M79.2817 17.0471C78.7912 16.2138 77.9153 15.2174 76.6541 14.0761C75.2177 12.7718 74.3594 11.8841 74.0791 11.3949C73.7989 10.9058 73.6587 10.4167 73.6587 9.89132C73.6587 9.45654 73.7813 9.13046 74.0266 8.89495C74.2718 8.65944 74.5696 8.55075 74.9375 8.55075C75.3754 8.55075 75.7082 8.7319 75.9534 9.07611C76.1987 9.42031 76.3213 9.89133 76.3213 10.4529H79.9298C79.9298 8.89495 79.4919 7.68118 78.6335 6.82973C77.7752 5.97828 76.5315 5.56161 74.9024 5.56161C73.3785 5.56161 72.1523 5.97828 71.2239 6.7935C70.2955 7.62683 69.8225 8.73191 69.8225 10.1268C69.8225 11.4674 70.0152 12.5906 70.383 13.4964C70.7509 14.4022 71.6268 15.471 73.0106 16.721C74.0966 17.6812 74.8849 18.4421 75.3579 18.9674C75.8308 19.4928 76.0761 19.9819 76.0761 20.4348C76.0761 20.9239 75.971 21.2863 75.7257 21.5399C75.498 21.7935 75.1652 21.9022 74.7097 21.9022C74.2368 21.9022 73.8864 21.7392 73.6412 21.4312C73.396 21.1232 73.2733 20.616 73.2733 19.9276H69.6123C69.6123 21.5942 70.0502 22.8623 70.9261 23.6957C71.8019 24.529 73.0982 24.9457 74.8324 24.9457C76.4439 24.9457 77.7051 24.4928 78.6335 23.6051C79.5619 22.7174 80.0174 21.4674 80.0174 19.8551C79.9999 18.8044 79.7546 17.8805 79.2817 17.0471Z' fill='white'/%3E%3Cpath d='M39.4133 20.0543H37.7141C37.6441 20.8695 37.5214 21.3949 37.3287 21.6485C37.1361 21.9021 36.8383 22.0108 36.4354 22.0108C35.7873 22.0108 35.3668 21.6123 35.1917 20.8333C34.999 20.0543 34.9114 18.1884 34.9114 15.2355C34.9114 12.6811 34.999 10.9239 35.1566 9.94563C35.3143 8.96737 35.7347 8.47824 36.3828 8.47824C36.7682 8.47824 37.0485 8.64128 37.2061 8.98548C37.3638 9.32969 37.4514 10.0724 37.4514 11.2319H39.4308C39.8687 10.2898 40.4117 9.42027 41.0949 8.6594C40.8847 7.98911 40.5519 7.4094 40.1315 6.9565C39.2556 6.01447 37.9944 5.54346 36.3653 5.54346C34.3158 5.54346 32.7743 6.35867 31.7584 7.98911C30.7424 9.61954 30.2344 12.029 30.2344 15.2355C30.2344 18.4601 30.7248 20.8877 31.7058 22.5C32.6868 24.1304 34.1231 24.9456 36.0325 24.9456C37.7141 24.9456 38.9753 24.5471 39.8162 23.75C40.2366 23.3514 40.5344 22.8623 40.7446 22.2463C40.2191 21.5761 39.7811 20.8333 39.4133 20.0543Z' fill='white'/%3E%3Cpath d='M58.6647 15.6703C58.6647 17.5181 58.2093 19.2391 57.386 20.7427C57.6663 21.8116 58.0691 22.6268 58.5947 23.2065C59.3129 23.9674 60.3113 24.3478 61.5901 24.3478C62.3433 24.3478 63.0089 24.2391 63.5695 24.0398C64.13 23.8406 64.5154 23.5688 64.7081 23.2427C64.7256 23.4239 64.7431 23.6051 64.7431 23.75C64.7606 23.8949 64.7606 24.0398 64.7606 24.1666C64.7606 25.163 64.5504 25.9058 64.1125 26.413C63.6746 26.9203 63.0089 27.192 62.0981 27.192C61.5025 27.192 60.8368 27.1195 60.1186 26.9746C59.4004 26.8297 58.8049 26.6666 58.3494 26.4493L57.7889 29.0398C58.472 29.3659 59.2253 29.6014 60.0661 29.7645C60.9069 29.9275 61.7302 30 62.536 30C64.4979 30 66.0394 29.4927 67.1955 28.4782C68.3341 27.4637 68.9122 26.0326 68.9122 24.1848V5.79708H64.4103V6.24998C64.0074 5.99636 63.6045 5.8152 63.2016 5.7065C62.7987 5.5978 62.3258 5.54346 61.7827 5.54346C60.6792 5.54346 59.7508 5.88766 58.9975 6.59418C58.2268 7.3007 57.6838 8.27896 57.351 9.51085C57.2984 9.72824 57.2283 9.98186 57.1758 10.2898C58.1217 11.8659 58.6472 13.6956 58.6647 15.6703ZM64.4453 21.25C64.2526 21.413 64.06 21.5217 63.8673 21.5942C63.6746 21.6666 63.4118 21.7029 63.0965 21.7029C62.6761 21.7029 62.3608 21.5761 62.1331 21.3224C61.9054 21.0688 61.7652 20.6522 61.7127 20.0724C61.6601 19.4746 61.6076 18.7137 61.5725 17.808C61.5375 16.9022 61.52 15.942 61.52 14.9275C61.52 14.2753 61.5375 13.5507 61.5725 12.6993C61.6076 11.8659 61.6601 11.0869 61.7302 10.3623C61.8003 9.65578 61.9404 9.18476 62.1856 8.93114C62.4309 8.67751 62.7987 8.5507 63.2892 8.5507C63.4644 8.5507 63.6746 8.58694 63.9023 8.62317C64.13 8.67751 64.3227 8.74998 64.4453 8.82244V21.25Z' fill='white'/%3E%3Cpath d='M77.442 3.9855C77.5121 3.84057 77.5997 3.71376 77.7048 3.60507C77.8099 3.49637 77.95 3.42391 78.0901 3.35144C78.2303 3.2971 78.3879 3.26086 78.5456 3.26086C78.7032 3.26086 78.8609 3.2971 79.001 3.35144C79.1412 3.40579 79.2813 3.49637 79.3864 3.60507C79.4915 3.71376 79.5791 3.84057 79.6492 3.9855C79.7192 4.13043 79.7542 4.31159 79.7542 4.49275C79.7542 4.67391 79.7192 4.85507 79.6492 4.99999C79.5791 5.14492 79.4915 5.27173 79.3864 5.38043C79.2813 5.48912 79.1412 5.56159 79.001 5.61594C78.8609 5.67028 78.7032 5.70652 78.5456 5.70652C78.3879 5.70652 78.2303 5.67028 78.0901 5.61594C77.95 5.56159 77.8099 5.47101 77.7048 5.38043C77.5997 5.28985 77.5121 5.14492 77.442 4.99999C77.3719 4.85507 77.3369 4.67391 77.3369 4.49275C77.3544 4.29347 77.3895 4.13043 77.442 3.9855ZM77.7398 4.87318C77.7924 4.98188 77.8449 5.09057 77.9325 5.18115C78.0201 5.27173 78.1077 5.32608 78.2128 5.38043C78.3179 5.43478 78.4405 5.45289 78.5631 5.45289C78.6857 5.45289 78.8083 5.43478 78.9134 5.38043C79.0185 5.32608 79.1236 5.27173 79.1937 5.18115C79.2813 5.09057 79.3338 4.99999 79.3864 4.87318C79.4389 4.76449 79.4565 4.61956 79.4565 4.49275C79.4565 4.36594 79.4389 4.22101 79.3864 4.11231C79.3338 4.00362 79.2813 3.89492 79.1937 3.80434C79.1061 3.71376 79.0185 3.65941 78.9134 3.60507C78.8083 3.55072 78.6857 3.5326 78.5631 3.5326C78.4405 3.5326 78.3179 3.55072 78.2128 3.60507C78.1077 3.65941 78.0026 3.71376 77.9325 3.80434C77.8449 3.89492 77.7924 3.9855 77.7398 4.11231C77.6873 4.22101 77.6697 4.34782 77.6697 4.49275C77.6697 4.63768 77.6873 4.74637 77.7398 4.87318ZM78.5806 3.80434C78.7383 3.80434 78.8784 3.84057 78.966 3.89492C79.0536 3.94927 79.1061 4.05797 79.1061 4.20289C79.1061 4.25724 79.0886 4.31159 79.0711 4.36594C79.0536 4.40217 79.0361 4.4384 79.001 4.47463C78.966 4.51086 78.931 4.52898 78.8959 4.5471C78.8609 4.56521 78.8083 4.56521 78.7558 4.58333L79.1061 5.18115H78.8259L78.5106 4.60144H78.3529V5.18115H78.0901V3.80434H78.5806ZM78.5806 4.36594C78.6507 4.36594 78.7208 4.34782 78.7733 4.3297C78.8259 4.31159 78.8434 4.25724 78.8434 4.16666C78.8434 4.13043 78.8434 4.0942 78.8259 4.07608C78.8083 4.05797 78.7908 4.03985 78.7558 4.02173C78.7383 4.00362 78.7032 4.00362 78.6682 4.00362C78.6332 4.00362 78.5981 4.00362 78.5806 4.00362H78.3529V4.36594H78.5806Z' fill='white'/%3E%3Cpath d='M48.4873 5.83336C48.5223 5.85148 48.5574 5.85148 48.5749 5.85148C48.5399 5.85148 48.5048 5.83336 48.4873 5.83336Z' fill='white'/%3E%3Cpath d='M45.1058 19.4022L45.1583 19.3478L45.7714 18.6594L45.789 18.6413L46.1218 18.2608C46.1218 18.2608 46.1218 18.2608 46.1393 18.279C45.4736 17.6268 45.0708 16.7029 45.0708 15.6703C45.0708 13.6594 46.6473 12.029 48.5917 12.029C49.2398 12.029 49.8354 12.2101 50.3434 12.5181L51.044 11.2137L51.0791 11.1413L51.7798 9.8007L51.8148 9.72824L52.5155 8.38766L52.5505 8.31519L52.9184 7.60867L53.1811 7.10143C51.8498 6.32244 50.3258 5.86954 48.6968 5.85143H48.5391C43.3191 5.85143 39.0975 10.1993 39.0449 15.5797V15.6703C39.0449 18.4782 40.201 21.0145 42.0403 22.8079L42.5133 22.2826L42.9862 21.7572L43.0388 21.7029L44.0373 20.5797L44.0898 20.5253L45.1058 19.4022Z' fill='white'/%3E%3Cpath d='M55.1954 8.6232L54.2845 9.63769L54.232 9.69204L53.2335 10.8152L53.181 10.8696L52.1825 11.9928L52.13 12.0471L51.7621 12.4638L51.149 13.1341C51.7446 13.7862 52.1124 14.6739 52.1124 15.6341C52.1124 17.6449 50.5359 19.2754 48.609 19.2754C48.0135 19.2754 47.4704 19.1304 46.98 18.8587L46.2793 20.1631L45.2808 21.9928L44.7553 22.9529L44.7203 23.0254L44.0371 24.2754C45.3859 25.0362 46.9449 25.4891 48.5915 25.4891C53.8291 25.4891 58.0857 21.087 58.0857 15.6703C58.0682 12.8986 56.9646 10.4167 55.1954 8.6232Z' fill='white'/%3E%3Cpath d='M48.5924 14.9638C48.2245 14.9638 47.9268 15.2717 47.9268 15.6522C47.9268 16.0326 48.2245 16.3406 48.5924 16.3406C48.9603 16.3406 49.2581 16.0326 49.2581 15.6522C49.2581 15.2717 48.9603 14.9638 48.5924 14.9638Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='80' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"
           alt="Discogs link"/>
    </a>
  );
}
export default DiscogsLink;