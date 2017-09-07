const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// =======================================================

// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
    if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', () => {
        console.log('B');
});
}
});
myEmitter.on('event', () => {
    console.log('A');
});
myEmitter.emit('event');
// Prints:
//   B
//   A

// =======================================================

//Create an event handler:
const myEventHandler = function () {
    console.log('I hear a scream!');
}

//Assign the event handler to an event:
myEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
myEmitter.emit('scream');
// Prints: I hear a scream!

// =======================================================

// Creating my own event handler:
const tryingEvents = function () {
    console.log("I love the node.js EventEmitter")
}

myEmitter.on('trying', tryingEvents);

myEmitter.emit('trying');
// Prints: I love the node.js EventEmitter

// =======================================================

const anotherEmitter = new EventEmitter();
anotherEmitter.on('event', () => {});
anotherEmitter.on('event', () => {});
console.log(EventEmitter.listenerCount(anotherEmitter, 'event'));
// Prints: 2

// =======================================================


