import axios from 'axios';

const THREE_MIN = 1000 * 60 * 3;

export function monitor(serviceName: string) {
  reportAlive(serviceName);
  setInterval(() => reportAlive(serviceName), THREE_MIN);
}

function reportAlive(serviceName: string) {
  axios.get(`https://ofird11.editorx.io/pingdom/_functions/ping/${serviceName}`);
}