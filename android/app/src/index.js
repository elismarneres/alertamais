import screens from '../../src/screens';
//import Page2 from './Page2';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Home: screens,
    //About: Page2,
  })
);

export default Routes;