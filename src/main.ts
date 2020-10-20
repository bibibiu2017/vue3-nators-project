//@ts-nocheck
import {createApp} from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

const app = createApp(App);
app.use(store);
app.use(router);

//Global component registration
const requireComponent = require.context(
  // The relative path of the components folder
  './components',
  // Whether or not to look in subfolders
  true,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|ts)$/,
);

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName);

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, ''),
    ),
  );

  // Register component globally
  app.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig,
  );
});

app.mount('#app');
