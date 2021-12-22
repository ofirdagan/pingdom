import fs from 'fs';

export const log = (message: string, e?: Error) => {
  message = `${new Date().toLocaleString()}: ${message}`;
  console.log(message);
  fs.appendFileSync('pingdom.log', `${message}. ${e? e?.stack: ''}\n`);
};