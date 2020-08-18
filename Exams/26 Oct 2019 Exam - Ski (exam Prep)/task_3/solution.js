class Forum {

    constructor() {
        let _users  = [];// will be array of objects {name, pass, email}
        this.getUsers = function() { return _users ; }

        let questions = [];
        this.getQuestions = function() { return questions ; }

        let id = 1;
        this.getID= ()=> {return id++;}
        
    }

    register(username, password, repeatPassword, email){

        if (username==='' || password===''|| repeatPassword===''|| email==='') {
            throw new Error("Input can not be empty");
        }

        if (password!==repeatPassword) {
            throw new Error("Passwords do not match");
        }
        
        if (this.getUsers().find((a)=> a[0]===username)!==undefined) {
            return "This user already exists!";
        }
        else {

            this.getUsers().push([username,password,email,false])

            return `${username} with ${email} was registered successfully!`
        }


    }

    login(username,password){

        let loggingUser = this.getUsers().find((a)=> a[0]===username);
        if (loggingUser===undefined) {
            throw new Error ('There is no such user');
        }
        else {

            if (loggingUser[1]===password) {
                loggingUser[3]=true;
                return "Hello! You have logged in successfully"
            }
        }

    }

    logout(username,password){ //should we do something if user was not logged in??

        let loggingUser = this.getUsers().find((a)=> a[0]===username);
        if (loggingUser===undefined) {
            throw new Error ('There is no such user');
        }
        else {

            if (loggingUser[1]===password) {
                loggingUser[3]=false;
                return "You have logged out successfully"
            }
        }

    }

    postQuestion(username, question){

        let postingUser = this.getUsers().find((a)=> a[0]===username);
        if (postingUser===undefined|| postingUser[3]===false) {
            throw new Error ('You should be logged in to post questions');
        }

        if (question ==='') {
            throw new Error ('Invalid question');
        }

        let questionID = this.getID();
        let newQuestion = {
            'id': questionID,
            "username": username,
            "question": question,
            'answersArray':[]
        }
        this.getQuestions().push(newQuestion);
    }

    postAnswer(username, questionId, answer){

        let postingUser = this.getUsers().find((a)=> a[0]===username);
        if (postingUser===undefined|| postingUser[3]===false) {
            throw new Error ('You should be logged in to post answers');
        }

        if (answer ==='') {
            throw new Error ('Invalid answer');
        }

        let questionThatIsBeingAnswered =this.getQuestions().find((a)=> a.id===questionId);

        if (questionThatIsBeingAnswered===undefined) {
            throw new Error ('There is no such question');
        }

        let newAnswer = {
            'username':username,
            'answer': answer,
        }
        questionThatIsBeingAnswered.answersArray.push(newAnswer);

        return "Your answer has been posted successfully";

    }

    showQuestions(){

        const reducer = (accumulator, currentValue) => {
            accumulator +=`Question ${currentValue.id} by ${currentValue.username}: ${currentValue.question}\n`
            
            accumulator +=currentValue.answersArray.reduce((acc, currentAnswer)=>{

                acc+= `---${currentAnswer.username}: ${currentAnswer.answer}\n`;

                return acc;
            },'')
            
            
            return accumulator;
        }

        return this.getQuestions().reduce(reducer,'').trim();

    }
}

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan',1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael',2, "How old is she?");
forum.postAnswer('Michael',2, "Tell us how tall she is.");

console.log(forum.showQuestions());


