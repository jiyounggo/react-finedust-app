// /*global kakao*/
// export const kakaoAddress = () => {
//   var geocoder = new kakao.maps.services.Geocoder();

//   var callback = (result, status) => {
//     if (status === kakao.maps.services.Status.OK) {
//       console.log(result[0].region_1depth_name);
//     }
//     return result[0];
//   };

//   const get = () => {
//     return new Promise(() => {
//       geocoder.coord2RegionCode(
//         location.longitude,
//         location.latitude,
//         callback
//       );
//     });
//   };

// const data = await get()
// return data
// };
