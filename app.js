const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=f5b9f220a82962a09146ed81598d6a0c&query=28.704060,77.102493'
request({url:url},(err,res)=>{
	const data = JSON.parse(res.body)
	console.log(data.current)
})