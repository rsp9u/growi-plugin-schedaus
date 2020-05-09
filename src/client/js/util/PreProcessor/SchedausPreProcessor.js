import Cookies from 'js-cookie';
import { Base64 } from 'js-base64';

export class SchedausPreProcessor {
  constructor() {
    this.random_id = Math.random().toString(32).substring(2);
  }

  process(markdown) {
    //console.log('processing schedaus gantt chart..');
    const regexp = /(^@startgantt(.|[\r\n])*?@endgantt$)/gm;
    var count = 0;
    return markdown.replace(regexp, (match) => {
      const content = match.replace(/^@(start|end)gantt.*$/gm, '');
      const b64content = Base64.encodeURI(content);
      const server = Cookies.get('schedaus_uri');
      if (server === undefined) {
        return "Please set 'SCHEDAUS_URI' environment variable to the Growi app server";
      } else {
        const client_id = `${this.random_id}+${count}`;
        const url = `${server}/sch/svg/${b64content}?client_id=${client_id}`;
        count += 1;
        return `![gantt-chart](${url})`;
      }
    });
  }

}
