// Queues

function Queue() {
  let collection = [];

  // Functions
  this.print = () => {
    console.log(collection);
  };

  this.enqueue = element => {
    collection.push(element);
  };

  this.dequeue = () => {
    return collection.shift();
  };

  this.front = () => {
    return collection[0];
  };

  this.size = () => {
    return collection.length;
  };

  this.isEmpty = () => {
    return collection.length === 0;
  };
}

var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
console.log(q.front());
q.print();

// PriorityQueue

function PriorityQueue() {
  let collection = [];

  // Functions
  this.printCollection = () => {
    console.log(collection);
  };

  this.enqueue = element => {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      let added = false;

      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }

      if (!added) {
        collection.push(element);
      }
    }
  };

  this.dequeue = () => {
    return collection.shift()[0];
  };

  this.front = () => {
    return collection[0];
  };

  this.size = () => {
    return collection.length;
  };

  this.isEmpty = () => {
    return collection.length === 0;
  };
}

let pq = new PriorityQueue();
pq.enqueue(["Oliver Henry", 2]);
pq.enqueue(["Tony Stack", 3]);
pq.enqueue(["Captain America", 1]);
pq.enqueue(["Black Widow", 2]);

pq.printCollection();
console.log(pq.dequeue());
pq.front();
pq.printCollection();
