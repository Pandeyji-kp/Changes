const subsubCategoryModal = require("../../modals/subsubCategory");

// For Add Data
exports.create = async(request,response) => {


    const saveData = {
        order : request.body.order ? request.body.order : 0
    };

    if(request.body.name){
        saveData.name = request.body.name;
    }


    if(request.file){
        saveData.image = request.file.filename;
    }

    if(request.body.parentCategory){
        saveData.parentCategory = request.body.parentCategory;
    }

    if(request.body.subCategory){
        saveData.subCategory = request.body.subCategory;
    }

    

    



    const data = new subsubCategoryModal(saveData)

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

    
    if(request.body.name != '' && request.body.name != undefined){
        // var nameRegex = new RegExp("^" + request.body.name);
        var nameRegex = new RegExp(request.body.name,"i");
        condition.name = nameRegex;
    }

    if(request.body.parentCategory != '' && request.body.parentCategory != undefined){
        // var nameRegex = new RegExp("^" + request.body.name);
        var parentCategoryRegex = new RegExp(request.body.parentCategory,"i");
        condition.parentCategory = parentCategoryRegex;
    }

    if(request.body.subCategory != '' && request.body.subCategory != undefined){
        // var nameRegex = new RegExp("^" + request.body.name);
        var subCategoryRegex = new RegExp(request.body.subCategory,"i");
        condition.subCategory = subCategoryRegex;
    }

    if(request.body.code != '' && request.body.code != undefined){
        // var nameRegex = new RegExp("^" + request.body.name);
        var codeRegex = new RegExp(request.body.code,"i");
        condition.code = codeRegex;
    }
    
    
    await subsubCategoryModal.find(condition)
    .select('parentCategory subCategory name image status order')
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
                base_url : `${request.protocol}://${request.get('host')}/uploads/subsubcategories/`,
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
    await subsubCategoryModal.findById(request.params.id)
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

    if(request.body.name){
        condition.name = request.body.name;
    }

    if(request.file){
        condition.image = request.file.filename;
    }



    if(request.body.order){
        condition.order = request.body.order;
    }

    await subsubCategoryModal.updateOne(
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
    await subsubCategoryModal.updateMany(
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

// For Change Status
exports.changeStatus = async (request, response) => {
    await subsubCategoryModal.updateMany(
        {
            _id: { $in: request.body.id },
        },
        [
            {
                $set: {
                    status: {
                       $not: "status"
                    },
                },
            },
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