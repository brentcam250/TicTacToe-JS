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
  let board_array = [0,0,0,0,0,0,0,0];

  // display the grid now
  boxes.forEach((box) => {
    box.style.display = 'flex';
    box.innerHTML = '';
    let button = document.getElementById('game-button');
    button.innerHTML = 'Restart Game'
  });


  const get_element = (id) => {
    if (0 <= id && id < 9){
      return board_array[id]
    }else{
      console.log(`trying to check an ID: ${id} outside of the boards array`);
    }
  }

  const set_element = (div, letter, index) => {
    board_array[index] = letter;
    div.innerHTML = letter;

  }

  // winning combos: 
  // horz:012, 345, 678
  // vert:036, 147, 258
  // angle:048, 642
  const check_winner = () => {
    // console.log([get_element(0), get_element(1), get_element(2)].join(''))
    let winning_combos = [ 
      [get_element(0), get_element(1), get_element(2)].join(''), 
      [get_element(3), get_element(4), get_element(5)].join(''), 
      [get_element(6), get_element(7), get_element(8)].join(''),
      [get_element(0), get_element(3), get_element(6)].join(''), 
      [get_element(1), get_element(4), get_element(7)].join(''), 
      [get_element(2), get_element(5), get_element(8)].join(''),
      [get_element(0), get_element(4), get_element(8)].join(''), 
      [get_element(6), get_element(4), get_element(2)].join('')
    ];

    // console.log("just letting you know im checkin");
    //check all combos for a winner
    let output = 0;
    winning_combos.forEach(combo => {
      console.log(`checking ${combo}`);
      if (combo.localeCompare('XXX') == 0){
        // window.alert(`WINNER! ${combo}`)
        console.log("Winner player1 ")

        // return 1;
        output = 1;
      }else if (combo.localeCompare('OOO') == 0){
        // window.alert(`WINNER! ${combo}`)
        console.log("Winner player2 ")

        output = 2;
      }
    })
    return output;
    // console.log(winning_combos);

  }

  return {get_element, check_winner, set_element} 

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
      click_cell(div, get_player().get_letter());

    })
  })


  const click_cell = (div, letter) => {
    if (board.check_winner()){
      return 
    }else {
      let index = parseInt(div.id.charAt(div.id.length-1)-1);
      if (board.get_element(index)) {
        console.log("this cell is played");
        // return 0
        // not played
      }else{
        console.log("this cell is free");
  
        board.set_element(div, letter, index)
        let winner_bool = board.check_winner();
        console.log(`winner bool ${winner_bool}`)
        if (winner_bool) {
          // if winner_bool == 1 {
            // window.alert(`WINNER! ${letter}`)
            console.log('winna')
          // }
        }
        increment_turn();
      }
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

  const increment_turn = () => {
    if (turn_count > 8 ){
      window.alert("game ova ");
    }
    turn_count++;
    current_player = turn_count %2;
    set_turn(get_player(), get_turn_count());
  }

  let turn_count = 0;

  let players = set_players();
  player1 = players[0];
  player2 = players[1];

  let current_player = turn_count % 2;



  const get_turn_count = () => turn_count;

  const get_player = () => players[current_player];

  set_turn(get_player(), get_turn_count());

});

