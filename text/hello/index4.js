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

var list1 = document.getElementById("屏東縣");
var dataUrl = document.querySelector("#contain");
var allData = [];
fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-ED14DFC8-4B2D-4A56-866C-51D3C0E05717&format=JSON&locationName=', {})
    .then((response) => {
        // 這裡會得到一個 ReadableStream 的物件
        console.log(response);
        // 可以透過 blob(), json(), text() 轉成可用的資訊
        return response.json();
    }).then((jsonData) => {
        console.log(jsonData.records.location);
        // print(jsonData.records.location);
        allData.push(...jsonData.records.location);
    }).catch((err) => {
        console.log('錯誤:', err);
    });

console.log("allData", allData);
let newCard = document.createElement("div")
newCard.className = "infoCard"

list1.addEventListener('click', function () {
    for (let i = 0; i < allData.length; i++) {
        if (list1.id === allData[i].locationName) {
            document.querySelector("#contain").appendChild(newCard)
            let newCardInfo = `
            <h3 class="name">${allData[i].locationName}</h3>
        `
            newCard.innerHTML = newCardInfo
        }
    }
})
console.log(list1.id);