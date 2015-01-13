import Reapp from 'reapp-platform';
import Run from 'reapp-routes/react-router/run';
import Routes from './routes';

// theme
require('./theme/theme');

// allow touches
Reapp.initTouch();

// run app
if (Reapp.Env.CLIENT)
  Run.renderAsync(Routes);
else
  Run.renderSync(Routes);