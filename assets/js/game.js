$(document).ready(function(){

    
var characters = {
    "dark" : {
        name: "Darth-Vader",
        health: 100,
        attack: 50,
        image: "assets/images/Darth-Vader.png",
        counterAtk: 50
    },
    "han" : {   
        name: "Han-Solo",
        health: 110,
        attack: 40,
        
        image: "assets/images/Han-Solo.png",
        counterAtk: 50
    },
    "yoda" : {   
        name: "Master-Yoda",
        health: 120,
        attack: 30,
        image: "assets/images/Master_yoda.png",
        counterAtk: 50
    },
    "r2d2" : {   
        name: "R2D2",  
        health: 130,
        attack: 40,
        image: "assets/images/R2D2.png",
        counterAtk: 50
    }
};//chart
    var charOne = function(character, charType, charMkr){
        var charDiv = $("<div class='character' data-name'" + characters.name + " >");
        var charName = $("<div class='charName'>").text(charter.name);
        var charImage = $("<img alt='img' class='charImg' >").attr("src", characters.image);
        var charHealth = $("<div class='charHealth' >").text(character.health);
    charDiv.append(charName).append(charImage).append(charHealth);
        $(charType).append(charDiv);
        if (charMkr == 'enemy') {
            $(charDiv).addClass('enemy');
        } else if (charMkr == 'defender') {
         currDefender = character;
        $(charDiv).addClass('target-enemy');
        }
    }
var randerMessage = function(message) {
    var gameMesageSet = $('#gameMessage');
    var newMessage = $('<div>').text(message);
    gameMesageSet.append(newMessage);
    
    if (message == 'clearMessage') {
        gameMesageSet.text('');
    }
}
    
var renderCharacters = function(charObj, areaRender){
    if (areaRender == '#characters-section'){
    $(areaRender).empty();
        for (var key in charObj){
        if(charObj.hasOwnProperty(key)){
            renderOne(charObj[key], areaRender, '');
            }
        }
    }
    if (areaRender == '#selected-character'){
     $('#selected-character').prepend('Your Character');
        renderOne(charObj, areaRender, '');
     $('#attack-button').css('visibility', 'visible');
    }
    if (areaRender == '#available-to-attack-section'){
        $('#available-to-attack-section').prepend('Choose your next Opponent');
      for (var i=0; i<charObj.length; i++){
        renderOne(charObj[i], areaRender, 'enemy');
      }
    }
}

});