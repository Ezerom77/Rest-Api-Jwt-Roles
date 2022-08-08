import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/companydb',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then (db => console.log('db connected'))
.catch (err => console.log(err))