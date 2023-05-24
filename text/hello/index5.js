const endpoint = 'https://data.kcg.gov.tw/dataset/a98754a3-3446-4c9a-abfc-58dc49f2158c/resource/48d4dfc4-a4b2-44a5-bdec-70f9558cd25d/download/yopendata1070622opendatajson-1070622.json';
  $.ajax({
    type: "GET",
    url: endpoint,
    dataType: "json",
    success: function (response) {
      const charge = [];
      charge.push(...response);
      createDomElement(charge);
    },
    error: function (thrownError) {
      console.log(thrownError);
    }
  });

  function createDomElement(charge) {
    const domElements = charge.map( place => {
      return `
    <li>
      <p class="location">位置： ${ place.Location }</p>
      <p class="address">地址：${ place.Address }</p>
    </li>
  `;
    }).join("");

    const chargeList = document.querySelector('.charge-list');
    chargeList.innerHTML = domElements;
  }




// $.ajax({
//     url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-373C6328-6BF2-41B3-BB3B-147802B82875&format=JSON&locationName=&elementName=&sort=time',
//     method: "GET",
//     datatype: "json",
//     success: function (res) {
//         data = res.records.locations[0];
//         // console.log(data);
//         city = data.location;
//         // console.log(city);
//         todayWeather(data, cityNum);
//         selectCity(city);
//         weekWeather(data, cityNum);
//     }
// })