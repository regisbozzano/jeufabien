'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

let level1 = [['#','0','0','0','0','a']];

let level2 = [['#','0','0','0','0','0'],
             ['0','0','0','0','0','0'],
             ['0','0','0','0','0','a']];

let level3 = [['#','0','t','0','0','0'],
             ['0','0','|','0','|','0'],
             ['0','0','t','0','|','a']];

            
let game = {

level : level3,
posX : 0,
posY : 0,
posXold : 0,
posYold : 0
}

const ARROWUP = 38;
const ARROWDOWN = 40;
const ARROWLEFT = 37;
const ARROWRIGHT = 39;          
const POSITIONINT = [0][0];

//console.log(level3);

/*************************************************************************************************/
/* ****************************************** function ****************************************** */
/*************************************************************************************************/

function direction(keydown) {
    if(keydown.keyCode == ARROWUP){
        haut();
    }
    else if(keydown.keyCode == ARROWDOWN){
        bas();
    }
    else if(keydown.keyCode == ARROWRIGHT){
        droite();
    }
    else if(keydown.keyCode == ARROWLEFT){
        gauche();
    }
}

function droite(){
    game.level[game.posX];
    //game.level[game.posX] = game.level[game.posXold];
    game.level[game.posX] = 0;
    game.level[game.posX + 1] = '#';
    game.posX++;
    if (game.level[game.posX] > game.level.length){
        console.log(game.level[length])
    }/*
    else if(posX === '|' || posX < game.level.length || posX > game.level.length)
        game.posX*/
    console.log(game.posX, game.level[game.posX])
    console.log(level3)
}

function gauche(){
    game.level[game.posX];
    //game.posX = game.posXold;
    game.level[game.posX] = 0;
    game.level[game.posX - 1] = '#';
    game.posX--;
    /*if (posX < 0 ){
        currentImg = tabPictures.length -1;
        
    }*/
    console.log(game.posX, game.level[game.posX])
    console.log(level3)
}

function bas(){
    game.level[game.posY];
    game.level[game.posY] = 0;
    game.level[game.posY - 1] = '#';
    game.posY--;
    console.log(game.posY, game.level[game.posY]);
    console.log(level3);   
}

function haut(){
    game.level[game.posY];
    game.level[game.posY] = 0;
    game.level[game.posY + 1] = '#';
    game.posY++;
    console.log(game.posY, game.level[game.posY]);
    console.log(level3);
}




/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/


document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('keydown', direction);

});    