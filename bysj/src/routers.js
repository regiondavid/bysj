import Humidity from './containers/Humidity.js';
import Temperature from './containers/Temperature.js';
import Gas from './containers/Gas.js';
import Home from './containers/Home.js';

const Routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/humidity',
    component: Humidity
  },
  {
    path: '/temperature',
    component: Temperature
  },
  {
    path: '/gas',
    component: Gas
  }
];

export default Routes;
