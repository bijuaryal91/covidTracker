const countryName = document.querySelector('.inputfields input'),
    btn = document.querySelector('.inputfields button'),
    nc = document.querySelector('.nc span'),
    nr = document.querySelector('.nr span'),
    nd = document.querySelector('.nd span'),
    tc = document.querySelector('.tc span'),
    tr = document.querySelector('.tr span'),
    td = document.querySelector('.td span');

btn.onclick = () => {
    if (countryName.value!="") {
        url = `https://corona.lmao.ninja/v2/countries/${countryName.value}`;
        fetch(url).then(response => response.json()).then(data => {
            nc.innerText = data.todayCases;
            nr.innerText = data.todayRecovered;
            nd.innerText = data.todayDeaths;
            tc.innerText = data.cases;
            tr.innerText = data.recovered;
            td.innerText = data.deaths;
            countryName.value = "";
        });
    }
    else {
        alert("Enter Country Name!");
    }






    // if (countryName.value != "") {
    //     url = "https://api.covid19api.com/summary";
    //     const words = countryName.value.split(" ");

    //     for (let i = 0; i < words.length; i++) {
    //         words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    //     }
    //     fetch(url).then(response => response.json()).then(data => {
    //         for (i = 0; i <= 192; i++) {
    //             if (data.Countries[i].Country == words.join(" ")) {
    //                 nc.innerText = data.Countries[i].NewConfirmed;
    //                 nr.innerText = data.Countries[i].NewRecovered;
    //                 nd.innerText = data.Countries[i].NewDeaths;
    //                 tc.innerText = data.Countries[i].TotalConfirmed;
    //                 tr.innerText = data.Countries[i].TotalRecovered;
    //                 td.innerText = data.Countries[i].TotalDeaths;
    //                 break;
    //             }

    //         }
    //     });
    // }
    // else {
    //     alert("Enter Country Name!");
    // }
}