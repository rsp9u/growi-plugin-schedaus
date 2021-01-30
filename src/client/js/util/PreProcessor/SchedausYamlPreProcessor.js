import Cookies from 'js-cookie';
import { Base64 } from 'js-base64';

export default class SchedausYamlPreProcessor {

  constructor() {
    this.random_id = Math.random().toString(32).substring(2);
  }

  process(markdown) {
    let count = 0;

    // console.log('processing yaml gantt chart..');
    const regexp = /(^@startgantt-yaml(.|[\r\n])*?@endgantt-yaml$)/gm;
    return markdown.replace(regexp, (match) => {
      const server = Cookies.get('schedaus_uri');
      if (server === undefined) {
        return "Please set 'SCHEDAUS_URI' environment variable to the Growi app server";
      }
      const content = match.replace(/^@(start|end)gantt-yaml.*$/gm, '');
      const b64content = Base64.encodeURI(content);
      const clientId = `${this.random_id}+${count}`;
      const url = `${server}/yaml/svg/${b64content}?client_id=${clientId}`;
      count += 1;
      return `![gantt-chart](${url})`;
    });
  }

}
