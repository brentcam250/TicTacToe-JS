
const Player = (name, letter) => {
  console.log(`making a sick playa ${name}`);
  const getName = () => name;
  const getLetter = () => letter;
  return { getName, getLetter}
}

const gameboard = (() => {
  // let gameboard = [];
  // let gridElement = document.getElementById('grid');
  let testElement = 'testing';

  const output = () => console.log(testElement);
  // this.init = () =>{
  //   // let turn_counter = 0;
  //   for (i = 0; i < 9 i ++){
  //     let cell = document.createElement('div');
  //     cell.id = `grid-${i}`;
  //     gameboard.push(cell);
  //     gridElement.appendChild(cell);
  //   }
  // }
  return {output}

})

function startGame(){
  console.log("hello I hear you ");
  const board = gameboard();
  const testPlayer = Player("BC", "X");
  console.log(testPlayer.getLetter);
  console.log(testPlayer.getName);

  // const player1 = PlayerFactory("Brent", "X");
  // console.log(player1.getLetter);
  board.output;
}