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
    var max = Math.floor(data.array.six.length) + 1;
    var random = Math.floor(Math.random() * (max - min)) + min;
    var rand = parseInt(random);


    document.getElementById('btn_1').innerText = data.array.six[rand][0].toString().toUpperCase();
    document.getElementById('btn_1').style.display = "inline-block";
    document.getElementById('btn_1').addEventListener('click', function() {
        clickButton('btn_1')
    })

    document.getElementById('btn_2').innerText = data.array.six[rand][1].toString().toUpperCase();
    document.getElementById('btn_2').style.display = "inline-block";
    document.getElementById('btn_2').addEventListener('click', function() {
        clickButton('btn_2')
    })

    document.getElementById('btn_3').innerText = data.array.six[rand][2].toString().toUpperCase();
    document.getElementById('btn_3').style.display = "inline-block";
    document.getElementById('btn_3').addEventListener('click', function() {
        clickButton('btn_3')
    })

    document.getElementById('btn_4').innerText = data.array.six[rand][3].toString().toUpperCase();
    document.getElementById('btn_4').style.display = "inline-block";
    document.getElementById('btn_4').addEventListener('click', function() {
        clickButton('btn_5')
    })


    document.getElementById('btn_5').innerText = data.array.six[rand][4].toString().toUpperCase();
    document.getElementById('btn_5').style.display = "inline-block";
    document.getElementById('btn_5').addEventListener('click', function() {
        clickButton('btn_5')
    })

    document.getElementById('btn_6').innerText = data.array.six[rand][5].toString().toUpperCase();
    document.getElementById('btn_6').style.display = "inline-block";
    document.getElementById('btn_6').addEventListener('click', function() {
        clickButton('btn_6')
    })


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
        return true;
    } else {
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