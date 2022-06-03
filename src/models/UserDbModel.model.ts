import { Model } from 'objection';

export default class UserDbModel extends Model {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  role!: string;
  created_at?: Date;
  updated_at?: Date;

  static tableName = 'users';

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email', 'password'],

      properties: {
        id: { type: 'integer' },
        email: { type: 'string' },
        name: { type: 'string' },
        role: { type: 'string' },
        password: { type: 'string' },
      },
    };
  }
}
