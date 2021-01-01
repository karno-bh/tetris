import {Game} from './game';

function main() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const canvas = document.querySelector('#game-canvas')! as HTMLCanvasElement;
  console.log('Canvas with height', canvas.width, canvas.height);
  const game = new Game(canvas);
  game.draw();
}

main();
