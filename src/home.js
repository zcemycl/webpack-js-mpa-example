import './about'
import { add } from './alpha/alpha_ext'
import { View } from './index.view'
import { Controller } from './index.control'
import { Model } from './index.model' 


console.log('this is the index page...');
console.log(add(3,4));

const app = new Controller( new Model(), new View() );