var text_box1 = document.getElementById('text_box1');
var text_box2 = document.getElementById('text_box2');
var text_box3 = document.getElementById('text_box3');
var text_box4 = document.getElementById('text_box4');
var text_box5 = document.getElementById('text_box5');
var text_box6 = document.getElementById('text_box6');

var field = new Field();

function createButtons() {
    var data = new Data();
    var min = Math.ceil(0);
    var max = Math.floor(data.array.six.length);
    var random = Math.floor(Math.random() * (max - min)) + min;
    var rand = parseInt(random);
    var button;
    console.log(rand)
    for (var i = 0; i < data.array.six[rand].length; i++) {
        var id = i + 1;
        button = document.createElement('button');
        console.log(data.array.six[rand]);
        button.setAttribute('class', 'btn');
        button.setAttribute('id', 'btn_' + id);
        document.getElementById('game_board').appendChild(button);
        console.log("button create with id ", id);
        button.onclick = executeEvent('btn_' + id);
        console.log(data.array.six[rand][i].toString().toUpperCase());
    }
    //document.getElementById('btn_' + id).innerText = data.array.six[rand][i].toString().toUpperCase();

}

function clickButton(id) {

    var button = document.getElementById(id);
    document.getElementById(id).addEventListener('click', function() {
        if (field.isEmpty(text_box1.value)) {
            text_box1.value = button.innerText;
            //button.style.display = "none";
        } else if (field.isEmpty(text_box2.value)) {
            text_box2.value = button.innerText;
            //button.style.display = "none";
        } else if (field.isEmpty(text_box3.value)) {
            text_box3.value = button.innerText;
            //button.style.display = "none";
        } else if (field.isEmpty(text_box4.value)) {
            text_box4.value = button.innerText;
            //button.style.display = "none";
        } else if (field.isEmpty(text_box5.value)) {
            text_box5.value = button.innerText;
            //button.style.display = "none";
        } else if (field.isEmpty(text_box6.value)) {
            //button.style.display = "none";
            text_box6.value = button.innerText;
            isArray();
            clear();
        }


    });
}

//Array []
function isArray() {

    var word = text_box1.value + text_box2.value + text_box3.value + text_box4.value + text_box5.value + text_box6.value;
    var check = word.toString();
    console.log(word.toLowerCase());
    var data = new Data();
    console.log(data.array.six);

    if (data.array.six.includes(check.toLowerCase())) {
        // alert('Success');
        return true;
    } else {
        // alert('Failed');
        return false;
    }
}

function clear() {
    var text_box1 = document.getElementById('text_box1').value = " ";
    var text_box2 = document.getElementById('text_box2').value = " ";
    var text_box3 = document.getElementById('text_box3').value = " ";
    var text_box4 = document.getElementById('text_box4').value = " ";
    var text_box5 = document.getElementById('text_box5').value = " ";
    var text_box6 = document.getElementById('text_box6').value = " ";

    //    document.getElementById('').style.display = "inline-block";


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