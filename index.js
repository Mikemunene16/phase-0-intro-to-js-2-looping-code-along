// Code your solutions in this file
const message = [];

function writeCards(arr, event) {
    for (let i = 0; i < arr.length; i++) {
        message.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    }

    return message;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    }
}