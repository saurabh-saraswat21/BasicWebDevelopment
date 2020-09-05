const mongoose = require('mongoose');
const schema = mongoose.Schema;
const toDoSchema = new schema({

    todo :{
        type: String,
        required: true
    }
})
module.exports = {
    
    todoSchema:toDoSchema
};