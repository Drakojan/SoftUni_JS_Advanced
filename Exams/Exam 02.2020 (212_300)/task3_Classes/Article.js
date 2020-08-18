class Article{

    constructor(title, creator) {
        
        this.title = title;
        this.creator = creator;

        let _coments = []; 
        //array of objects {Id, Username, Content, Replies(which is an array of objects)}
        //each reply is also object {Id, Username, Content}
        this.getComents = function(){return _coments}; 

        let _likes = []; // will be an array of strings - names of ppl who liked 
        this.getLikes = function(){return _likes}; 
              
        let id = 1;
        this.getID= ()=> {return id++;}
    }

    get likes() {
            if (this.getLikes().length===0) {
                
                return `${this.title} has 0 likes`;
            }

            if (this.getLikes().length===1) {
                return `${this.getLikes()[0]} likes this article!`;
            }

            return `${this.getLikes()[0]} and ${this.getLikes().length-1} others like this article!`//HERE THE TASK SAYS LIKES BUT IT MAY HAVE TO BE -1
    }

    like (username){

        // let likes = this.getLikes().find((a)=>a===username);
        if ((this.getLikes().find((a)=>a===username))!==undefined) {
            throw new Error("You can't like the same article twice!");    
        }
        if (username===this.creator) {
            throw new Error("You can't like your own articles!");
            
        }
        this.getLikes().push(username);

        return `${username} liked ${this.title}!`;
        
    }
    dislike (username){

        if ((this.getLikes().find((a)=>a===username))===undefined) {
            throw new Error("You can't dislike this article!");    
        }

        let removalIndex = this.getLikes().indexOf(username);
        this.getLikes().splice(removalIndex,1);
        return `${username} disliked ${this.title}`;

    }

    comment (username, content, id){

        let currentCommentById = this.getComents().find((a)=>a.Id===id);
        if (id===undefined || currentCommentById===undefined) {

            let newCommentID = this.getID();
            let newComment = {
                'Id': newCommentID,
                "Username": username,
                "Content": content,
                'Replies':[]
            }
            this.getComents().push(newComment);

            return `${username} commented on ${this.title}`;
        }
        else{
            let newReplyId = Number(currentCommentById['Id'] +`.${currentCommentById['Replies'].length+1}`)//may have to parse this to number if failed tests
            let newReply = {
                'Id': newReplyId,
                "Username": username,
                "Content": content,
            }
            currentCommentById['Replies'].push(newReply);
            return "You replied successfully";
        }
 
    }

    toString(sortingType){

        let coments = this.getComents();

        if (sortingType==='asc') {
            
            coments.forEach((element)=>{
                element.Replies.sort((a,b)=> {
                    return a.Id-b.Id})
            })

            coments.sort((a,b)=> {
                return a.Id-b.Id})
        }
        else if (sortingType ='desc') {

            coments.forEach((element)=>{
                element.Replies.sort((a,b)=> {
                    return b.Id-a.Id})
            })

            coments.sort((a,b)=> {
                return b.Id-a.Id})

        }
        else{ // username in ascending order;

            coments.forEach((element)=>{
                element.Replies.sort((a,b)=> a.Username.localeCompare(b.Username));
            })

            coments.sort((a,b)=> a.Username.localeCompare(b.Username));
        }
     
        const reducer = (accumulator, currentValue) => {
            accumulator +=`-- ${currentValue.Id}. ${currentValue.Username}: ${currentValue.Content}\n`
            
            accumulator +=currentValue.Replies.reduce((acc, currentReply)=>{

                acc+= `--- ${currentReply.Id}. ${currentReply.Username}: ${currentReply.Content}\n`;

                return acc;
            },'')           
            
            return accumulator;
        }

        let result =`
Title: ${this.title}
Creator: ${this.creator}
Likes: ${this.getLikes().length}
Comments:\n`
        let commentsString = coments.reduce(reducer,'')
        //console.log(commentsString);
        result += commentsString;
        return result.trim();        
    }
}

let art = new Article("My Article", "Anny");
art.likes
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));

