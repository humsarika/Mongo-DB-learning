const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/testDatabase")
.then(() => console.log("Connected to MongoDB...success"))
.catch(err => console.error("Could not connect to MongoDB...failure", err));


// Schema
const courseSchema = new mongoose.Schema({
    name: String,
    creator : String,
    publishedDate: { type: Date, default: Date.now },
    isPublished: Boolean,
    rating : Number
})

// Model
const Course = mongoose.model('Course', courseSchema)


async function createCourse(){
    const course = new Course({
        name : 'Java',
        creator : 'Samiksha' ,
        isPublished : true,
        rating : 3.7
    })
    
    const result = await course.save()
    console.log(result )
    console.log("Course added successfully")
}

// comparison query operator

async function getCourses(){
    const q1 = await Course.find({rating : 4.5}) // gives courses which are having 4.5 rating
    // const q2 = await Course.find({rating : {$lte:4}}).select({name:1,rating:1}) // gives courses which are having rating 4 and less
    // const q3 = await Course.find({rating : {$lte:4}}).select({name:1,rating:1}).sort({rating:-1}) // gives courses which are having rating 4 and less , sorted in descending order
    // const q4 = await Course.find({rating : {$gte:4}}).select({name:1,rating:1}) // gives courses which are having rating 4 or more
    // const q5 = await Course.find({rating : {$in : [4.5,4.2]}}).select({name:1,rating:1}) // gives courses which are having 4.5 rating and 4.2

    // const q6 = await Course.find({creator : 'Sarika'}).select({name:1,publishedDate:1})

    // .sort({name:1})  and .sort({name:-1}) // 1 for ascending -1 for descending
    console.log(q1)
    // console.log(q2)
    // console.log(q3)
    // console.log(q4)
    // console.log(q5)
    // console.log(q6)
}

// createCourse()
getCourses()










