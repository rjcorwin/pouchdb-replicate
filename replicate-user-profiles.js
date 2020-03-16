const PouchDB = require('pouchdb')
const sourceDb = new PouchDB(process.argv[2])
const targetDb = new PouchDB(process.argv[3])
PouchDB.replicate(sourceDb, targetDb, {
  "selector": { "form.id": "user-profile" }
})
