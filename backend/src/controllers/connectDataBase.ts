import * as dotenv from 'dotenv';
import * as process from 'process';

const mongoose = require('mongoose');  /* eslint-disable-line */

export const SUCCEED = 1;
export const FAILED = -1;

export async function connectDataBase() {
  dotenv.config();
  const userName = process.env.dbUser;
  const password = process.env.dbPassword;
  const cluster = process.env.dbCluster;
  const uri = `mongodb+srv://${userName}:${password}@${cluster}/Guardos?retryWrites=true&w=majority`;

  try {
    console.log('Connecting to database...');
    mongoose.set('strictQuery', false);
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    mongoose.connection.once('open', async () => {
      console.log('Connected to Database');
      return SUCCEED;
    });
  } catch (e) {
    console.error(e);
    return FAILED;
  }
  return SUCCEED;
}
