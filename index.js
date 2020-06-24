import * as React from 'react';
import {AppRegistry} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import App from './src/App';

import PassegerRegistartion from './src/screens/passengerRegistration';
import UserProfile from './src/screens/userProfile';
import EditDetails from './src/screens/editDetails';
import ChangePassword from './src/screens/changePassword'

const theme = {
  ...DefaultTheme,
  dark: true,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    roundness: 10,
    primary: '#222831',
    accent: '#393e46',
    background: '#393e46',
    surface: '#393e46',
    text: '#393e46',
    disabled: '#393e46',
    placeholder: '#393e46',
    backdrop: '#393e46',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      {/* <App /> */}
      <ChangePassword />

    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => ChangePassword);
