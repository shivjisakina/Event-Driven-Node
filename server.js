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
anotherEmitter.on('event', () => {
});
anotherEmitter.on('event', () => {
});
anotherEmitter.on('event', () => {
});
console.log(EventEmitter.listenerCount(anotherEmitter, 'event'));
// Prints: 3

// =======================================================


const events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listener1 = function listener1() {
    console.log('listener1 executed.');
}

// listener #2
var listener2 = function listener2() {
    console.log('listener2 executed.');
}

// Bind the connection event with the listener1 function
eventEmitter.addListener('connection', listener1);

// Bind the connection event with the listener2 function
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount
(eventEmitter, 'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

// Fire the connection event
eventEmitter.emit('connection');

// Remove the binding of listener1 function
eventEmitter.removeListener('connection', listener1);
console.log("Listener1 will not listen now.");

// Fire the connection event
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

console.log("Program Ended.");