document.addEventListener('DOMContentLoaded', () => {
    const weatherData = [ {
            "idema" : "2614",
            "lon" : -5.735278,
            "fint" : "2024-09-14T02:00:00+0000",
            "prec" : 0.0,
            "alt" : 656.06,
            "vmax" : 4.7,
            "vv" : 2.1,
            "dv" : 43.0,
            "lat" : 41.515556,
            "dmax" : 28.0,
            "ubi" : "ZAMORA",
            "pres" : 947.9,
            "hr" : 72.0,
            "stdvv" : 0.7,
            "ts" : 9.5,
            "pres_nmar" : 1025.6,
            "tamin" : 9.0,
            "ta" : 9.0,
            "tamax" : 9.7,
            "tpr" : 4.3,
            "vis" : 9.0,
            "stddv" : 20.0,
            "inso" : 0.0,
            "tss5cm" : 19.9,
            "pacutp" : 0.0,
            "tss20cm" : 24.6
          }, {
            "idema" : "2614",
            "lon" : -5.735278,
            "fint" : "2024-09-14T03:00:00+0000",
            "prec" : 0.0,
            "alt" : 656.06,
            "vmax" : 5.4,
            "vv" : 3.0,
            "dv" : 20.0,
            "lat" : 41.515556,
            "dmax" : 10.0,
            "ubi" : "ZAMORA",
            "pres" : 947.8,
            "hr" : 73.0,
            "stdvv" : 0.8,
            "ts" : 8.9,
            "pres_nmar" : 1025.7,
            "tamin" : 8.4,
            "ta" : 8.4,
            "tamax" : 9.0,
            "tpr" : 3.8,
            "vis" : 9.0,
            "stddv" : 17.0,
            "inso" : 0.0,
            "tss5cm" : 19.2,
            "pacutp" : 0.0,
            "tss20cm" : 24.2
          }, {
            "idema" : "2614",
            "lon" : -5.735278,
            "fint" : "2024-09-14T04:00:00+0000",
            "prec" : 0.0,
            "alt" : 656.06,
            "vmax" : 5.2,
            "vv" : 3.2,
            "dv" : 18.0,
            "lat" : 41.515556,
            "dmax" : 20.0,
            "ubi" : "ZAMORA",
            "pres" : 947.7,
            "hr" : 76.0,
            "stdvv" : 0.8,
            "ts" : 8.3,
            "pres_nmar" : 1025.8,
            "tamin" : 7.8,
            "ta" : 7.8,
            "tamax" : 8.4,
            "tpr" : 3.8,
            "vis" : 9.1,
            "stddv" : 18.0,
            "inso" : 0.0,
            "tss5cm" : 18.5,
            "pacutp" : 0.0,
            "tss20cm" : 23.8
          }, {
            "idema" : "2614",
            "lon" : -5.735278,
            "fint" : "2024-09-14T05:00:00+0000",
            "prec" : 0.0,
            "alt" : 656.06,
            "vmax" : 5.7,
            "vv" : 3.1,
            "dv" : 22.0,
            "lat" : 41.515556,
            "dmax" : 8.0,
            "ubi" : "ZAMORA",
            "pres" : 948.0,
            "hr" : 76.0,
            "stdvv" : 0.8,
            "ts" : 7.9,
            "pres_nmar" : 1026.2,
            "tamin" : 7.5,
            "ta" : 7.5,
            "tamax" : 7.8,
            "tpr" : 3.6,
            "vis" : 9.2,
            "stddv" : 19.0,
            "inso" : 0.0,
            "tss5cm" : 17.9,
            "pacutp" : 0.0,
            "tss20cm" : 23.4
          }, {
            "idema" : "2614",
            "lon" : -5.735278,
            "fint" : "2024-09-14T06:00:00+0000",
            "prec" : 0.0,
            "alt" : 656.06,
            "vmax" : 5.6,
            "vv" : 2.7,
            "dv" : 16.0,
            "lat" : 41.515556,
            "dmax" : 15.0,
            "ubi" : "ZAMORA",
            "pres" : 948.2,
            "hr" : 78.0,
            "stdvv" : 0.7,
            "ts" : 7.5,
            "pres_nmar" : 1026.5,
            "tamin" : 7.1,
            "ta" : 7.1,
            "tamax" : 7.5,
            "tpr" : 3.6,
            "vis" : 8.9,
            "stddv" : 19.0,
            "inso" : 0.0,
            "tss5cm" : 17.4,
            "pacutp" : 0.0,
            "tss20cm" : 23.0
          }, {
            "idema" : "2614",
            "lon" : -5.735278,
            "fint" : "2024-09-14T07:00:00+0000",
            "prec" : 0.0,
            "alt" : 656.06,
            "vmax" : 6.3,
            "vv" : 3.4,
            "dv" : 22.0,
            "lat" : 41.515556,
            "dmax" : 23.0,
            "ubi" : "ZAMORA",
            "pres" : 948.4,
            "hr" : 78.0,
            "stdvv" : 0.9,
            "ts" : 8.4,
            "pres_nmar" : 1026.6,
            "tamin" : 7.1,
            "ta" : 7.7,
            "tamax" : 7.7,
            "tpr" : 4.1,
            "vis" : 8.9,
            "stddv" : 19.0,
            "inso" : 34.5,
            "tss5cm" : 17.0,
            "pacutp" : 0.0,
            "tss20cm" : 22.6
          }, {
            "idema" : "2614",
            "lon" : -5.735278,
            "fint" : "2024-09-14T08:00:00+0000",
            "prec" : 0.0,
            "alt" : 656.06,
            "vmax" : 7.1,
            "vv" : 3.1,
            "dv" : 26.0,
            "lat" : 41.515556,
            "dmax" : 25.0,
            "ubi" : "ZAMORA",
            "pres" : 948.7,
            "hr" : 72.0,
            "stdvv" : 0.9,
            "ts" : 10.3,
            "pres_nmar" : 1026.4,
            "tamin" : 7.7,
            "ta" : 9.5,
            "tamax" : 9.5,
            "tpr" : 4.6,
            "vis" : 9.2,
            "stddv" : 25.0,
            "inso" : 60.0,
            "tss5cm" : 16.8,
            "pacutp" : 0.0,
            "tss20cm" : 22.2
          }, {
            "idema" : "2614",
            "lon" : -5.735278,
            "fint" : "2024-09-14T09:00:00+0000",
            "prec" : 0.0,
            "alt" : 656.06,
            "vmax" : 6.5,
            "vv" : 2.7,
            "dv" : 45.0,
            "lat" : 41.515556,
            "dmax" : 360.0,
            "ubi" : "ZAMORA",
            "pres" : 948.7,
            "hr" : 60.0,
            "stdvv" : 0.9,
            "ts" : 16.9,
            "pres_nmar" : 1025.6,
            "tamin" : 9.5,
            "ta" : 12.3,
            "tamax" : 12.3,
            "tpr" : 4.8,
            "vis" : 9.4,
            "stddv" : 27.0,
            "inso" : 60.0,
            "tss5cm" : 17.3,
            "pacutp" : 0.0,
            "tss20cm" : 22.0
          }, {
            "idema" : "2614",
            "lon" : -5.735278,
            "fint" : "2024-09-14T10:00:00+0000",
            "prec" : 0.0,
            "alt" : 656.06,
            "vmax" : 6.4,
            "vv" : 3.2,
            "dv" : 63.0,
            "lat" : 41.515556,
            "dmax" : 65.0,
            "ubi" : "ZAMORA",
            "pres" : 948.5,
            "hr" : 54.0,
            "stdvv" : 0.9,
            "ts" : 20.5,
            "pres_nmar" : 1024.6,
            "tamin" : 12.3,
            "ta" : 14.9,
            "tamax" : 14.9,
            "tpr" : 5.6,
            "vis" : 9.6,
            "stddv" : 19.0,
            "inso" : 60.0,
            "tss5cm" : 19.0,
            "pacutp" : 0.0,
            "tss20cm" : 21.9
          }, {
            "idema" : "2614",
            "lon" : -5.735278,
            "fint" : "2024-09-14T11:00:00+0000",
            "prec" : 0.0,
            "alt" : 656.06,
            "vmax" : 5.9,
            "vv" : 3.0,
            "dv" : 50.0,
            "lat" : 41.515556,
            "dmax" : 25.0,
            "ubi" : "ZAMORA",
            "pres" : 948.1,
            "hr" : 43.0,
            "stdvv" : 0.9,
            "ts" : 24.1,
            "pres_nmar" : 1023.3,
            "tamin" : 14.9,
            "ta" : 18.0,
            "tamax" : 18.0,
            "tpr" : 5.3,
            "vis" : 10.3,
            "stddv" : 30.0,
            "inso" : 60.0,
            "tss5cm" : 21.0,
            "pacutp" : 0.0,
            "tss20cm" : 22.1
          }, {
            "idema" : "2614",
            "lon" : -5.735278,
            "fint" : "2024-09-14T12:00:00+0000",
            "prec" : 0.0,
            "alt" : 656.06,
            "vmax" : 6.0,
            "vv" : 2.5,
            "dv" : 35.0,
            "lat" : 41.515556,
            "dmax" : 48.0,
            "ubi" : "ZAMORA",
            "pres" : 947.4,
            "hr" : 33.0,
            "stdvv" : 0.8,
            "ts" : 27.3,
            "pres_nmar" : 1021.9,
            "tamin" : 18.0,
            "ta" : 20.5,
            "tamax" : 20.5,
            "tpr" : 3.6,
            "vis" : 10.5,
            "stddv" : 28.0,
            "inso" : 60.0,
            "tss5cm" : 24.3,
            "pacutp" : 0.0,
            "tss20cm" : 22.6
          }, {
            "idema" : "2614",
            "lon" : -5.735278,
            "fint" : "2024-09-14T13:00:00+0000",
            "prec" : 0.0,
            "alt" : 656.06,
            "vmax" : 6.2,
            "vv" : 3.1,
            "dv" : 59.0,
            "lat" : 41.515556,
            "dmax" : 58.0,
            "ubi" : "ZAMORA",
            "pres" : 946.8,
            "hr" : 27.0,
            "stdvv" : 1.1,
            "ts" : 30.3,
            "pres_nmar" : 1020.9,
            "tamin" : 20.5,
            "ta" : 22.1,
            "tamax" : 22.2,
            "tpr" : 2.3,
            "vis" : 10.5,
            "stddv" : 18.0,
            "inso" : 60.0,
            "tss5cm" : 27.6,
            "pacutp" : 0.0,
            "tss20cm" : 23.4
          }, {
            "idema" : "2614",
            "lon" : -5.735278,
            "fint" : "2024-09-14T14:00:00+0000",
            "prec" : 0.0,
            "alt" : 656.06,
            "vmax" : 5.2,
            "vv" : 1.8,
            "dv" : 65.0,
            "lat" : 41.515556,
            "dmax" : 355.0,
            "ubi" : "ZAMORA",
            "pres" : 946.1,
            "hr" : 24.0,
            "stdvv" : 1.0,
            "ts" : 32.2,
            "pres_nmar" : 1019.6,
            "tamin" : 22.1,
            "ta" : 24.2,
            "tamax" : 24.2,
            "tpr" : 2.3,
            "vis" : 10.9,
            "stddv" : 26.0,
            "inso" : 60.0,
            "tss5cm" : 30.5,
            "pacutp" : 0.0,
            "tss20cm" : 24.4
          } 
        ];
  
    const weatherDiv = document.getElementById('weatherData');
    
    weatherData.forEach(observation => {
      const weatherInfo = document.createElement('p');
      weatherInfo.innerText = `Date: ${observation.fint} | Station: ${observation.ubi} | Temperature: ${observation.ta}°C | Wind Speed: ${observation.vv} m/s | Visibility: ${observation.vis} km`;
      weatherDiv.appendChild(weatherInfo);
    });
  });
  