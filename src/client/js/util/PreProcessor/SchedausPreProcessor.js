import Cookies from 'js-cookie';
import { Base64 } from 'js-base64';

export class SchedausPreProcessor {
  process(markdown) {
    //console.log('processing schedaus gantt chart..');
    const regexp = /(^@startgantt(.|[\r\n])*?@endgantt$)/gm;
    return markdown.replace(regexp, this.replaceToSchedaus);
  }

  replaceToSchedaus(match) {
    const content = match.replace(/^@(start|end)gantt.*$/gm, '');
    const b64content = Base64.encodeURI(content);
    const server = Cookies.get('schedaus_uri');
    if (server === undefined) {
      return "Please set 'SCHEDAUS_URI'";
    } else {
      const url = `${server}/sch/svg/${b64content}`;
      return `![gantt-chart](${url})`;
    }
  }

}
