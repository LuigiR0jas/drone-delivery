function loadCoords(position) {
    var coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        acc: position.coords.accuracy
    };
    var mapD = document.querySelector('#mapD'),
        map = new google.maps.Map(mapD, {
            zoom: 18,
            center: coords
        }),
        marker = new google.maps.Marker({
            position: coords,
            map: map
        }),
        circle = new google.maps.Circle({
            strokeColor: '#10568f',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#3a83da',
            fillOpacity: 0.35,
            center: coords,
            radius: coords.acc,
            map: map
        }),
        latLl = document.querySelector('#latLl'),
        lngLl = document.querySelector('#lngLl'),
        accLl = document.querySelector('#accLl'),
        latP = document.querySelector('#latP'),
        lngP = document.querySelector('#lngP'),
        coord2Click = document.querySelector('#coord2Click'),
        coord2Distance = document.querySelector('#coord2Distance'),
        secondMarker = null,
        linePath = null;
    latLl.textContent = `·Your latitude: ${coords.lat.toFixed(6)}`;
    lngLl.textContent = `·Your longitude: ${coords.lng.toFixed(6)}`;
    accLl.textContent = `·Accuracy: ${coords.acc.toFixed(2)}` + `m`;

    google.maps.event.addListener(map, 'click', function(event) {
        var coords2 = {
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            },
            lineCoords = [{
                lat: coords.lat,
                lng: coords.lng
            }, {
                lat: coords2.lat,
                lng: coords2.lng
            }],
            distance = haversine(coords, coords2);
        coord2Click.textContent = `·Chosen Coordenates: ${coords2.lat.toFixed(6)}, ${coords2.lng.toFixed(6)} `;
        coord2Distance.textContent = `·Distance: ${distance.toFixed(2)}m`;
        if (secondMarker !== null) {
            secondMarker.setMap(null);
            linePath.setMap(null);
            secondMarker = new google.maps.Marker({
                position: coords2,
                map: map,
                animation: google.maps.Animation.DROP
            });
            linePath = new google.maps.Polyline({
                path: lineCoords,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 3,
                map: map
            });
        } else {
            secondMarker = new google.maps.Marker({
                position: coords2,
                map: map,
                animation: google.maps.Animation.DROP
            });
            linePath = new google.maps.Polyline({
                path: lineCoords,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 3,
                map: map
            });
        }
    })

    google.maps.event.addListener(map, 'mousemove', function(event) {
        latP.textContent = `·Drone starting latitude: ` + event.latLng.lat().toFixed(6);
        lngP.textContent = `·Drone starting longitude: ` + event.latLng.lng().toFixed(6);

        document.getElementById("clear").onclick = function() {
            coord2Click.textContent = `·Chosen Coordenates: 0, 0`;
            coord2Distance.textcontent = `·Distance: 0m`
            latLl.textContent = `·Your latitude: 0`;
            lngLl.textContent = `·Your longitude: 0`;
            accLl.textContent = `·Accuracy: 0` + `m`;
            circle.setMap(null);
            marker.setMap(null);
            secondMarker.setMap(null);
            linePath.setMap(null);
        };
        document.getElementById("recharge").onclick = function() {
            latLl.textContent = `·Your latitude: ${coords.lat.toFixed(6)}`;
            lngLl.textContent = `·Your longitude: ${coords.lng.toFixed(6)}`;
            accLl.textContent = `·Accuracy: ${coords.acc.toFixed(2)}` + `m`;
            marker = new google.maps.Marker({
                    position: coords,
                    map: map
                }),
                circle = new google.maps.Circle({
                    strokeColor: '#10568f',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#3a83da',
                    fillOpacity: 0.35,
                    center: coords,
                    radius: coords.acc,
                    map: map
                });
        }
    });

};

function haversine(p1, p2) {
    var rad = function(x) {
        return x * Math.PI / 180;
    };
    var R = 6378137;
    var dLat = rad(p2.lat - p1.lat);
    var dLong = rad(p2.lng - p1.lng);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
};

function failCoords() {
    console.log('no internet');
};

function getCoords() {
    navigator.geolocation.getCurrentPosition(loadCoords, failCoords)
};
