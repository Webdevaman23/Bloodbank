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
        return res.status(500).sedn({
            success: false,
            message: "Error in Donar List",
            error
        })
    }
}

// get hospital list 
const getHospitalListController = async (req , res) => {
    try {
        const donarData = await userModel.find({role : "hospital"}).sort({createdAt : -1})

        return res.status(200).send({
            success : true,
            TotalCount : donarData.length,
            message : "Hospitals List Fetched Successfully",
            donarData
        })
    } catch (error) {
        console.log(error);
        return res.status(500).sedn({
            success: false,
            message: "Error in Hospital List",
            error
        })
    }
}

// get Org list 
const getOrgListController = async (req , res) => {
    try {
        const donarData = await userModel.find({role : "organisation"}).sort({createdAt : -1})

        return res.status(200).send({
            success : true,
            TotalCount : donarData.length,
            message : "ORG List Fetched Successfully",
            donarData
        })
    } catch (error) {
        console.log(error);
        return res.status(500).sedn({
            success: false,
            message: "Error in ORG List",
            error
        })
    }
}

// export 
module.exports = {getDonarsListController , getHospitalListController , getOrgListController}