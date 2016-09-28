function loadCoords(position) {
    console.log(position);
    var coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        acc: position.coords.accuracy
    };
    var mapD = document.querySelector('#mapD');
        map = new google.maps.Map(mapD, {
            zoom: 18,
            center: coords
        });
    new google.maps.Marker({
            position: coords,
            map: map,
            animation: google.maps.Animation.BOUNCE
        });
    var latP = document.querySelector('#latP'),
        lngP = document.querySelector('#lngP'),
        acc = document.querySelector('#accP');
    latP.textContent = `latitud: ${coords.lat}`;
    lngP.textContent = `longitud: ${coords.lng}`;
    accP.textContent = `precision: ${coords.acc}`;
};

function failCoords() {
    console.log('no internet');
};

function getCoords() {
    navigator.geolocation.getCurrentPosition(loadCoords, failCoords)
};
