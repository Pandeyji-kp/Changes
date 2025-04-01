const categoryModal = require("../../models/categorys");

// For Add Data
exports.create = async (request, response) => {

    const data = new categoryModal({
        name: request.body.name,
        price: request.body.price,
        quantity: request.body.quantity,
        order: request.body.order ? request.body.order : 0
    })

    await data.save()
        .then((result) => {
            const resp = {
                status: true,
                message: 'Record inserted successfully !!',
                data: result,
            }
            response.send(resp);
        })
        .catch((error) => {
            var errormessages = [];

            for (var value in error.errors) {
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

// For View 
exports.index = async (request, response) => {

    var page = request.body.page ? request.body.page : 1;
    var limit = request.body.limit ? request.body.limit : 15;
    var skip = (page - 1) * limit;


    var total_records = await categoryModal.find(
        {
            // price: {
            //     $gte: request.body.price
            // },
            $or: [
                {
                    quantity: { $lte: request.body.quantity }
                },
                { price: request.body.price }

            ],


            status: true,
            deleted_at: null
        }).select('name order status price quantity')


    await categoryModal.find(
        {
            price: {
                $gte: request.body.price
            },
            $or: [
                {
                    quantity: { $lte: request.body.quantity }
                },
                { price: request.body.price }

            ],


            status: true,
            deleted_at: null
        }).select('name order status price quantity')
        .sort({ order: 'asc', _id: 'desc' })
        .limit(limit)
        .skip(skip)


        .then((result) => {
            if (result.length > 0) {
                const resp = {
                    status: true,
                    message: 'Record found successfully !!',
                    data: result,
                    total_records : total_records.length,
                    total_pages :  total_records.length / limit
                }
                response.send(resp);
            } else {
                const resp = {
                    status: false,
                    message: 'No record found !!',
                    data: [],
                }
                response.send(resp);
            }
        })
        .catch((error) => {
            const resp = {
                status: false,
                message: 'Something went wrong !!',
                data: '',
                error: error
            }
            response.send(resp);
        })
}

// For Details
exports.details = async (request, response) => {
    await categoryModal.findOne({
        _id: request.params.id,
        deleted_at: null
    })
        .then((result) => {
            if (result != null) {
                const resp = {
                    status: true,
                    message: 'Record found successfully !!',
                    data: result,
                }
                response.send(resp);
            } else {
                const resp = {
                    status: false,
                    message: 'No record found !!',
                    data: [],
                }
                response.send(resp);
            }
        })
        .catch((error) => {
            const resp = {
                status: false,
                message: 'Something went wrong !!',
                data: '',
                error: error
            }
            response.send(resp);
        })



    // await brandModal.findById(request.params.id)
    // .then((result) => {
    //     if(result != null && result.deleted_at == null){
    //         const resp = {
    //             status : true,
    //             message : 'Record found successfully !!',
    //             data : result,
    //         }
    //         response.send(resp);
    //     } else {
    //         const resp = {
    //             status : false,
    //             message : 'No record found !!',
    //             data : [],
    //         }
    //         response.send(resp);
    //     }
    // })
    // .catch((error) => {
    //     const resp = {
    //         status : false,
    //         message : 'Something went wrong !!',
    //         data : '',
    //         error : error
    //     }
    //     response.send(resp);
    // })
}

// For Update
exports.update = async (request, response) => {
    await categoryModal.updateOne(
        {
            _id: request.params.id
        },
        {
            $set: {
                name: request.body.name,
                price: request.body.price,
                quantity: request.body.quantity,
                order: request.body.order ? request.body.order : 0
            }
        }
    ).then((result) => {
        var resp = {
            status: true,
            message: 'Record update successfully !!',
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

// For Delete
exports.destroy = async (request, response) => {
    await categoryModal.updateOne(
        {
            _id: request.params.id
        },
        {
            $set: {
                deleted_at: Date.now(),
            }
        }
    ).then((result) => {
        var resp = {
            status: true,
            message: 'Record deleted successfully !!',
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

// For Change Status
exports.changeStatus = async (request, response) => {
    await categoryModal.updateOne(
        {
            _id: request.params.id
        },
        {
            $set: {
                deleted_at: Date.now(),
            }
        }
    ).then((result) => {
        var resp = {
            status: true,
            message: 'Record deleted successfully !!',
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