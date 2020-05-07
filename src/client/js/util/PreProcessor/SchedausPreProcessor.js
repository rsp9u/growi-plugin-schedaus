export class SchedausPreProcessor {
  process(markdown) {
    const regexp = /(^@startgantt(.|[\r\n])*?@endgantt$)/gm;
    return markdown.replace(regexp, this.replaceToSchedaus);
  }

  replaceToSchedaus(match) {
    const content = match.replace(/^@(start|end)gantt.*$/gm, '');
    const server = match.match(/^@startgantt:(.*)$/m)[1];
    const b64content = btoa(content);
    const url = `http://${server}/sch/svg/${b64content}`;
    return `![gantt-chart](${url})`;
  }

}
