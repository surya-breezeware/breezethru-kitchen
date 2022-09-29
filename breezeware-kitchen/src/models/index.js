// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Test, Snacks } = initSchema(schema);

export {
  Test,
  Snacks
};