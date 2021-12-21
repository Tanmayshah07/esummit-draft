
import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs,
    addDoc
} from 'firebase/firestore'

const firebaseConfig = {
    authDomain: "esummit-4d1dd.firebaseapp.com",
    projectId: "esummit-4d1dd",
    storageBucket: "esummit-4d1dd.appspot.com",
    messagingSenderId: "1039019260836",
    appId: "1:1039019260836:web:a2c4aa27cb17353f141f31",
    measurementId: "G-MVL9J1NPBH"
}

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'users')


// // get collection data
// getDocs(colRef)
//     .then(snapshot => {
//         // console.log(snapshot.docs)
//         let books = []
//         snapshot.docs.forEach(doc => {
//             books.push({ ...doc.data(), id: doc.id })
//         })
//         console.log(books)
//     })
//     .catch(err => {
//         console.log(err.message)
//     })


// adding docs
const addemail = document.querySelector('.add')
addemail.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(colRef, {
        emailid: addemail.email.value,
    })
        .then(() => {
            addemail.reset()
            window.alert("Email has been recorded");
        })
})

