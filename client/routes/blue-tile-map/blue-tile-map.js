Template.BlueTileMap.helpers({
  mapOptions: function () {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(29.7632800, -95.3632700),
        zoom: 11
      }
    }
  }
})
