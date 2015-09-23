Router.route('/', function () {
  if (!Meteor.userId()) {
    this.render('Login')
  } else {
    this.render('BlueTileMap')
  }
})
