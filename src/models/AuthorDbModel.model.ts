import { JSONSchema, Model } from 'objection';
import PostDbModel from './PostDbModel.model';

export default class AuthorDbModel extends Model {
  id!: number;
  name!: string;
  email?: string;
  created_at?: Date;
  updated_at?: Date;

  // relationships
  post?: PostDbModel[];

  static tableName = 'authors';

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        email: { type: 'string' },
        created_at: { type: 'date' },
        updated_at: { type: 'date' },
      },
    };
  }

  static get realtionMappings() {
    return {
      posts: {
        relation: Model.HasOneRelation,
        modelClass: PostDbModel,
        join: {
          from: 'authors.id',
          to: 'post.authors_id',
        },
      },
    };
  }
}
