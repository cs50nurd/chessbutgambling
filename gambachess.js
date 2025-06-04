// gambachess.js

// Strict mode helps catch common coding errors and "unsafe" actions
'use strict';

// Entry point function
function main() {
    console.log('Welcome to Gamba Chess!');
}

// Simple Chessboard

const boardEl = document.getElementById('chessboard');

// Unicode chess pieces
const PIECES = {
    r: '♜', n: '♞', b: '♝', q: '♛', k: '♚', p: '♟',
    R: '♖', N: '♘', B: '♗', Q: '♕', K: '♔', P: '♙', '': ''
};

// Initial board setup
let board = [
    ['r','n','b','q','k','b','n','r'],
    ['p','p','p','p','p','p','p','p'],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['P','P','P','P','P','P','P','P'],
    ['R','N','B','Q','K','B','N','R']
];

let selected = null;

function renderBoard() {
    boardEl.innerHTML = '';
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.className = 'square ' + ((row + col) % 2 === 0 ? 'light' : 'dark');
            if (selected && selected.row === row && selected.col === col) {
                square.classList.add('selected');
            }
            square.textContent = PIECES[board[row][col]];
            square.addEventListener('click', () => onSquareClick(row, col));
            boardEl.appendChild(square);
        }
    }
}

function onSquareClick(row, col) {
    if (selected) {
        // Move piece
        board[row][col] = board[selected.row][selected.col];
        board[selected.row][selected.col] = '';
        selected = null;
        renderBoard();
    } else if (board[row][col] !== '') {
        // Select piece
        selected = { row, col };
        renderBoard();
    }
}

// Execute the main function
main();
renderBoard();