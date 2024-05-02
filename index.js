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

function checker(list) {
    console.log(list);
    if (list.length === 2) {
        if (list[0] === list[1]) {
            decisions = [];
        }
        else {
            alert('wrong. Try again!');
            decisions = [];
            setTimeout(hideAllCards, 3000);
            //hideAllCards();
        }
    }
}

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
        checker(decisions);
    })
};
