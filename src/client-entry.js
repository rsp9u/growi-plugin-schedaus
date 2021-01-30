import axios from 'axios';
import Cookies from 'js-cookie';
import SchedausPreProcessor from './client/js/util/PreProcessor/SchedausPreProcessor';
import SchedausYamlPreProcessor from './client/js/util/PreProcessor/SchedausYamlPreProcessor';

export default (appContainer) => {
  // add preprocessor to head of array
  appContainer.originRenderer.preProcessors.unshift(new SchedausPreProcessor(appContainer));
  appContainer.originRenderer.preProcessors.unshift(new SchedausYamlPreProcessor(appContainer));
  // fetch server uri
  axios.get('/_api/plugin/schedaus/config').then((res) => {
    // console.log(`registering to cookie..`);
    Cookies.set('schedaus_uri', res.data.uri);
    // console.log(`registered ${res.data.uri}.`);
  });
};
