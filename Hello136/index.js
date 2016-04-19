window.onload = function() {
  navigator.notification.alert("PhoneGap is working!!!");
  document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
  navigator.notification.alert("Device is ready!!!");
  console.log(navigator.camera);
  var parentElement = document.getElementById("deviceready");
  var listeningElement = parentElement.querySelector('.listening');
  var receivedElement = parentElement.querySelector('.received');

  listeningElement.setAttribute('style', 'background:red');
  receivedElement.setAttribute('style', 'display:block');

  navigator.camera.getPictue(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL
  });

  function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
    console.log("image updated");
  }

  function onFail(message) {
    console.log('Failed because: ' + message);
  }
}
