// Sets

function mySet() {
  // the var collection will hold the set
  let collection = [];

  // METHOD IN ES6 SET
  // this method will check for the presence of an element and return true or false
  this.has = element => {
    return collection.indexOf(element) !== -1;
  };

  // this method will return all the values in the set
  this.values = () => {
    return collection;
  };

  // this method will add an element to the set
  this.add = element => {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // this method will remove an element from a set
  this.remove = element => {
    if (this.has(element)) {
      let index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  // this method will return the size of the collection
  this.size = () => {
    return collection.length;
  };

  // NOT IN ES6
  // this method method will return the union of two sets
  this.union = otherSet => {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();

    firstSet.forEach(element => {
      unionSet.add(element);
    });
    secondSet.forEach(element => {
      unionSet.add(element);
    });

    return unionSet;
  };

  // this method will return the intersection of two sets as a new set
  this.intersection = otherSet => {
    let intersectionSet = new mySet();
    let firstSet = this.values();

    firstSet.forEach(element => {
      if (otherSet.has(element)) {
        intersectionSet.add(element);
      }
    });

    return intersectionSet;
  };

  // this method will return the difference of two sets as a new set
  this.difference = otherSet => {
    let differenceSet = new mySet();
    let firstSet = this.values();

    firstSet.forEach(element => {
      if (!otherSet.has(element)) {
        differenceSet.add(element);
      }
    });

    return differenceSet;
  };

  // this method will test if the set is a subset of a different set
  this.subset = otherSet => {
    let firstSet = this.values();
    return firstSet.every(element => {
      return otherSet.has(element);
    });
  };
}

//  mySet
let setA = new mySet();
let setB = new mySet();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");

console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

// ES6 Set
let setC = new Set();
let setD = new Set();

setD.add("a");
setC.add("b");
setC.add("c");
setC.add("a");
setC.add("d");

console.log(setC.values());
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));
