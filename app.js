const geoCoding = require('./utils/geoCoding.js');
const forecast = require('./utils/forecast.js');
// const url = 'http://api.weatherstack.com/current?access_key=f5b9f220a82962a09146ed81598d6a0c&query=28.704060,77.102493'
// request({url:url},(err,res)=>{
// 	const data = JSON.parse(res.body)
// 	console.log(data.current)
// })

// const geoCodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXJkZXJhZ2Fyd2FsIiwiYSI6ImNra2Y2aDZhMTBmOHcybm43eGIwMzU1b2YifQ.ZD3qL14-9Ue94B1-EqCvfA'
// request({url:geoCodingUrl, json:true}, (err,res)=>{
// 	console.log(res.body.features[0].center)
// 	if(err){
// 		console.log(err)
// 	}
// });
const address=process.argv[2];
if(!address){
	console.log("Please provide address")
}else{
	let obj={};
	geoCoding(address,(err,data)=>{
		if(err){
			console.log(err)
		}else{
			obj=data;
			console.log(data);
			forecast(obj.latitude,obj.longitude,(err,data)=>{
				if(err){
					console.log(err)
				}else{
					console.log(data);
				}
			})
		}
	})
}

