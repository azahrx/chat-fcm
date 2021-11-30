
var registrationToken = "dbYBben_RR6VKGDZJwtcfg:APA91bGO94fvK6gw7CWb2swzd8pv1wHwBBAJBC7D-dQvkmqXEt_JzpGjntJAFyH5Iu50_0fIBV0mdjsNCf2qjc5YDPAyFWijg7mXSE_WfNaKT9fjeJ9VPxDVmntlU4xUzJfvLiYDL2_E";

var payload = {
  data: {
    Mykey1: "Hello everyone"
  }
};

var options = {
  priority: "high",
  timeTolive: 60 * 60 *24
};

admin.messaging().sendToDevice(registrationToken, payload, options)
 .then (function (response) {
    console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  });