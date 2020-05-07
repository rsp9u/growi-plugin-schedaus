import { BasicInterceptor } from 'growi-commons';

export default class SchedausPreProcessInterceptor extends BasicInterceptor {

  isInterceptWhen(contextName) {
    return contextName === 'prePreProcess';
  }

  isProcessableParallel() {
    return false;
  }

  async process(contextName, ...args) {
    const context = Object.assign(args[0]); // clone
    const regexp = /(^@startgantt(.|[\r\n])*?@endgantt$)/gm;
    context.markdown = context.markdown.replace(regexp, this.replaceToSchedaus);

    return Promise.resolve(context);
  }

  replaceToSchedaus(match, p1, p2) {
    const b64content = btoa(p2);
    const url = `http://10.90.70.183:51603/sch/svg/${b64content}`;
    return `![gantt-chart](${url})`;
  }

}
