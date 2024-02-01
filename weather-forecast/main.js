function loadWeatherData(){
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
    fetch(url).then(response => response.json())
    .then(data => {
        var list = data.list;
        list.forEach(element => {
            var time = element.dt_txt;
            var temp = element.main.temp;
            var description = element.weather[0].description;
            var icon_url = `https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`;

            var item_html = `<div class="grid-item">
            <div class="container">
                <div class="info">
                    <p>${time}</p>
                    <p>${temp}<sup>o</sup>C</p>
                    <p>${description}</p>
                </div>
                <img src="${icon_url}" alt="">
            </div>
        </div>`;
            document.getElementById("grid").innerHTML += item_html;
        });
    })
}

loadWeatherData();