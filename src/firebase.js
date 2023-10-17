require('dotenv').config()
const {initializeApp, applicationDefault} = require('firebase-admin/app')
const {getFirestore, CollectionGroup} = require('firebase-admin/firestore')

initializeApp({
    credential: applicationDefault(),

})

const db = getFirestore()

module.exports = {
    db,
}