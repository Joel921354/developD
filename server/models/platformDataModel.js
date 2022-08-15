const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema({
	PlatformName: {
		type: String,
		required: [true, " Name is required"],
		unique: [true, "Name Already Exists"],
	},
		
	KBlink: {
		type: String,
	},
	Query: {
		type: String,
		required: [true, "Query definition for platform can't be left blank"],
	},
});

module.exports = mongoose.model("Crud", crudSchema, "Cruds");
