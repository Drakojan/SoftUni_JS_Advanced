const elements ={

    
};
console.log(elements.value);
console.log(elements.function);
console.log(elements.enumerable);

function createHTMLElement(tagName,className,textContent, attributes, event) {
    
    let element = document.createElement(tagName);

    if (className) {
        element.classList.add(className);
    }

    if (textContent) {
        element.textContent= textContent;
    }

    if (attributes) {
        attributes.forEach(a => element.setAttribute(a.k, a.v));
    }

    if (event) {
        element.addEventListener(event.name, event.func);
    }
}

function appendChildrenToParent(children,parent) {
    
    children.forEach((c)=> parent.appendChild(c));
}

//preventDefault - for anchtor tag(link) and forms to prevent page refresh
//stop propagation and stopPropagationImmediate - stops the event from bubling further. 

function solve(){
   
    let $createButton = document.getElementsByTagName('button')[0];
    let $threeInputs = document.getElementsByTagName('form')[0].getElementsByTagName('input');
    let $articlesPlace = document.getElementsByTagName('section')[1]
 
    let $archiveUL = document.getElementsByTagName('section')[3].getElementsByTagName('ul')[0];
 
    let $authorInput = $threeInputs[0];
    let $tittleInput =$threeInputs[1];
    let $categoryInput = $threeInputs[2];
    let $textArea = document.getElementsByTagName('form')[0].getElementsByTagName('textarea')[0];
 
    $createButton.addEventListener('click', createHandler)
 
    function createHandler(e) {
       
       e.preventDefault();
 
       let newElement = document.createElement('article');
 
       newElement.innerHTML=`
       <h1>${$tittleInput.value}</h1>
       <p>
          "Category:"
          <strong>${$categoryInput.value}</strong>
       </p>
       <p>
          "Creator:"
          <strong>${$authorInput.value}</strong>
       </p>
       <p>
          ${$textArea.value}
       </p>
       <div class ="buttons">
          <button class="btn delete">Delete</button>
          <button class="btn archive">Archive</button>
       </div>`
 
       $articlesPlace.appendChild(newElement);
    }
 
    $articlesPlace.addEventListener('click', deleteArchiveHandler)
 
    function deleteArchiveHandler(e){
 
       if (e.target.className ==='btn delete') {
          e.target.parentNode.parentNode.remove();
       }
       else if (e.target.className ==='btn archive') {
          let elementToMove = e.target.parentNode.parentNode.getElementsByTagName('h1')[0];
 
          let newLIelement = document.createElement('li');
          newLIelement.textContent=elementToMove.textContent
          $archiveUL.appendChild(newLIelement);
 
          orderList($archiveUL);
          e.target.parentNode.parentNode.remove();
       }
    }
 
    function orderList(list) {
       let listItems = Array.from(list.children);
       list.innerHTML = '';
  
       listItems
          .sort((a, b) => a.textContent.localeCompare(b.textContent))
          .forEach(li => list.appendChild(li));
    }
 }