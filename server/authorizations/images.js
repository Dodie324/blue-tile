Meteor.startup(function() {
  Images.allow({
    insert: function () {
      return true
    },
    download: function () {
      return true;
    },
    update: function () {
      return true
    }
  });
})
