// 1º Para comprobar que el navegador permite la geolocalización

if ("geolocation" in navigator) {

} else {
    alert('La geolocalizacion no existe en su ordenador');
}

if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(function(position){
        
        var element = document.createElement("img");
        element.setAttribute('src', "http://maps.googleapis.com/maps/api/staticmap?markers=icon:%7C" + position.coords.latitude + "," + position.coords.longitude + "&zoom=13&size=400x400&sensor=false")
        var div = document.getElementById("#posicion"); //es el div del html
        document.body.insertBefore(element, div)
    }, function (err) {
        console.log(err);
    }, { // en este parte, es para configurar el tiempo de espera y demás
        maximunAge: Infinity, // 0,321,Infinity (la ultima vez que buscamos una localización)
        timeout: 10000,
        enableHighAccuracy: true, // Alta precisión 
    });
} else {
    alert('La geolocalizacion no existe en su ordenador');
}

//3º mirar la id 
var watchID = navigator.geolocation.watchPosition(function (position) {
    console.log(position);
}, function(err){
    console.log(err);
    },  { // en este parte, es para configurar el tiempo de espera y demás
        maximunAge: Infinity, // 0,321,Infinity (la ultima vez que buscamos una localización)
        timeout: 10000,
        enableHighAccuracy: true, // Alta precisión 
    });

//    navigator.geolocation.clearWatch(watchID); //Para dejar de rastrear la localización 
