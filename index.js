var images = document.querySelectorAll(".card");
var choice = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
];

function checker() {
    if (decisions.length === 2) {
        console.log(gert);
        if (decisions[0] === decisions[1]) {
            decisions = [];
            gert ++;
            if (gert === 5) {
                window.location.href = "./victory.html"
            };
        }
        else {
            gert = 0;
            decisions = [];
            setTimeout(hideAllCards, 3000);
            //hideAllCards();
        };
    }
};

function hideAllCards() {
    for (let index = 0; index < images.length; index++) {
        images[index].classList.remove(myList[index]);
    }
}

function access(num) {
    for (i = 0; i < images.length; i ++) {
        if (images[i].innerHTML === num) {
            var controller = myList[i];
        }
    }
    return controller;
};

function show(i) {
    images[i].classList.add(myList[i]);
};

function shuffle(array) {
    var currentIndex = array.length;
    
    while (currentIndex != 0) {
        var newIndex = Math.floor(Math.random() * array.length);
        currentIndex --;

        [array[currentIndex], array[newIndex]] = [array[newIndex], array[currentIndex]]
    }
};

shuffle(choice);
var myList = choice.slice(0, 5);
myList.push(...myList);
shuffle(myList);
//var myCards = [];
var gert = 0;

for (let index = 0; index < images.length; index++) {
    //const card = {type: myList[index], num: images[index].innerHTML};
    //myCards.push(card);
    show(index);
}

setTimeout(hideAllCards, 5000);

var decisions = [];

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
        var num = this.innerHTML;
        this.classList.add(access(num));
        decisions.push(access(num));
        checker(decisions, gert);
    })
};
