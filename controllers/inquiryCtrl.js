const Inquiry = require("../models/inquiryModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const addInquiry = asyncHandler(async (req, res) => {
  try {
    const newInquiry = await Inquiry.create(req.body);
    res.json(newInquiry);
  } catch (error) {
    throw new Error(error);
  }
});

const updateInquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedInquiry = await Inquiry.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({
      status: "success",
      updatedInquiry,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getInquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaInquiry = await Inquiry.findById(id);
    res.json(getaInquiry);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllInquiry = asyncHandler(async (req, res) => {
  try {
    const getInquirys = await Inquiry.find();
    res.json(getInquirys);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteInquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedInquiry = await Inquiry.findByIdAndDelete(id);
    res.json(deletedInquiry);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  addInquiry,
  updateInquiry,
  getInquiry,
  getAllInquiry,
  deleteInquiry,
};
