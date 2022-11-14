import React from 'react';
import { I18nextProvider } from 'react-i18next';

import Navigator from './navigator';
import i18n from './i18n';

/*
 Add global context to store variables between screens
*/
const App = () => (
<I18nextProvider i18n={i18n}>
  <Navigator/>
  </I18nextProvider>
);

export default App;
