class Stack {
  constructor(){
    this.count = 0;
    this.storage ={}
  }

  push = (item)=>{
    this.storage[this.count] = item;
    this.count++;
  }

  pop = () =>{
    if (this.count === 0){
      return undefined;
    }
    const result = this.storage[this.count-1];
    delete this.storage[this.count-1];
    this.count --
    return result;
  }

  size = () =>{
    return this.count
  }

  peek = ()=>{
    return this.storage[this.count-1]
  }
}


const myStack = new Stack();
myStack.push(2);
myStack.push(5);
myStack.push(4)
myStack.pop();
console.log(myStack.peek());
console.log(myStack.size());