function Game(moves) {

    let board = [['false', 'false', 'false'],
    ['false', 'false', 'false'],
    ['false', 'false', 'false']];

    let firstPlayerTurn = true;
    let fieldCounter = 0;
loop1:
for (let i = 0; i < moves.length; i++) { 
    
    if (fieldCounter===9) {
        console.log("The game ended! Nobody wins :(")
        break;
    }
    const currentMove = moves[i];
    
    let currentMoveX=currentMove[0];
    let currentMoveY=currentMove[2];

    if (board[currentMoveX][currentMoveY]==='false') {
        
        if (firstPlayerTurn) {
            board[currentMoveX][currentMoveY]='X';
        }
        else
        board[currentMoveX][currentMoveY]='O';

        firstPlayerTurn=!firstPlayerTurn;
        fieldCounter++;
    }
    else{
        console.log("This place is already taken. Please choose another!");
    }

    for (let i = 0; i < 3; i++) { //check rows for a win

        if (board[i].every(x=>x==='X')) {
            console.log("Player X wins!")
            break loop1;
        }        
        if (board[i].every(x=>x==='O')) {
            console.log("Player O wins!")
            break loop1;
        } 
    }

    for (let i = 0; i < 3; i++) {// check columns for a win

        if (board[0][i]==='X'&& board[1][i]==='X'&&board[2][i]==='X') {
            console.log("Player X wins!")
            break loop1;
        }

        if (board[0][i]==='O'&& board[1][i]==='O'&&board[2][i]==='O') {
            console.log("Player O wins!")
            break loop1;
        }
        
    }

    if ((board[0][0]==='X'&& board[1][1]==='X'&&board[2][2]==='X') || (board[2][0]==='X'&& board[1][1]==='X'&&board[0][2]==='X')){
        console.log("Player X wins!")
        break;
    }
    if ((board[0][0]==='O'&& board[1][1]==='O'&&board[2][2]==='O') || (board[2][0]==='O'&& board[1][1]==='O'&&board[0][2]==='O')){
        console.log("Player O wins!")
        break;
    }
}

for (let i = 0; i < 3; i++) {
        
    console.log(board[i].join("\t"));
    
}
}

Game(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
)