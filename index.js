const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello from openshift'))

const ip = process.env.IP  || '0.0.0.0'
const port = process.env.PORT || 8080
	
app.listen(port, ip)
console.log('Server running on ' + ip + ':' + port);
