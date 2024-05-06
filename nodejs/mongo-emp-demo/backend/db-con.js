import mongoose from 'mongoose';

const connectionString = 'mongodb://localhost:27017';
const databaseName = 'ems';

mongoose.connect(`${connectionString}/${databaseName}`)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const employeeSchema = new mongoose.Schema({
    firstnName: String,
    email: String,
    aadhar:Number,
    salary:Number,
    avatar:String

});

const Employee = mongoose.model('Employee', employeeSchema);

export { Employee };