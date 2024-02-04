const usermodells = require("../modells/userModells");

const createData = async function(req,res){
    try {
        let data = await usermodells.create(req.body)
        res.status(200).json({msg:"data create sucessfully",data:data})
        
    } catch (error) {
        res.status(400).json({nsg:"internal server error"+ error})
    }
}

const getData = async function(req,res){
    try {
        let getdata =await usermodells.find()
        res.status(200).json({msg:"userData",getdata:getdata})
        
    } catch (error) {
        res.status(400).json({nsg:"internal server error"+ error})
        
    }
}

module.exports={createData,getData}
