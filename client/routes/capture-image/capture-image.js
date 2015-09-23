Template.captureImage.events({
  "change #uploadImage": function(e, t) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        if (err){
         return console.log("Image upload failed.")
        }

        var image = fileObj._id

        navigator.geolocation.getCurrentPosition(function (location) {
          var lon = location.coords.longitude
          var lat = location.coords.latitude

          userLocation.insert({
            userId:      Meteor.userId(),
            imageId:     image,
            geolocation: {
              type: 'Point',
              coordinates: [lon, lat]
            }
          })
        })

      })
    })
  }
})
