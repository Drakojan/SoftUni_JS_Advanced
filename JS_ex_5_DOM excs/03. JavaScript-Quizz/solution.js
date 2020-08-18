function solve() {
  let quizzie = document.getElementById('quizzie');
   

  quizzie.addEventListener('click', (e)=>{

    if (e.target.className==='answer-text') {
      console.log(e.target.innerHTML);
    }
  })
}
