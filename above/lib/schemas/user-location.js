var userLocationSchema = new SimpleSchema([
  SharedSchemas.GeolocationSchema,
  SharedSchemas.UpdatedAtSchema,
  {
    userId: {
      type: String
    },
    imageId: {
      type: String
    }
  }
])

userLocation = new Mongo.Collection('usersLocations')
userLocation.attachSchema(userLocationSchema)
