import {  Types } from "mongoose";  

// User type definition
export interface TUser {  
  _id: Types.ObjectId; // MongoDB generated ID  
  name: string;  
  email: string;  
  password: string;  
  phone: string;  
  photo?: string;  
  needsPasswordChange: boolean;  
  passwordChangeAt?: Date;  
  role: 'ADMIN' | 'CUSTOMER';  
  status: 'ACTIVE' | 'BLOCKED';  
  isDeleted: boolean;  
}  

// Type for creating a new user (signup case)
export type NewUser = {  
  password: string;  
  role: string;  
};  


