export class SchedausPreProcessor {
  process(markdown) {
    const regexp = /(^@startgantt(.|[\r\n])*?@endgantt$)/gm;
    return markdown.replace(regexp, this.replaceToSchedaus);
  }

  replaceToSchedaus(match) {
    const content = match.replace(/^@(start|end)gantt$/gm, '');
    console.log(content)
    const b64content = btoa(content);
    const url = `http://192.168.63.9:5000/sch/svg/${b64content}`;
    console.log(url);
    return `![gantt-chart](${url})`;
  }

}
