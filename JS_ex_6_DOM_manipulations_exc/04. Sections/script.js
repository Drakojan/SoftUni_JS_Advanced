function create(words) {
   
   let mainDiv = document.getElementById('content');

   words.forEach(word => {
      
      let newDiv = document.createElement('div');
      let newPar = document.createElement('p');
      newPar.textContent=word;
      newPar.style.display='none';
      newDiv.appendChild(newPar);
      
      newDiv.addEventListener('click',function handler() {
         newDiv.getElementsByTagName('p')[0].style.display='block';
      })
         mainDiv.appendChild(newDiv);

   });
}