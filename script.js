
const Player = (name, letter) => {
  // console.log(`making a sick playa ${name}`);
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
  const board = gameboard();
  let players = setPlayers();
  player1 = players[0];
  player2 = players[1];
  console.log(player1.getLetter);

  board.output;
}

function setPlayers(){
  let player1_name = prompt("please enter your name", "Player1");
  let player1 = Player(player1_name, 'X')
  let player2_name = prompt("please enter your name", "Player2");
  let player2 = Player(player2_name, 'O')
  let p1_id = document.getElementById('player1');
  p1_id.innerHTML = player1_name;
  let p2_id = document.getElementById('player2');
  p2_id.innerHTML = player2_name;
  vs = document.getElementById("vs");
  vs.innerHTML = "VS"
  return [player1, player2]

}

const grid1 = document.getElementById("grid-1");
grid1.addEventListener("click", function(event){
  console.log('click grid 1');
})

