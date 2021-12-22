// factory function because We need to create multiple players
const Player = (name, letter) => {
  const get_name = () => name;
  const get_letter = () => letter;

  return { get_name, get_letter}
}

// this is a module, since we only need one gameboard
const gameboard = (() => {

  let boxes = document.querySelectorAll(".grid-item");
  // let turn_counter = 0;
  let board_array = [];

  boxes.forEach((box) => {
    box.style.display = 'flex';
  });


  // boxes.forEach((div)=> {
  //   div.addEventListener('click', function () {
  //     click_cell(div);

  //   })
  // })
  const get_element = (id) => {
    if (0 <= id && id < 9){
      return board_array[id]
    }else{
      console.log(`trying to check an ID: ${id} outside of the boards array`);
    }
  }
  // const play_cell = (cell, player) => {
  //   console.log(`playing cell ${cell}, ${player}`)
  // }

  // const click_cell = (div, letter) => {
  //     //get the array index
  //     let index = parseInt(div.id.charAt(div.id.length-1)-1);
  //     if (get_element(index)) {
  //       console.log("this cell is played");
  //       // return 0
  //       // not played
  //     }else{
  //       console.log("this cell is free");

  //       div.innerHTML = letter;


  //       // return 1
  //       //played
  //       // let current_player = get_player();
  //       // console.log(`currently ${current_player}'s turn `);
  //       // return index;
  //       // let the gameplay object know who was clicked 

  //     }

  // }
  // const get_player = () => {
  //   return playGame().get_player();
  // }
  // const play_cell = (index, letter) => {

  // }

  return {get_element} 

});


// game flow object module cause I only want one
const playGame = (() => {  
  // player1 = players[0];
  // player2 = players[1];
  const board = gameboard();

  let boxes = document.querySelectorAll(".grid-item");

  //add listeners
  boxes.forEach((div)=> {
    div.addEventListener('click', function () {
      let played_bool = click_cell(div, get_player().get_letter());
      // if played_bool {
      //   console.log('played');
      // }

    })
  })
  // const click_cell = () => {
  //   console.log('clicked')
  // }

  const click_cell = (div, letter) => {
    let index = parseInt(div.id.charAt(div.id.length-1)-1);
    if (board.get_element(index)) {
      console.log("this cell is played");
      // return 0
      // not played
    }else{
      console.log("this cell is free");

      div.innerHTML = letter;
    }
  }



  const set_players = () => {
    let player1_name = prompt("please enter your name", "Player1");
    let player1 = Player(player1_name, 'X')
    let player2_name = prompt("please enter your name", "Player2");
    let player2 = Player(player2_name, 'O')
    let p1_id = document.getElementById('player1');
    p1_id.innerHTML = `${player1_name} - your letter: "X"`;
    let p2_id = document.getElementById('player2');
    p2_id.innerHTML = `${player2_name} - your letter: "O"`;
    vs = document.getElementById("vs");
    vs.innerHTML = "VS"
    return [player1, player2]
  }

  const set_turn = (player, turn_count) => {
    let turn_display = document.getElementById('turn-counter');
    let name = player.get_name();
    turn_display.innerHTML = `Turn: ${turn_count}, ${name}'s Turn`;
  }

  let turn_count = 0;

  let players = set_players();
  player1 = players[0];
  player2 = players[1];

  let current_player = player1;


  const get_turn_count = () => turn_count;

  const get_player = () => current_player

  set_turn(get_player(), get_turn_count());

});

