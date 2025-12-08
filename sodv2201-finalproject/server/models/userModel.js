import { poolPromise } from "../config/db.js";
import sql from "mssql";

export async function createUser(user){
    const pool = await poolPromise;
    try{
        const result = await pool
        .request()
        .input('firstName', sql.VarChar(50), user.firstName)
        .input('lastName', sql.VarChar(50), user.lastName)
        .input('email', sql.VarChar(100), user.email)
        .input('phone', sql.VarChar(20), user.phone)
        .input('birthday', sql.Date, user.birthday)
        .input('department', sql.VarChar(50), user.department || 'SD')
        .input('program', sql.VarChar(50), user.program)
        .input('username', sql.VarChar(50), user.username)
        .input('passwordHash', sql.VarChar(255), user.password)//to implement later so i cant see password in postman mkae it hashed
        .query(`INSERT INTO USERS (first_Name, last_Name, email, phone, birthday, department, program, username, password_Hash) 
            VALUES (@firstName, @lastName, @email, @phone, @birthday, @department, @program, @username, @passsword, )`);
    
        return result.rowsAffected[0];
    } catch(error){
        if(error.number === 2627){
            throw new Error("User with this username or email already exists");
        }
        throw new Error("Failed to create user: " + error.message);
    }
}

export async function getAllCourses(){
       const pool = await poolPromise;
    try{
        const result = await pool
        .request()
        .query("SELECT * FROM Courses")
    }catch(error){
        throw new Error("Failed to fetch courses: " + error.message);
    }
}

export async function addCourses(course){
       const pool = await poolPromise;
    try{
        const result = await pool
        .request()
        .input('coursecode', sql.VarChar(20), course.courseCode)
        .input('coursename', sql.VarChar(100), course.name)
        .input('term', sql.VarChar(20), course.term)
        .input('startDate', sql.Date, course.startDate)
        .input('endDate', sql.Date, course.endDate)
        .input('description', sql.Text, course.description)
        .input('credits', sql.Int, course.credits || 3)
        .input('fees', sql.Decimal(10, 2), course.fees || 1500.00)
        .input('maxStudents', sql.Int, course.maxStudents || 30)
        .input('instructor', sql.VarChar(100), course.instructor)
        .input('createdBy', sql.Int, course.createdBy)
        .query(`INSERT INTO Courses (course_code, course_name, program_id, term, start_date, end_date, description, credits, fees, max_students, instructor, created_by) 
            VALUES (@courseCode, @name @programId, @term, @startDate, @endDate, @description, @credits, @fees, @maxStudents, @instructor, @createdBy)`);
        
        return result.recordset[0];
    }catch(error){
        throw new Error("Failed to add courses: " + error.message);
    }
}

export async function deleteCourses(courseId){
       const pool = await poolPromise;
    try{
        const result = await pool
        .request()
        .input('course_id', sql.Int, courseId)
        .query("DELETE FROM Courses WHERE course_id = @courseId")
        return result.rowsAffected[0];
    }catch(error){
        throw new Error("Failed to delete courses: " + error.message);
    }
}

export async function createMessage(message){
    const pool = await poolPromise;
    try{
        const result = await pool
        .request()
        .input('studentId', sql.Int, message.StudentId)

    }catch(error){
        
    }
}