function solve() {

    var addButton = document.getElementById('add')

    var sections = {

        open:document.getElementsByClassName('orange')[0].parentElement.nextElementSibling,
        inProgress: document.getElementsByClassName('yellow')[0].parentElement.nextElementSibling,
        complete: document.getElementsByClassName('green')[0].parentElement.nextElementSibling
    }

    addButton.addEventListener('click', (e)=>{
        
        e.preventDefault()

        var inputs = {
            task: document.getElementById('task').value,
            description: document.getElementById('description').value,
            date: document.getElementById('date').value
        }

        if (inputs.task==="" || inputs.description==="" || inputs.date==="") {

            return;
        }

        let newArticleElement = document.createElement('article')

        newArticleElement.innerHTML = `<h3>${inputs.task}</h3>` +
        `<p>Description: ${inputs.description}</p>` +
        `<p>Due Date: ${inputs.date}</p>` +
        '<div class="flex">' +
        '<button class="green">Start</button>' +
        '<button class="red">Delete</button>' +
        '</div>';

        let buttons = {
            start: newArticleElement.getElementsByTagName('button')[0],
            delete: newArticleElement.getElementsByTagName('button')[1]
        }

        buttons.start.addEventListener('click', startHandler)
        buttons.delete.addEventListener('click', deleteHandler)

        sections.open.appendChild(newArticleElement);

    })

    deleteHandler= function(e){
        this.parentElement.parentElement.remove()
    }
    
    startHandler = function(e){

        e.preventDefault();

        let clone = this.parentElement.parentElement.cloneNode(true);
        this.parentElement.parentElement.remove()

        clone.getElementsByClassName('flex')[0].innerHTML = '<button class="red">Delete</button>' +
        '<button class="orange">Finish</button>';

        let buttons = {
            delete: clone.getElementsByTagName('button')[0],
            finish: clone.getElementsByTagName('button')[1]
        }

        buttons.delete.addEventListener('click', deleteHandler)
        buttons.finish.addEventListener('click', finishHandler)

        sections.inProgress.appendChild(clone);

    }

    finishHandler = function (e) {

        let clone = this.parentElement.parentElement.cloneNode(true);
        this.parentElement.parentElement.remove()

        clone.getElementsByClassName('flex')[0].remove();

        sections.complete.appendChild(clone);
    }
}