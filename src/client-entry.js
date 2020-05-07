import { SchedausPreProcessor } from './client/js/util/PreProcessor/SchedausPreProcessor';

export default (appContainer) => {
 // add preprocessor to head of array
  appContainer.originRenderer.preProcessors.unshift(new SchedausPreProcessor());
};
