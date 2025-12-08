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
        .query("INSERT INTO USERS (firstName, lastName, email, phone, birthday, department, program, username, password, confirmPassword) VALUES (@firstName, @lastName, @email, @phone, @birthday, @department, @program, @username, @passsword, )")

    } catch(error){

    }
}