import { ComponentInternalInstance, getCurrentInstance } from 'vue';
// setup中获取globalProperties挂载的实例
export default function useCurrentInstance() {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance;
  const globalProperties = appContext.config.globalProperties;
  return {
    globalProperties
  };
}
