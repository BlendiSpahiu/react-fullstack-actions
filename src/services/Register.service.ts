// models
import UserDbModel from '../models/UserDbModel.model';

// interfaces
import { StatusCodeEnums } from '../interfaces/enums';

// utils
import { failure, ok, hashPassword, generateJWT } from '../utils';
import { UserRoleEnums } from '../interfaces/enums/UserRoleEnums.enum';

export const RegisterService = {
  register: async (data: UserDbModel) => {
    const { email, password, name } = data;

    // Check if user with this email exists
    const user = await UserDbModel.query().findOne({ email });

    if (user)
      return failure('This user already exists!', StatusCodeEnums.USER_EXISTS);

    // insert user
    let insertUser: UserDbModel;

    try {
      insertUser = await UserDbModel.query().insert({
        name,
        email,
        password: await hashPassword(password),
        role: UserRoleEnums.USER,
      });
    } catch (error) {
      return failure({ 'Something went wrong': error });
    }

    return ok({ token: generateJWT(insertUser) });
  },
};
