// custom map

Array.prototype.myMap = function (cb) {
    let arr = []

    for (let i = 0; i < this.length; i++) {
        arr.push(cb(this[i], i, this))
    }

    return this
}

// custom filter

Array.prototype.myFilter = function (cb) {
    let arr

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            arr.push(cb(this[i], i, this))
        }
    }

    return arr
}

// custom reduce

Array.prototype.myReduce = function (cb, initialValue) {
    let accumulator = initialValue

    for (let i = 0; i < this.length; i++) {
        accumulator = cb(accumulator, this[i], i, this)
    }

    return accumulator
}

// Call apply bind

const person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function (message) {
        console.log(message + ' ' + this.firstName + ' ' + this.lastName);
    }
};

// Using call
const message1 = 'Hello';
person.greet.call({ firstName: 'Jane', lastName: 'Smith' }, message1);
// Output: Hello Jane Smith

// Using apply
const message2 = 'Hi';
person.greet.apply({ firstName: 'Mike', lastName: 'Johnson' }, [message2]);
// Output: Hi Mike Johnson

// Using bind
const message3 = 'Welcome';
const boundGreet = person.greet.bind({ firstName: 'Emily', lastName: 'Davis' });
boundGreet(message3);
// Output: Welcome Emily Davis

// Implement debouncing / throttling

function debounce(callback, delay) {
    let timer
    return function () {
        clearTimeout(timer)
        timer = setTimeout(callback, delay)
    }
}

const debounceEx = debounce(() => console.log('Debounce'), 1000)

debounceEx()
debounceEx()
debounceEx()

function throttle(callback, delay) {
    let previousTime

    return function () {
        const currentTime = Date.now()
        if (currentTime - previousTime >= delay) {
            callback()
            previousTime = currentTime
        }
    }
}

const throttleEx = throttle(() => console.log('Throttle'), 1000)

throttleEx()
throttleEx()
throttleEx()

// ---------------------------------------------------------------------- //
