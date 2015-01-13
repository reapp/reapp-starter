import UI from 'reapp-ui';
import iOS from 'reapp-ui/themes/ios';

// use the ios base stylesheet
import 'reapp-ui/themes/ios/stylesheets';

UI.addConstants(
  // our constants, then ios constants
  iOS.constants.base,
  require('./constants/base'),

  // ios component styles, then ours
  iOS.constants.components,
  require('./constants/components')
);

// ios styles, then ours
UI.addStyles(
  iOS.styles,
  require('./styles')
);

// ios animations
UI.addAnimations(
  iOS.animations
);