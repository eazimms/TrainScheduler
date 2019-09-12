$(document).ready(function () {

    var firebaseConfig = {
        apiKey: "AIzaSyAEIvWcS-YUWFmeK4hKEnaHZFd3W4B-_ZA",
        authDomain: "trainscheduler-620aa.firebaseapp.com",
        databaseURL: "https://trainscheduler-620aa.firebaseio.com",
        projectId: "trainscheduler-620aa",
        storageBucket: "",
        messagingSenderId: "1096591438771",
        appId: "1:1096591438771:web:47c68ab977c50ee36851c6"
    };

    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();

    var destination;
    var firstTrain;
    var freq = 0;
    var trainName;

    // Grabbing the values from the inputs. 
    $('#addTrain').on('click', function () {
        event.preventDefault();

        trainName = $('#trainName').val().trim();
        console.log(trainName);

        destination = $('#Destination').val().trim();
        console.log(destination);

        firstTrain = $('#firstTrain').val().trim();
        console.log(firstTrain);
        freq = $('#frequency').val().trim();
        console.log(freq);
        // Push to firebase. 
        database.ref().push({
            name: trainName,
            destination: destination,
            first: firstTrain,
            frequency: freq,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
    });
    // confirming with snapshots. 
    database.ref().on("child_added", function (snapshot) {
        console.log(snapshot.val());
        console.log(snapshot.val().name);
        console.log(snapshot.val().destination);
        console.log(snapshot.val().first);
        console.log(snapshot.val().frequency);

    }); 

    $("#newTrain").append('<tr><td>' + snapshot.val().name +'</td><td>' + snapshot.val().destination + '</td><td>' + snapshot.val().first + '</td><td>' + snapshot.val().frequency); 
})