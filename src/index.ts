import * as _ from 'lodash';;
import { fizzBuzz } from './fizzBuzz';

function drawCanvas() {
  const canvas = document.querySelector('#game-canvas')! as HTMLCanvasElement;
  console.log('Canvas with height', canvas.width, canvas.height);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'darkblue';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, 150, 100);
}

drawCanvas();
