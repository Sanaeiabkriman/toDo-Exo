var stopForm = document.getElementsByTagName('form');
stopForm[0].addEventListener('submit', () => {
    event.preventDefault()
})

var boutons = document.getElementsByTagName('button')
var inputs = document.getElementsByTagName('input')
var monUl = document.getElementsByTagName('ul')

function newInpt() {
    var newLi = document.createElement('li')

    newLi.innerHTML = "<span>" + inputs[0].value + "</span>" + "<input class='display-none' value='" + inputs[0].value + "'>" + "<div class='divbtn'><button class='btn1 '> <i class='fas fa-edit'></i></button><button class='btn2'> <i class='fas fa-check-circle'></i></button> <button class='btn3'> <i class='fas fa-trash-alt'></i></button></div>"
    monUl[0].prepend(newLi)
    inputs[0].value = ''
    newLi.classList.add('toDo')

    function edit() {
        if (event.currentTarget.firstElementChild.classList.contains('fa-edit')) {

            // input perd son display none 
            newLi.children[0].classList.add('display-none')
            // input prend la valeur de span
            newLi.children[1].classList.remove('display-none');
            event.currentTarget.firstElementChild.classList.remove('fa-edit')
            event.currentTarget.firstElementChild.classList.add('fa-save')
            event.currentTarget.classList.add('btn2')
            event.currentTarget.classList.remove('btn1')

        } else if (event.currentTarget.firstElementChild.classList.contains('fa-save')) {
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
    newLi.children[2].children[0].addEventListener('click', edit);


    function toDo() {
        // si contient une class todo pas de displau none
        if (newLi.classList.contains('toDo')) {
            newLi.children[0].classList.remove('display-none')
        }
        else{
            newLi.children[0].classList.add('display-none')
        }

    }
    boutons[1].addEventListener('click', toDo)

    function check() {
        // doit faire passe la couleur de la li en vert quand on clique sur le bouton done
        newLi.classList.toggle('bg-success')
        newLi.classList.add('done')

    }
    newLi.children[2].children[1].addEventListener('click', check);

    function done() {
        // si continer une class done-> sera en display none ce qui ne content pas 'done'
        if (newLi.classList.contains('done')) {
            newLi.children[0].classList.remove('display-none')
        } else {
            newLi.classList.add('display-none')
        }
    }
    boutons[3].addEventListener('click', done)



    function delet() {
        // doit faire passe la couleur de la li en vert quand on clique sur le bouton done
        newLi.classList.toggle('bg-danger')

    }
    newLi.children[2].children[2].addEventListener('click', delet);

    if (newLi.classList.contains('')) {
        function done() {
            // doit disparaitre dans todo et dans doing

        }

    } else if (newLi.classList.contains('bg-success')) {

        // quand on clique sur to do: on retrouve tout
        // quand on clique sur doner: on retrouve les li vertes
        // quand on clique sur delete:
    }
}
boutons[0].addEventListener('click', newInpt);