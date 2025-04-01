const FaqModal = require("../../modals/faq");

// For Add Data
exports.create = async(request,response) => {

    const data = new FaqModal({
        question : request.body.question,
        answer :  request.body.answer,
        order : request.body.order ? request.body.order : 0
    })

    await data.save()
    .then((result) => {
        const resp = {
            status : true,
            message : 'Record inserted successfully !!',
            data : result,
        }
        response.send(resp);
    })
    .catch((error) => {
        var errormessages = [];

        for(var value in error.errors){
            errormessages.push(error.errors[value].message);
        }

        const resp = {
            status : false,
            message : 'Something went wrong !!',
            data : '',
            error : errormessages
        }
        response.send(resp);
    })
}

// For View 
exports.index = async(request,response) => {
    
    var condition ={
        deleted_at : null
    }

    
    if(request.body.question != '' && request.body.question != undefined){
        // var nameRegex = new RegExp("^" + request.body.name);
        var questionRegex = new RegExp(request.body.question,"i");
        condition.question = questionRegex;
    }

    if(request.body.answer != '' && request.body.answer != undefined){
        // var nameRegex = new RegExp("^" + request.body.name);
        var answerRegex = new RegExp(request.body.answer,"i");
        condition.answer = answerRegex;
    }

    if(request.body.order != '' && request.body.order != undefined){
        // var nameRegex = new RegExp("^" + request.body.name);
        var orderRegex = new RegExp(request.body.order,"i");
        condition.order = orderRegex;
    }
    
    
    await FaqModal.find(condition)
    .select('question status answer order')
    .sort(
        {
             _id : 'desc'
        }
    )
    .then((result) => {
        if(result.length > 0){
            const resp = {
                status : true,
                message : 'Record found successfully !!',
                data : result,
            }
            response.send(resp);
        } else {
            const resp = {
                status : false,
                message : 'No record found !!',
                data : [],
            }
            response.send(resp);
        }
    })
    .catch((error) => {
        const resp = {
            status : false,
            message : 'Something went wrong !!',
            data : '',
            error : error
        }
        response.send(resp);
    })
}

// For Details
exports.details = async(request,response) => {
    await FaqModal.findById(request.params.id)
    .then((result) => {
        if(result != null){
            const resp = {
                status : true,
                message : 'Record found successfully !!',
                data : result,
            }
            response.send(resp);
        } else {
            const resp = {
                status : false,
                message : 'No record found !!',
                data : [],
            }
            response.send(resp);
        }
    })
    .catch((error) => {
        const resp = {
            status : false,
            message : 'Something went wrong !!',
            data : '',
            error : error
        }
        response.send(resp);
    })
}

// For Update
exports.update = async(request,response) => {

    var condition = {};

    if(request.body.question){
        condition.question = request.body.question;
    }

    if(request.body.answer){
        condition.answer = request.body.answer;
    }

    if(request.body.order){
        condition.order = request.body.order;
    }

    await FaqModal.updateOne(
        {
            _id : request.params.id
        },
        {
            $set : condition
        }
    ).then((result) =>{
        var resp = {
            status : true,
            message : 'Record update successfully !!',
            data : result
        }

        response.send(resp);

    }).catch((error) => {
        var errormessages = [];

        for(var value in error.errors){
            console.log(value);
            errormessages.push(error.errors[value].message);
        }

        const resp = {
            status : false,
            message : 'Something went wrong !!',
            data : '',
            error : errormessages
        }
        response.send(resp);
    })
}

// For Delete
exports.destroy = async(request,response) => {
    await FaqModal.updateMany(
        {
            _id : {
                $in : request.body.ids
            } 
        },
        {
            $set : {
                deleted_at : Date.now(),
            }
        }
    ).then((result) =>{
        var resp = {
            status : true,
            message : 'Record deleted successfully !!',
            data : result
        }

        response.send(resp);

    }).catch((error) => {

        console.log(error);
        var errormessages = [];

        for(var value in error.errors){
            console.log(value);
            errormessages.push(error.errors[value].message);
        }

        const resp = {
            status : false,
            message : 'Something went wrong !!',
            data : '',
            error : errormessages
        }
        response.send(resp);
    })
}

/// For Change Status
exports.changeStatus = async (request, response) => {
    await FaqModal.updateMany(
        { _id: { $in: request.body.ids } },
        [
            { 
                $set: { 
                    status: { 
                        $not: "$status" 
                    } 
                } 
            }
        ]
    ).then((result) => {
        var resp = {
            status: true,
            message: 'Change status successfully !!',
            data: result
        }

        response.send(resp);

    }).catch((error) => {
        var errormessages = [];

        console.log(error);

        for (var value in error.errors) {
            console.log(value);
            errormessages.push(error.errors[value].message);
        }

        const resp = {
            status: false,
            message: 'Something went wrong !!',
            data: '',
            error: errormessages
        }
        response.send(resp);
    })
}