/**
 * object variable....
 */
let field = new Field(),
    data = new Data();


/**
 * global used word array..
 */
let usedWords = [],

    /**
     * global score variabel..
     */
    score = 90;

/**
 * variable declaration for text_boxes...
 */
let text_box1 = document.getElementById('text_box1'),
    text_box2 = document.getElementById('text_box2'),
    text_box3 = document.getElementById('text_box3'),
    text_box4 = document.getElementById('text_box4'),
    text_box5 = document.getElementById('text_box5'),
    text_box6 = document.getElementById('text_box6');



/**
 * returns the button element by id..
 * @param {the id of the button} id
 */
function button(id) {
    return document.getElementById(id);
}

/**
 * 
 returns the id of an input-field
 */
function textBox(id) {
    return document.getElementById(id);
}

/**
 * sets player scores 
 * @param {*} in_score 
 */
function scores(in_score) {
    document.getElementById('score').innerText = in_score;
    console.log(in_score)
}

/**
 * performs button creation and word assinging 
 * @param {the index of the suppose array element} random 
 * @param {the loop counter} i 
 */
function wordLoop(random, i) {
    var id = i + 1,
        button;

    button = document.createElement('button');

    button.setAttribute('class', 'btn-primary g-btn');
    button.setAttribute('id', 'btn_' + id);
    document.getElementById('btn-area').appendChild(button);

    button.onclick = executeEvent('btn_' + id);
    button.innerText = data.array.six_wrong[random][i].toString().toUpperCase();
}

/**
 * gets the word from the data function and creates the word game 
 * kicks of the game
 */
function getWords() {
    var data = new Data(),
        min = Math.ceil(0),
        max = Math.floor(data.array.six_wrong.length),
        random = Math.floor(Math.random() * (max - min));

    /**
     * check if word has been used through the loop 
     */
    if (usedWords.includes(random)) {
        console.log('cant proceed with this', random, usedWords);
        flaged_number++;
        random = Math.floor(Math.random() * (max - min));
        for (var i = 0; i < data.array.six_wrong[random].length; i++) {
            wordLoop(random, i);
        }

    } else {
        for (var i = 0; i < data.array.six_wrong[2].length; i++) {
            wordLoop(random, i);

        }
        usedWords.push(random);
        console.log('word has been used', random, usedWords);
    }

}

/**
 * check if player word is correct before scoring... 
 * score increments by +10 and if fails reduces by -10..
 */
function checkWord() {

    var word = text_box1.value + text_box2.value + text_box3.value + text_box4.value + text_box5.value + text_box6.value;
    var check = word.toString();
    //check if spelt word is correct
    if (data.array.six_correct.includes(check.toLowerCase())) {
        clear();
        getWords();
        score += 10;
        scores(score);
        console.log("current score value : ", flaged_number);
    } else {
        clear();
        getWords();
        score -= 10;
        scores(score)

    }

}


/**
 * removes button completely from DOM after player clicks on reset or completes or fails a level
 */
function removeBtn() {
    for (var i = 0; i < 6; i++) {
        var id = i + 1;
        button('btn_' + id).remove();
    }
}

/**
 * performs reset of game...
 */
function reset() {
    for (var i = 0; i < 6; i++) {
        var id = i + 1;
        button('btn_' + id).style.display = "inline-block";
    }
}

/**
 * clears text field
 */
function clear() {
    for (var i = 0; i < 6; i++) {
        var id = i + 1;
        textBox('text_box' + id).value = "";
    }

}

/**
 * checks for empty fields and spells players clicked letter 
 * @param {*} id 
 */
function spellWord(id) {
    if (field.isEmpty(text_box1.value)) {
        text_box1.value = button(id).innerText;
        button(id).style.display = "none";
    } else if (field.isEmpty(text_box2.value)) {
        text_box2.value = button(id).innerText;
        button(id).style.display = "none";
    } else if (field.isEmpty(text_box3.value)) {
        text_box3.value = button(id).innerText;
        button(id).style.display = "none";
    } else if (field.isEmpty(text_box4.value)) {
        text_box4.value = button(id).innerText;
        button(id).style.display = "none";
    } else if (field.isEmpty(text_box5.value)) {
        text_box5.value = button(id).innerText;
        button(id).style.display = "none";
    } else if (field.isEmpty(text_box6.value)) {
        text_box6.value = button(id).innerText;
        button(id).style.display = "none";
        removeBtn();
        checkWord();
    }
}

/**
 * performs the click events through the game...
 * @param {*takes the clicked button id} id 
 */
function clickButton(id) {
    button(id).addEventListener('click', function() {
        spellWord(id);
    });
}

/**
 * perform button_id selection through the game...
 * executes the entire button click event... by ids
 * @param {*} id 
 */
function executeEvent(id) {
    switch (id) {
        case 'btn_1':
            clickButton(id);
            break;
        case 'btn_2':
            clickButton(id);
            break;
        case 'btn_3':
            clickButton(id);
            break;
        case 'btn_4':
            clickButton(id);
            break;
        case 'btn_5':
            clickButton(id);
            break;
        case 'btn_6':
            clickButton(id);
            break;

        default:
            break;
    }
}