import { Model } from 'objection';

export default class ResetPasswordDbModel extends Model {
  id!: number;
  email!: string;
  created_at?: Date;

  static tableName = 'reset_password';

  static jsonSchema = {
    type: 'object',
    required: ['email'],

    properties: {
      id: { type: 'integer' },
      email: { type: 'string' },
      created_at: { type: 'date' },
    },
  };
}
