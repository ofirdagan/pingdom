import axios from 'axios';
import axiosRetry from 'axios-retry';
import {log} from './services/logger';
axiosRetry(axios, { retryDelay: (retryCount) => retryCount * 300 });
const THREE_MIN = 1000 * 60 * 3;

export function monitor(serviceName: string, apiKey: string) {
  reportAlive(serviceName, apiKey);
  setInterval(() => reportAlive(serviceName, apiKey), THREE_MIN);
}

async function reportAlive(serviceName: string, apiKey: string) {
  try {
    await axios.get(`https://ofird11.editorx.io/pingdom/_functions/ping/${serviceName}`, {headers: {'x-api-key': apiKey}});
  } catch (e) {
    log('exception in reporting ping', e);
  }
}
