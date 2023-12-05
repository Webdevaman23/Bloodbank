const userModel = require("../models/Usermodel")

// get donar list 
const getDonarsListController = async (req , res) => {
    try {
        const donarData = await userModel.find({role : "donar"}).sort({createdAt : -1})

        return res.status(200).send({
            success : true,
            TotalCount : donarData.length,
            message : "Donars List Fetched Successfully",
            donarData
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Donar List",
            error
        })
    }
}

// get hospital list 
const getHospitalListController = async (req , res) => {
    try {
        const hospitalData = await userModel.find({role : "hospital"}).sort({createdAt : -1})

        return res.status(200).send({
            success : true,
            TotalCount : hospitalData.length,
            message : "Hospitals List Fetched Successfully",
            hospitalData
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Hospital List",
            error
        })
    }
}

// get Org list 
const getOrgListController = async (req , res) => {
    try {
        const orgData = await userModel.find({role : "organisation"}).sort({createdAt : -1})

        return res.status(200).send({
            success : true,
            TotalCount : orgData.length,
            message : "ORG List Fetched Successfully",
            orgData
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in ORG List",
            error
        })
    }
}

// delete donar 
const deleteDonar = async(req , res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        return res.status(200).send({
            success : true,
            message : "Record Deleted Successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success : false,
            message : "Error while deleting records",
            error
        })
    }
}


// export 
module.exports = {deleteDonar , getDonarsListController , getHospitalListController , getOrgListController}