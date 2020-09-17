const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	isDone: {
		type: Boolean,
		default: false,
	},
	dueDate: {
		type: Date,
		default: Date.now(),
	},
	owner: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Todo', todoSchema);
