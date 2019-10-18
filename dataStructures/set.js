class MySet {
  constructor(){
    this.collection =[]
  }

  has = element =>{
    return this.collection.indexOf(element) !== -1;
  }

  value = () =>{
    return this.collection;
  }

  add =(elem)=>{
    if(!this.has(elem)){
      this.collection.push(elem)
      return this.collection
    }
    return;
  }

  remove = (elem) =>{
    if (this.has(elem)){
      this.collection.splice(this.collection.indexOf(elem), 1)
      return this.collection
    }
    return;
  }

  size =()=>{
    return this.collection.length
  }

  //intersection

  //union

  //subset

  //difference
}


const setA = new MySet();
console.log(setA.has(1)); //false
console.log(setA.value());
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(3);
console.log(setA.value());
setA.remove(2);

console.log(setA.value());
console.log(setA.size());