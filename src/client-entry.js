import SchedausPreProcessInterceptor from './client/js/util/Interceptor/SchedausPreProcessInterceptor';

export default (appContainer) => {
  // add interceptors
  appContainer.interceptorManager.addInterceptors([
    new SchedausPreProcessInterceptor(),
  ]);
};
