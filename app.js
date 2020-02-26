const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
var db = require('diskdb');
db = db.connect('/home/annamalais/Documents/EmployeeDetails/api', ['employee']);
app.use(cors()) 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post('/write',(req, res) => {
		db.employee.save(req.body);
		res.send({})
})


app.get('/details/:id',(req,res) =>
	{
		
	setTimeout (() => {
		let value = db.employee.find();
			res.send(value)
	 }, 2000);
	})

app.delete('/delete/:name', function (req, res) 
	{
		db.employee.remove({name : req.params.name});	
		res.send({})
	})

app.put('/update/:name/:oldmail/:new', function (req, res)
 	{
	  let value1 = db.employee.find({email : req.params.oldmail});
	  console.log(value1[0]._id);
	  let upID= value1[0]._id;
	  var query = {_id : upID };
	  var dataToBeUpdate = {email : req.params.new };
	  var options = { multi: true, upsert: false };
	  var updated = db.employee.update(query, dataToBeUpdate, options);
	  res.send({})
	})

app.listen(3000, () => {
	return console.log('Listening ');
})