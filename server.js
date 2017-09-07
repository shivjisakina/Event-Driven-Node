const EventEmitter = require('events');

const myEmitter = new EventEmitter();

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

const anotherEmitter = new EventEmitter();
anotherEmitter.on('event', () => {});
anotherEmitter.on('event', () => {});
console.log(EventEmitter.listenerCount(anotherEmitter, 'event'));
// Prints: 2