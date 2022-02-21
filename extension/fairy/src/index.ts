import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the fairy_test extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'fairy_test:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension fairy_test is activated!');
  }
};

export default plugin;
