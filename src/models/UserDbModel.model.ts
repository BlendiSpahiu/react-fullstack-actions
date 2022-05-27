import { JSONSchema, Model } from 'objection';

export default class UserDbModel extends Model {
  id!: number;
  email!: string;
  password!: string;
  created_at?: Date;
  updated_at?: Date;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email, password'],

      properties: {
        id: { type: 'integer' },
        email: { type: 'string' },
        password: { type: 'string' },
        created_at: { type: 'date' },
        updated_at: { type: 'date' },
      },
    };
  }
}
