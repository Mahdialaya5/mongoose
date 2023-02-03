const express = require('express')
const app = express()
const port = 5000
const connectDb = require('./connect')
const User=require("./model/Model")
require("dotenv").config();
//Create a person
const createUser=async()=>{
  try {
      const user1=new User({name:"john",age:12,favoriteFoods:["hamburger"]})
      console.log(user1) 
      await user1.save()
      console.log("user added success");
  } catch (error) {
      console.log(error)
  }}

//create many 
  const createMany=async()=>{
  try {
    const user1=  await User.insertMany([{name:"John",age:12,favoriteFoods:["burritos"]},{name:"Ahmed",age:12,favoriteFoods:["burritos"]},{name:"John",age:12,favoriteFoods:["hamburger"]},{name:"ali",age:15,favoriteFoods:[,"burritos"]},{name:"Mary",age:15,favoriteFoods:["pizza","burritos"]}])
    console.log(user1) 
  
    console.log("user added success");
} catch (error) {
    console.log(error)
}}

//find user
const findUser=async()=>{
  try {
    const user2=  await User.find()
    console.log(user2) 
  
    console.log("find succes");
} catch (error) {
    console.log(error)
}}

//find one user
const findOneUser=async()=>{
  try {
    const user2=  await User.findOne({name:"John"})
    console.log(user2) 
  
    console.log("find succes");
} catch (error) {
    console.log(error)
}}

//find by id
const findbyid=async()=>{
  try {
    const user2=  await User.findById({_id:'63db9539c5a3102d767ddea3'})
    console.log(user2) 
  
    console.log("find succes");
} catch (error) {
    console.log(error)
}}

//find and edit
const findEdit=async()=>{
  try {
    const user2=  await User.findOne({_id:'63db9539c5a3102d767ddea3'})
    console.log(user2) 
     user2.favoriteFoods.push("hamburger")
  await user2.save()
    console.log("edit succes");
} catch (error) {
    console.log(error)
}}

//findOneAndUpdate
const findOneAndUpdate=async()=>{
  try {
    const user2=  await User.findByIdAndUpdate('63db9539c5a3102d767ddea3', { name: 'jason bourne' })
    console.log(user2) 
     await user2.save()
    console.log("update succes");
} catch (error) {
    console.log(error)
}}

//findByIdAndRemove
const findByIdAndRemove=async()=>{
  try {
    const user2=  await User.findByIdAndRemove('63db9539c5a3102d767ddea3')
    console.log(user2) 
     
    console.log("remove succes");
} catch (error) {
    console.log(error)
}}

//Delete Many
const DeleteMany=async()=>{
  try {
    const user2=  await User.deleteMany({name:"John"}) 
      console.log(user2) 
      console.log("delete many succes");
} catch (error) {
    console.log(error)
}}

//Find people who like burritos
const  findBurritos=async()=>{
  try {
    const user2=  await User.find({favoriteFoods:"burritos"})
    .sort({ name: 1}).limit(2).select('-age')
    
    .exec((err, user2) => {
      if (err) 
      return handleError(err);
      console.log(user2);
    });
     console.log("find people who like burritos succes")
  } 
     catch (error) {
    console.log(error)
}}

connectDb()
findBurritos()
//DeleteMany()
//findByIdAndRemove()
//findOneAndUpdate()
//findEdit()
//findbyid()
//findOneUser()
//findUser()
//createUser()
//createMany()
app.listen(port, () => 
console.log(`app listening on port ${port}!`))