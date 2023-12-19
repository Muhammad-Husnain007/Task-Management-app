const mongoose = require('mongoose');
require('dotenv').config();
const apiModel = require('../allModels/EcommerceModel');
const dbConnect = require('../DbConnect/dbConnect');
const  cloudinary = require('../Cloudinary/config');
const multer = require('multer');

dbConnect();

// ...
      // ============ MULTER START ======

      const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './tmp');
        },
        filetitle: function (req, file, cb) {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
          cb(null, file.originaltitle + '-' + uniqueSuffix);
        }
      });
      
      const upload = multer({ storage: storage });
       
            // ============ MULTER END ======
      

const EcommerceController = {

    addData: async (req, res) => {
        try {
            const { title, description, condition, price, phone, imageUrl, location } = req.body;
           
            if (!imageUrl) {
                return res.status(400).send({ message: 'No image URL received' });
              }
        
              const newProduct = new apiModel({
                title, description, condition, price, phone, imageUrl, location
              });

            await newProduct.save();
            res.status(201).send({ message: "Data posted successfully", newProduct });
        } catch (err) {
            res.status(500).send({ message: "server error", error: err.message });
        }
    },

    getData: async (req, res) => {
        try {
            const getProducts = await apiModel.find();
            res.send(getProducts);
        } catch (err) {
            res.status(500).send({ message: "server error", error: err.message });
        }
    },

    getDataById: async (req, res) => {
      try {
          const { id } = req.params;
          const getById = await apiModel.findById(id);
          const isValidId = mongoose.Types.ObjectId.isValid(id);
          if (!isValidId) {
              return res.status(400).send({ message: "Invalid ID" });
          }
          if (!getById) {
              res.status(404).send({ message: "invalid id data not found" });
          }
          return res.status(200).send(getById);
      } catch (err) {
          return res.status(500).send({ message: "server error", error: err.message });
      }
  },

  putData: async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, condition, price, phone, location } = req.body;
        const isValidId = mongoose.Types.ObjectId.isValid(id);
        if (!isValidId) {
            return res.status(400).send({ message: "Invalid ID" });
        }
        const putData = await apiModel.findByIdAndUpdate(
            id,
            { title, description, price, condition, phone, location },
            { new: true }
        )
        if (!putData) {
            return  res.status(404).send({ message: "data not found" });
        }
        if (req.file) {
          const result = await cloudinary.uploader.upload(req.file.path);
          putData.imageUrl = result.secure_url;
          await putData.save();
        }
        return res.status(200).send(putData);
    } catch (err) {
        res.status(500).send({ message: "server error", error: err.message });
    }
},

deleteData: async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, condition, price, phone, location } = req.body;
        const isValidId = mongoose.Types.ObjectId.isValid(id);
        if (!isValidId) {
            return res.status(400).send({ message: "Invalid ID" });
        }
        const deleteData = await apiModel.findByIdAndDelete(
            id,
            { title, description, price, condition, phone, location }
        )
        if (!deleteData) {
            return  res.status(404).send({ message: "data not found" });
        }
        return  res.status(200).send(deleteData);
    } catch (err) {
       return res.status(500).send({ message: "server error", error: err.message });
    }
},


}

module.exports = EcommerceController;
