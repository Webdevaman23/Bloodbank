const mongoose = require("mongoose");
const Usermodel = require("../models/Usermodel");
const inventoryModel = require("../models/inventoryModel");

const createInventoryController = async (req, res) => {
  try {
    const { email } = req.body;

    //validation
    const user = await Usermodel.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    // if(!inventoryType === "in" && user.role !== "donar"){
    //     throw new Error("Not a donar account");
    // }
    // if(inventoryType === "out" && user.role !== "hospital"){
    //     throw new Error("Not a hospital");
    // }

    if (req.body.inventoryType === "out") {
      const requestedBloodGroup = req.body.bloodGroup;
      const requestedQuantityOfBlood = req.body.quantity;
      const organisation = new mongoose.Types.ObjectId(req.body.UserId);

      // calculate Blood Quantity
      const totalInOfRequestedBlood = await inventoryModel.aggregate([
        {
          $match: {
            organisation,
            inventoryType: "in",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: {
            _id: "$bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);
      // console.log('Total In' , totalInOfRequestedBlood)
      const totalIn = totalInOfRequestedBlood[0]?.total || 0;

      // calculate out Blood Quantity
      const totalOutOfRequestedBloodGroup = await inventoryModel.aggregate([
        {
          $match: {
            organisation,
            inventoryType: "out",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: {
            _id: "$bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);
      const totalOut = totalOutOfRequestedBloodGroup[0]?.total || 0;

      // in & out
      const availableQuantityOfBloodGroup = totalIn - totalOut;

      // Quantityvalidation
      if (availableQuantityOfBloodGroup < requestedQuantityOfBlood) {
        return res.status(500).send({
          success: false,
          message: `Only ${availableQuantityOfBloodGroup}ML of ${requestedBloodGroup.toUpperCase()} is availabel`,
        });
      }

      req.body.hospital = user?._id;
    } else {
      req.body.donar = user?._id;
    }

    // save record
    const invetory = new inventoryModel(req.body);
    await invetory.save();

    return res.status(201).send({
      success: true,
      message: "New Blood Record Found",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while creating Invetory API",
      error,
    });
  }
};

// get all blood records
const getInventoryController = async (req, res) => {
  try {
    const inventory = await inventoryModel
      .find({ organisation: req.body.UserId })
      .populate("donar")
      .populate("hospital")
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      message: "Get all records successfully",
      inventory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in GET All Inventory",
      error,
    });
  }
};

// get all Hospital blood records
const getInventoryHospitalController = async (req, res) => {
  try {
    const inventory = await inventoryModel
      .find(req.body.filters)
      .populate("donar")
      .populate("hospital")
      .populate("organisation")
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      message: "Get Hospital consumer records successfully",
      inventory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in GET consumer Inventory",
      error,
    });
  }
};

//  GET BLOOD RECORDS OF 3
const getRecentInventoryController = async (req , res) =>{
  try {
    const inventory = await inventoryModel.find({
      organisation : req.body.UserId
    }).limit(3).sort({createdAt: -1})

    return res.status(200).send({
      success : true,
      message : "Recent Inventory Data",
      inventory
    })
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      success : false,
      message : "Error in recent Inventory API",
      error
    })
  }
}


// Get Donar Records
const getDonarsControllers = async(req , res) => {
    try {
        const organisation = req.body.UserId ;

        // find donars
        const donarId = await inventoryModel.distinct("donar" , {
            organisation
        });
        // console.log(donarId)

        const donars = await Usermodel.find({_id : {$in: donarId}});
        
        return res.status(200).send({
            success : true,
            message : "Donar Record Fetched Successfully",
            donars
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success : false,
            message : "Error in Donar records",
            error
        })
    }
};


// Get Hospital Records
const getHospitalController = async(req , res) => {
  try {
    const organisation = req.body.UserId;

    // get hospital id
    const hospitalId = await inventoryModel.distinct("hospital" , {
      organisation
    });

    // find hospital
    const hospitals = await Usermodel.find({
      _id : {$in : hospitalId}
    })

    return res.status(200).send({
      success : true ,
       message : "Hospitals Data Fetched Successfully",
       hospitals
    })
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success : false,
      message : "Error in getting Hospitals Records",
      error
    })
  }
}


// get organisation profiles 
const gerOrganisationController = async(req , res) => {
  try {
    const donar  = req.body.UserId;

    // get orgID 
    const orgId = await inventoryModel.distinct("organisation" , {donar});

    const organisations = await Usermodel.find({
      _id : {$in : orgId}
    })

    return res.status(200).send({
      success : true ,
      message : "ORG data fetched successfully",
      organisations
    })
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success : false,
      message : "error in ORG API",
      error
    })
  }
}


// get organisation for hospital
const gerOrganisationForHospitalController = async(req , res) => {
  try {
    const hospital  = req.body.UserId;

    // get orgID 
    const orgId = await inventoryModel.distinct("organisation" , {hospital});

    const organisations = await Usermodel.find({
      _id : {$in : orgId}
    })

    return res.status(200).send({
      success : true ,
      message : "Hospital Org data fetched successfully",
      organisations
    })
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success : false,
      message : "error in Hospital ORG API",
      error
    })
  }
}

module.exports = { getRecentInventoryController , gerOrganisationForHospitalController, gerOrganisationController , getHospitalController , createInventoryController, getInventoryController , getDonarsControllers , getInventoryHospitalController};
