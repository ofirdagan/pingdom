import axios from 'axios';

const THREE_MIN = 1000 * 60 * 3;

export function monitor(serviceName: string, apiKey: string) {
  reportAlive(serviceName, apiKey);
  setInterval(() => reportAlive(serviceName, apiKey), THREE_MIN);
}

function reportAlive(serviceName: string, apiKey: string) {
  axios.get(`https://ofird11.editorx.io/pingdom/_functions/ping/${serviceName}`, {headers: {'x-api-key': apiKey}});
}