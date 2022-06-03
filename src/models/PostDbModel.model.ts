import { Model } from 'objection';
import AuthorDbModel from './AuthorDbModel.model';

export default class PostDbModel extends Model {
  id!: number;
  title!: string;
  content!: string;
  created_at?: Date;
  updated_at?: Date;

  // relationships
  author?: AuthorDbModel;

  static tableName = 'posts';

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title, content'],

      properties: {
        id: { type: 'integer' },
        title: { type: 'string' },
        content: { type: 'string' },
        created_at: { type: 'date' },
        updated_at: { type: 'date' },
      },
    };
  }

  static get relationMappings() {
    return {
      author: {
        relation: Model.HasManyRelation,
        modelClass: PostDbModel,
        join: {
          from: 'post.id',
          to: 'authors.post_id',
        },
      },
    };
  }
}
