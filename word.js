var text_box1 = document.getElementById('text_box1');
var text_box2 = document.getElementById('text_box2');
var text_box3 = document.getElementById('text_box3');
var text_box4 = document.getElementById('text_box4');
var text_box5 = document.getElementById('text_box5');
var text_box6 = document.getElementById('text_box6');

var field = new Field();
var data = new Data();
var usedWords = [];
var spellId = 1;


function button(id) {
    return document.getElementById(id);
}

function wordLoop(random, i) {
    var id = i + 1;
    var button;
    button = document.createElement('button');
    //console.log(data.array.six[random]);
    button.setAttribute('class', 'btn-primary g-btn');
    button.setAttribute('id', 'btn_' + id);
    document.getElementById('btn-area').appendChild(button);
    //console.log("button create with id ", id);
    button.onclick = executeEvent('btn_' + id);
    button.innerText = data.array.six[random][i].toString().toUpperCase();
}

function getWords() {
    var data = new Data();
    var min = Math.ceil(0);
    var max = Math.floor(data.array.six.length);
    var random = Math.floor(Math.random() * (max - min));

    if (usedWords.includes(random)) {
        console.log('cant proceed with this', random, usedWords);
        random = Math.floor(Math.random() * (max - min));
        for (var i = 0; i < data.array.six[random].length; i++) {
            wordLoop(random, i);

        }

    } else {
        for (var i = 0; i < data.array.six[random].length; i++) {
            wordLoop(random, i);
        }
        usedWords.push(random);
        console.log('word has been used', random, usedWords);
    }
}

var score = 100;
var final;

function checkWord() {
    var word = text_box1.value + text_box2.value + text_box3.value + text_box4.value + text_box5.value + text_box6.value;
    var check = word.toString();
    if (data.array.six.includes(check.toLowerCase())) {
        clear();
        getWords();
        score += 10;
    } else {
        clear();
        console.log('falied')
        return false;
    }
    document.getElementById('score').innerText = score;
}

function clear() {
    text_box1.value = "";
    text_box2.value = "";
    text_box3.value = "";
    text_box4.value = "";
    text_box5.value = "";
    text_box6.value = "";
}


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


function clickButton(id) {
    button(id).addEventListener('click', function() {
        spellWord(id);
    });
}

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

function launchFullScreen(element) {
    if (element.requestFullScreen) {
        element.requestFullScreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    }
}
getWords();

function removeBtn() {
    button('btn_1').remove();
    button('btn_2').remove();
    button('btn_3').remove();
    button('btn_4').remove();
    button('btn_5').remove();
    button('btn_6').remove();
}

function resetBtn() {
    button('btn_1').style.display = "inline-block";
    button('btn_2').style.display = "inline-block";
    button('btn_3').style.display = "inline-block";
    button('btn_4').style.display = "inline-block";
    button('btn_5').style.display = "inline-block";
    button('btn_6').style.display = "inline-block";
}

button("reset").onclick = function() {
    resetBtn();
    clear();
}

button("hint").onclick = function() {
    spellWord('btn_' + spellId)
    spellId++;
}

button("quit").onclick = function() {
    removeBtn();
    clear();
}

button("home").onclick = function() {
    getWords();
}