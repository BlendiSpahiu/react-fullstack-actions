export const { MAIL_DRIVER, MAIL_USERNAME, MAIL_PASSWORD } = process.env;
export const MAIL_HOST = process.env.MAIL_HOST || '';
export const MAIL_PORT = process.env.MAIL_PORT || 1025;
export const MAIL_FROM_NAME = process.env.MAIL_FROM_NAME || '';
export const MAIL_FROM_ADDRESS = process.env.MAIL_FROM_ADDRESS || '';

export const smtpConfig = {
  host: MAIL_HOST,
  port: +MAIL_PORT,
  ...(MAIL_USERNAME && {
    auth: {
      user: MAIL_USERNAME,
      pass: MAIL_PASSWORD,
    },
  }),
};
