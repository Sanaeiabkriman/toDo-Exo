var stopForm = document.getElementsByTagName('form');
stopForm[0].addEventListener('submit', () => {
    event.preventDefault()
})

var boutons = document.getElementsByTagName('button')
var inputs = document.getElementsByTagName('input')
var monUl = document.getElementsByTagName('ul')

function newInpt() {

    if (inputs[0].value != "") {
        var newLi = document.createElement('li')
        newLi.innerHTML = "<span>" + inputs[0].value + "</span>" + "<input class='display-none' value='" + inputs[0].value + "'>" + "<div class='divbtn'><button class='btn1 '> <i class='fas fa-edit'></i></button><button class='btn2'> <i class='fas fa-check-circle'></i></button> <button class='btn3'> <i class='fas fa-trash-alt'></i></button></div>"
        monUl[0].prepend(newLi)
        inputs[0].value = ''
        newLi.classList.add('toDo')
        newLi.children[2].children[0].addEventListener('click', edit);
        newLi.children[2].children[1].addEventListener('click', check);
        newLi.children[2].children[2].addEventListener('click', del);
    }
}

boutons[0].addEventListener('click', newInpt);
boutons[1].addEventListener('click', toDo);

function edit() {

    if (event.currentTarget.firstElementChild.classList.contains('fa-edit')) {
        var newLi = event.currentTarget.parentElement.parentElement;
        // input perd son display none 
        newLi.children[0].classList.add('display-none')
        // input prend la valeur de span
        newLi.children[1].classList.remove('display-none');
        event.currentTarget.firstElementChild.classList.remove('fa-edit')
        event.currentTarget.firstElementChild.classList.add('fa-save')
        event.currentTarget.classList.add('btn2')
        event.currentTarget.classList.remove('btn1')

    } else if (event.currentTarget.firstElementChild.classList.contains('fa-save')) {
        var newLi = event.currentTarget.parentElement.parentElement;
        // le span prend la valeur de l'input
        newLi.children[0].innerHTML = newLi.children[1].value
        // le span perd son display none
        newLi.children[0].classList.remove('display-none')
        // le input prend le display none
        newLi.children[1].classList.add('display-none')
        // l'icone change
        event.currentTarget.firstElementChild.classList.remove('fa-save')
        event.currentTarget.firstElementChild.classList.add('fa-edit')
        event.currentTarget.classList.add('btn1')
        event.currentTarget.classList.remove('btn2')
    }

}

function check() {
    var newLi = this.parentNode.parentNode
    newLi.classList.add('bg-success')
    newLi.classList.add('done')
    newLi.classList.remove('toDo')
}

function del() {
    var newLi = this.parentNode.parentNode
    // doit faire passe la couleur de la li en vert quand on clique sur le bouton done
    newLi.classList.add('bg-danger')
    newLi.classList.add('delete')
    newLi.classList.remove('toDo')
    newLi.classList.remove('done')
}

function toDo() {
    // si contient une class todo pas de displau none
    var li = document.getElementsByTagName('li')
    var tabLi = Array.from(li)
    tabLi.forEach(element => {
        if (element.classList.contains('toDo')) {
            element.classList.remove('display-none')
            // element.classList.add('display-x')
        } else {
            element.classList.add('display-none')
        }
    });
}
boutons[1].addEventListener('click', toDo);

function done() {
    var li = document.getElementsByTagName('li')
    var tabLi = Array.from(li)
    tabLi.forEach(element => {
    if (element.classList.contains('done')) {
        element.classList.remove('display-none')

    } else {
        element.classList.add('display-none')
    }
});
}
boutons[3].addEventListener('click', done);
// doit disparaitre dans todo et dans doing
// quand on clique sur to do: on retrouve tout
// quand on clique sur doner: on retrouve les li vertes
// quand on clique sur delete:

function supprimer() {
    var li = document.getElementsByTagName('li')
    var tabLi = Array.from(li)
    tabLi.forEach(element => {
    // si continer une class done-> sera en display none ce qui ne content pas 'done'
    if (element.classList.contains('delete')) {
        element.classList.remove('display-none')

    } else {
        element.classList.add('display-none')
    }
});
}
boutons[2].addEventListener('click', supprimer);

function all() {
    var li = document.getElementsByTagName('li')
    var tabLi = Array.from(li)
    tabLi.forEach(element => {
    // si continer une class done-> sera en display none ce qui ne content pas 'done'
    if (element.classList.contains('done'&&'delete')) {
        element.classList.remove('display-none')
    } else if (element.classList.contains('toDo')){
        element.classList.remove('display-none')
    }
});
}
boutons[4].addEventListener('click', all);