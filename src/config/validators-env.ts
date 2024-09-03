import * as joi from 'joi';

export const ValidatorEnv = joi.object({
  PORT: joi.number().default(3000),
});
