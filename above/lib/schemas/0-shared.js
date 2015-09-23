var PointSchema = new SimpleSchema({
  type: {
    type: String,
    allowedValues: ['Point']
  },
  coordinates: {
    type: [Number],
    decimal: true,
    minCount: 2,
    maxCount: 2,
    custom: function () {
      lon = this.value[0]
      lat = this.value[1]

      if(lon <= -180 || lon >= 180) {
        return "latOutOfRange"
      }
      if(lat <= -90 || lat >= 90) {
        return "lonOutOfRange"
      }
    }
  },
})

var GeolocationSchema = new SimpleSchema({
  geolocation: {
    type: PointSchema,
    index: '2dsphere'
  },
})

var UpdatedAtSchema = new SimpleSchema({
  updatedAt: {
    type: Date,
    autoValue: function() {
      return new Date()
    },
  }
})


SharedSchemas = {
  UpdatedAtSchema:   UpdatedAtSchema,
  GeolocationSchema: GeolocationSchema,
}
