import * as _ from 'lodash';;
import { fizzBuzz } from './fizzBuzz';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.classList.add('hello');
    // btn.onclick = printMe;

    return element;
}

document.body.appendChild(component())
console.log('Hello World!!');
console.log(fizzBuzz(5))
