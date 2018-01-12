// Code your JavaScript / jQuery solution here

  var turn = 0;

  var winCombos = [
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6]
  ]

  function resetGame(){
    turn = 0
    $("td").text("")
  }

  function player(){
    if (turn % 2 == 0) {
      return 'X'
    }else {
      return 'O'
    }
  }

  function updateState(space){
    $(space).text(player())
  }

  function setMessage(string){
    document.getElementById("message").innerHTML = string
  }

  function getBoard() {
    return $("td").toArray().map(element => element.innerHTML)
  }

  function checkWinner(){
    let board = getBoard()
    let winner = false
    for(let winning of winCombos) {
      if(board[winning[0]] === board[winning[1]] && board[winning[1]] === board[winning[2]] && board[winning[0]]!==""){
        winner = true
        setMessage(`Player ${board[winning[0]]} Won!`)
      }
    }
    return winner
  }

  function doTurn(space){
    updateState(space);
    turn += 1
    if(checkWinner()) {
      resetGame()
    } else if(turn === 9){
      setMessage("Tie game.")
      resetGame()
    }
  }

  function attachListeners(){
    
  }
