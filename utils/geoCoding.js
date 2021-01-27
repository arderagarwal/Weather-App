const request = require('postman-request');
const geoCoding = (address,callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token='+process.argv[4];
    request({url:url,json:true},(err,res)=>{
        if(err){
            callback('Can\'t connect to API',undefined);
        }else if(res.body.message){
            callback('City not found',undefined);
        }else{
            callback(undefined,{
                longitude :res.body.features[0].center[1],
                latitude :res.body.features[0].center[1],
                place_name : res.body.features[0].place_name,
            })
        }
    })
}
module.exports = geoCoding;