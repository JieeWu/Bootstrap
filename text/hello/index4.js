// // var cros = 'https://cors-anywhere.herokuapp.com/'
// // var originUrl = "https://cloud.culture.tw/frontsite/trans/emapOpenDataAction.do?method=exportEmapJson&typeId=M"
// // var dataUrl = cros + originUrl
// var dataUrl="https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=CWB-8CF5A1E2-9C84-406B-AAB3-2065751B9D28"

// var xhr = new XMLHttpRequest()
// xhr.open('GET',dataUrl, true)
// xhr.send()
// xhr.onload = function(){
//     var dataset = JSON.parse(this.responseText)
//     console.log(dataset)
//     print(dataset)
//     // print(dataset)
// }
function print(dataset) {
    dataset.forEach((data, index) => {
        let newCard = document.createElement("div")
        newCard.className = "infoCard"
        document.querySelector("#contain").appendChild(newCard)
        let newCardInfo = `
        <span class="order">${index + 1}</span>
        <h3 class="name">${data.locationName}</h3>
        <p class="address">${data.lat}  ${data.lon}</p>
        <p class="openTime">${data.stationId}</p>
    `
        newCard.innerHTML = newCardInfo

    })
}

var list_ul = document.getElementById("list_ul");
var dataUrl = document.querySelector("#contain");
var allData = [];
fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-ED14DFC8-4B2D-4A56-866C-51D3C0E05717&format=JSON&locationName=')
    .then((response) => {
        // 這裡會得到一個 ReadableStream 的物件
        console.log(response);
        // 可以透過 blob(), json(), text() 轉成可用的資訊
        return response.json();
    }).then((jsonData) => {
        // console.log(jsonData.records.location);
        // print(jsonData.records.location);
        allData.push(...jsonData.records.location);
        const listarray = allData.map((v) => {
            // return `<li>${v.locationName}</li>`
            return `<a id="${v.locationName}"class="dropdown-item">${v.locationName}</a>`
        })
        list_ul.innerHTML = listarray.join('');
    }).catch((err) => {
        console.log('錯誤:', err);
    });
var pushData = [];
var pushData2 = [];
// 抓取天氣裡面的天氣
// function llll() {
//     fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-ED14DFC8-4B2D-4A56-866C-51D3C0E05717&format=JSON&locationName=')
//         .then((response) => {
//             // 這裡會得到一個 ReadableStream 的物件
//             console.log(response);
//             // 可以透過 blob(), json(), text() 轉成可用的資訊
//             return response.json();
//         }).then((jsonData) => {
//             pushData.push(...jsonData.records.location);
//             for (let i = 0; i < pushData.length; i++) {
//                 pushData2.push(pushData[i].weatherElement[i].time[i].parameter.parameterName);
//             }
//             console.log("ttt", pushData2);
//         })
// }
// llll();
function llll() {
    fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-ED14DFC8-4B2D-4A56-866C-51D3C0E05717&format=JSON&locationName=')
    .then((response) => {
        return response.json();
    })
    .then((jsonData) => {
        pushData = jsonData.records.location;
        for (let i = 0; i < pushData.length; i++) {
            let weatherElement = pushData[i].weatherElement;
            let weatherElementNames = [];
            for (let j = 0; j < weatherElement.length; j++) {
                let time = weatherElement[j].time;
                for (let k = 0; k < time.length; k++) {
                    let parameter = time[k].parameter;
                    weatherElementNames.push(parameter.parameterName);
                }
            }
            pushData2.push(weatherElementNames);
        }
        console.log("pushData2:", pushData2);
    });
}
function llll2() {
    fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-ED14DFC8-4B2D-4A56-866C-51D3C0E05717&format=JSON&locationName=')
    .then((response) => {
        return response.json();
    })
    .then((jsonData) => {
        pushData = jsonData.records.location;
        for (let i = 0; i < pushData.length; i++) {
            let weatherElement = pushData[i].weatherElement;
            let weatherElementNames = [];
            pushData2.push(weatherElement);
        }
        console.log("pushData2:", pushData2);
    });
}
llll2();
console.log()

// let newCard = document.createElement("div")
// newCard.className = "infoCard"

// list1.addEventListener('click', function () {
//     for (let i = 0; i < allData.length; i++) {
//         if (list1.id === allData[i].locationName) {
//             document.querySelector("#contain").appendChild(newCard)
//             let newCardInfo = `
//             <h3 class="name">${allData[i].locationName}</h3>
//         `
//             newCard.innerHTML = newCardInfo
//         }
//     }
// })