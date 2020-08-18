class List{

    constructor() {

        this.list = [];
        this.size = 0;
    }

    add(elemenent){

        this.list.push(elemenent);
        this.size++;
        this.sort();
        return this;
    }

    remove(index){

        if (index>=0 && index<this.list.length) {
            this.list.splice(index,1);//check here how it removes it exactly
            this.size--;
            return this;
        }
    }

    get(index){

        if (index>=0 && index<this.list.length){
            return this.list[index];
        }
        
    }

    sort(){
        
        return this.list.sort((a,b)=> a-b)
    }
}

// •	add(elemenent) - adds a new element to the collection
// •	remove(index) - removes the element at position index
// •	get(index) - returns the value of the element at position index

let list = new List();
list.add(5);
list.add(6);
console.log(list.add(7));
console.log(list.get(1)); 
console.log(list.remove(1));
console.log(list.get(1));
