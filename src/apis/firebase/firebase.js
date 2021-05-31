const firebase = require("firebase")

var config = {
    apiKey: "AIzaSyANd_hXX9kx_WMdfkcFmvTs13QsjUoQB9M",
    authDomain: "paitechblog.firebaseapp.com",
    // For databases not in the us-central1 location, databaseURL will be of the
    // form https://[databaseName].[region].firebasedatabase.app.
    // For example, https://your-database-123.europe-west1.firebasedatabase.app
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "bucket.appspot.com"
  };
  const app = firebase.initializeApp(config);

module.export = app