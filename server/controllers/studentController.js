const factory = require("../controllers/factoryController");
const Student = require("../models/StudentModel");

exports.getAllStudents = factory.getAll(Student);

exports.getStudent = factory.getOne(
  Student,
  {
    path: "teacher",
    select: "name",
  },
  {
    path: "class",
    select: "className",
  }
);

exports.createStudent = factory.createOne(Student);
exports.updateStudent = factory.updateOne(Student);
exports.deleteStudent = factory.deleteOne(Student);
