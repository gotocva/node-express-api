import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * * SampleSchema
 * @description Sample model
 */
const SampleSchema = new Schema({
    name: {
      type: String,
      required: [true, 'name must not be empty'],
    },
    email: {
      type: String,
      required: [true, 'receiver must not be empty'],
    },
}, 
{ versionKey: false });


export const Chat = mongoose.model('Chat', ChatSchema);