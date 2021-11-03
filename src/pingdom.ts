import axios from 'axios';

const THREE_MIN = 1000 * 60 * 3;

export function init(serviceName: string) {
  setInterval(() => {
    axios.get(`https://ofird11.editorx.io/pingdom/_functions/ping/${serviceName}`);
  }, THREE_MIN);
}