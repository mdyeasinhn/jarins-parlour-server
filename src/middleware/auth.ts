import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import catchAsync from '../utils/catchAsync';
import config from '../config';
import User from '../module/user/user.model';

const auth = (...requiredRoles: string[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    // checking if the token is missing
    if (!token) {
      throw new Error( 'You are not authorized!');
    }

    // checking if the given token is valid
    const decoded = jwt.verify(
      token,
    config.jwt_access_secret as string,
    ) as JwtPayload;


    const { role, email} = decoded;

    // checking if the user is exist
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('This user is not found !')
  }


    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new Error(
        'You are not authorized',
      );
    }

    req.user = user
    next();
  });
};

export default auth;