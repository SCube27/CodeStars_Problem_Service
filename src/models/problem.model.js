const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, `Title can't be empty`],
    },
    description : {
        type : String,
        required : [true, `Description can't be empty`],
    },
    difficulty : {
        type : String,
        enum : ['easy', 'medium', 'hard'],
        required : [true, `Difficulty field can't be empty`],
        default : 'easy',
    },
    testCases : [
        {
            input : {
                type: String, 
                required : true,
            },
            output : {
                type: String,
                required : true,
            }
        },
    ],
    codeStubs: [
        {
            language: {
                type: String,
                enum: ['CPP', 'JAVA', 'PYTHON'],
                required: true,
            },
            startSnippet: {
                type: String,
            },
            endSnippet: {
                type: String,
            },
            userSnippet: {
                type: String,
            }
        }
    ],
    editorial : {
        type: String
    },
});

// Creates a collection for above schema based documents
const Problem = mongoose.model(`Problem`, problemSchema); // Name of the collection and schema for that collection

module.exports = Problem;