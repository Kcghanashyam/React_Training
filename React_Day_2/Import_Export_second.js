import {exported} from './Import_Export_first.js'
console.log("export value:",exported);

import getMessage from './Import_Export_first.js';
const res = getMessage();
console.log(res);