module.exports=(request, response,next)=>{
    if(!request.query.apikey){
        const result = {
            status: false,
            message: 'key is required !!',
            data: null
        }
        response.send(result);
    }else if(request.query.apikey !=123456789){
        const result = {
            status: false,
            message: 'key is invalid !!',
            data: null
        }
        response.send(result);
    }
    else{
        next();
    }
   
}