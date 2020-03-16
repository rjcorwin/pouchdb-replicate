# PouchDB Replication Examples

```
npm install
```

To replicate from db1 to db2...
```
node replicate-user-profiles.js http://user:pass@foo.com:5984/db1 http://user:pass@bar.com:5984/db2
```

To only replicate Tangerine user profiles...
```
node replicate-user-profiles.js http://user:pass@foo.com:5984/db1 http://user:pass@bar.com:5984/db2
```
