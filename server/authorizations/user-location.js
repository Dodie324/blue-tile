Meteor.startup(function() {
  userLocation.allow({
    insert: function () {
      return true
    },
    update: function () {
      return true
    }
  });
})
