const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/testDatabase")
.then(() => console.log("Connected to MongoDB...success"))
.catch(err => console.error("Could not connect to MongoDB...failure", err));


// Schema
const courseSchema = new mongoose.Schema({
    name: String,
    creator : String,
    publishedDate: { type: Date, default: Date.now },
    isPublished: Boolean
})

// Model
const Course = mongoose.model('Course', courseSchema)


async function createCourse(){
    const course = new Course({
        name : 'javascript',
        creator : 'Sneha' ,
        isPublished : true,
    })
    
    const result = await course.save()
    // console.log(result)
}

async function getCourses(){
    // const courses = await Course.find({creator : 'Sarika'})
    // const courses = await Course.find({creator : 'Sarika'}).select({name:1,publishedDate:1})
    // const courses = await Course.find({creator : 'Sarika'}).select({name:1,publishedDate:1})

    // .sort({name:1})  and .sort({name:-1}) // 1 for ascending -1 for descending

    console.log(courses)
}

createCourse()
getCourses()










