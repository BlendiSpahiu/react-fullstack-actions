// models
import UserDbModel from '../models/UserDbModel.model';

// interfaces
import { AuthenticationModel } from '../interfaces/models/Authentication.model';
import { StatusCodeEnums } from '../interfaces/enums';

// utils
import { failure, ok, generateJWT, comparePassword } from '../utils';

export const LoginService = {
  login: async (data: Pick<AuthenticationModel, 'email' | 'password'>) => {
    const { email, password } = data;

    // Check if user with this email exists
    const user = await UserDbModel.query().findOne({ email });

    if (!user)
      return failure(
        "This email doesn't exist!",
        StatusCodeEnums.INVALID_CREDENTIALS
      );

    /**
     * Compares hashed password with the one from input
     */
    const passwordIsValid = await comparePassword(password, user.password);

    if (!passwordIsValid)
      return failure(
        'Invalid Credentials',
        StatusCodeEnums.INVALID_CREDENTIALS
      );

    return ok({ token: generateJWT(user) });
  },
};
