var admin = require("firebase-admin");

var serviceAccount = require("/Users/ZAHRA/AndroidStudioProjects/server/chatapp-454f5-firebase-adminsdk-qafcc-d848bcb595.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://chatapp-454f5-default-rtdb.asia-southeast1.firebasedatabase.app"
  });

var express = require('express');
var app = express();

const PORT = process.env.PORT || 5000;

app.post('/', async(req, res) => {
    var respond = req.body
    const payload = {

        // user, message, time
        // user with token
        // {
        //     "user":"Zahra",
        //     "message":"Test"
        // }
    
        notification: {
            title: `MonkaW`,
            body: `Pepega`,
            image: 'https://cdn.discordapp.com/attachments/643333359413624833/914915543553826868/35.jpg'
        },

        data: respond,
        topic: "13",
    }

    const a = await admin.messaging().send(payload)
    console.log(a)
    res.status(200).send()

  });

// app.listen(3000, function () {
//     console.log('Example app listening on port 3000.');
// });

app.listen(PORT, () => {
  return console.log(`server is listening on http://localhost:${PORT}`);
});