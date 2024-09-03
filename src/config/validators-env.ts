import * as joi from 'joi';

export const ValidatorEnv = joi.object({
  PORT: joi.number().default(3000),
  API_CLIENT: joi.string().required(),
  API_PORTFOLIO: joi.string().required(),
});
