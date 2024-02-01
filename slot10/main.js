var obj = {
    "city": "Hà Nội, Việt Nam",
    "weather": {
        "temp": 22,
        "humidity": 60,
        "pressure": 1002,
    }
}
var span_list = document.querySelectorAll("h2>span");

//base URL and API path
var base = "https://api.openweathermap.org/";
var path = "/data/2.5/weather";

//construct the URL
var url = new URL(`${base}${path}`);
document.querySelector("button#btn").addEventListener("click", () => {
    var input = document.getElementById("city");
    var query_city = input.value;

    var query = {
        q: query_city,
        appId: "09a71427c59d38d6a34f89b47d75975c",
        units: "metric",
    }

    for (const key in query){
        if (query.hasOwnProperty(key)){
            url.searchParams.append(key, query[key]);
        }
    }

    fetch(url).then(response => data = response.json().then(data => {
        span_list[0].innerText = data.main.temp;
        span_list[1].innerText = data.main.humidity;
        span_list[2].innerText = data.main.pressure;
    }));
})