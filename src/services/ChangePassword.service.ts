// models
import UserDbModel from '../models/UserDbModel.model';

// interfaces
import { StatusCodeEnums } from '../interfaces/enums';
import { ChangePasswordModel } from '../interfaces/models/ChangePassword.model';

// utils
import { failure, ok, comparePassword, hashPassword } from '../utils';

export const ChangePasswordService = {
  changePassword: async (data: ChangePasswordModel) => {
    const { password, userId } = data;

    // check if userId is null
    if (!userId) {
      return failure(
        'Invalid Credentials',
        StatusCodeEnums.INVALID_CREDENTIALS
      );
    }

    let user: UserDbModel | null = null;

    try {
      // Check if user with this email exists
      if (userId) {
        user = (await UserDbModel.query().findOne({ id: userId })) || null;
      }

      if (!user)
        return failure(
          'Invalid Credentials',
          StatusCodeEnums.INVALID_CREDENTIALS
        );

      const isSamePassword = await comparePassword(password, user.password);

      if (isSamePassword) {
        return failure(
          'Password should not be the same as the old one!',
          StatusCodeEnums.INVALID_CREDENTIALS
        );
      }

      /**
       * Updates the old password
       */
      if (!isSamePassword) {
        await UserDbModel.query()
          .findById(user.id)
          .patch({ password: await hashPassword(password) });
      }
    } catch (error) {
      return failure({ 'Something went wrong': error });
    }

    return ok({});
  },
};
