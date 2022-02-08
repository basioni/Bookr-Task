const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Users Roles Schema 
const TodosSchema = mongoose.Schema({
    todoID :{
        type: String ,
        required: true
    },
    todoTitle :{
        type: String ,
        required: true
    },
    todoDescription :{
        type: String ,
        required: true
    }
});


const Todos = mongoose.model('Todos', TodosSchema, 'Todos');
const mySchemas = {'Todos': Todos};

module.exports = mySchemas;