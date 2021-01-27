const request = require('postman-request');
const forecast = (lat,long,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key='+process.argv[3]+'&query='+lat+','+long+'&units=m';
    request({url:url,json:true},(err,res)=>{
        if(err){
            callback('Can\'t connect to API',undefined);
        }else if(res.body.error){
            callback('City not found',undefined);
        }else{
            callback(undefined,'It is '+res.body.current.weather_descriptions[0]+' and current temperature is '+res.body.current.temperature+' Degrees Celsius')
        }
    })
}
module.exports = forecast;