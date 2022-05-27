export const DB_HOSTNAME = process.env.DB_HOSTNAME || '';
export const DB_PORT = process.env.DB_PORT || '';
export const DB_USERNAME = process.env.DB_USERNAME || '';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_DIALECT = process.env.DB_DIALECT || '';
export const DB_NAME = process.env.DB_NAME || '';

const connectionString = `${DB_DIALECT}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`;

export const knexConfig = {
  client: 'pg',
  connection: encodeURI(connectionString),
  pool: {
    min: 0,
    max: 95,
  },
};
