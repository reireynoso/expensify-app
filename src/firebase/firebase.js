import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {firebase, googleAuthProvider ,database as default}
// child_removed
// database.ref('expenses').on(('child_changed'), (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref("expenses").push({
//     description: "Rent",
//     note: "",
//     amount: 1243,
//     createdAt: 23917239
// })

// database.ref("expenses").push({
//     description: "Phone Bill",
//     note: "",
//     amount: 5999,
//     createdAt: 91832837213
// })

// database.ref("expenses").push({
//     description: "Food",
//     note: "",
//     amount: 9999,
//     createdAt: 1321936291376
// })

// database.ref("expenses").once('value')
// .then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
// })

// database.ref("expenses").on('value', (snapshot)=> {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses)
// })


// database.ref().set({})

// database.ref("notes").push({
//     body: "Go for run",
//     title: "To Do"
// })
// database.ref("notes").push({
//     body: "React",
//     title: "Course Topics"
// })

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// setTimeout(() => {
//     database.ref("job/title").set("SE")
// }, 4000)

// database.ref().off()

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log("Error", e)
//     })

// firebase.database().ref().set({
//     "name": "Rei Reynoso",
//     job: "SE Coach",
//     age: 29,
//     stress: 6,
//     job: {
//         title: "SD",
//         company: "Google"
//     },
//     location: {
//         city: "Jersey City"
//     }
// }).then(() => {
//     console.log('data is saved')
// }).catch(error => {
//     console.log('this failed', error)
// })

// firebase.database().ref().update({
//     stress: 9,
//     "job/company": "Amazon",
//     'location/city': "Seattle"
// })

//   firebase.database().ref('location/city').set({
//       city: "Brooklyn"
// })

// firebase.database().ref('attributes').set({
//     height: 72,
//     width: 154
// }).then(() => {
//     console.log("hey")
// }).catch(e => {
//     console.log("no work", e)
// })

// firebase.database().ref("isSingle").remove()