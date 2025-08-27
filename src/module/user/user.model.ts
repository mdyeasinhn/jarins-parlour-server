import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from 'bcrypt'
import config from "../../config";
const userSchema = new Schema <TUser>({
   
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: 0,
    },
    phone: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
    },
    needsPasswordChange: {
        type: Boolean,
        default: true,
    },
    passwordChangeAt: {
        type: Date,
    },
    role: {
        type: String,
        enum: ['customer', 'admin'],
        default: "customer"
    },
    status: {
        type: String,
        enum: ['active', 'blocked'],
        default: 'active',
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
},
    {
        timestamps: true,
    },
);
// Before saving user data into the database, run this middleware
userSchema.pre('save', async function (next) {
  // 'this' refers to the current user object being saved
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;    

  // If the password field is newly created or updated, hash it
  if (user.isModified('password')) {
    // Hash the password using bcrypt 
    user.password = await bcrypt.hash(
      user.password, 
      Number(config.bcrypt_salt_rounds) 
    );
  }

  // Move to the next step (continue saving)
  next();
});


// After the user is saved in the database, run this middleware
userSchema.post('save', function (doc, next) {
  // For security reasons, remove the password from the response object
  doc.password = '';

  // Move to the next step 
  next();
});


const User = model("User", userSchema)
export default User

