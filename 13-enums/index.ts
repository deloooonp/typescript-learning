// Example use case without enum

// const aisle = 0;
// const middle = 1;
// const window = 2;

// let seat;

// if (seat === 0) {
// }

// When you compile to javascript it will generate crazy amount of code. You can fix it by using const before the enum
enum SeatChoice {
  // By default it starts with 0 and it increments by 1 per value
  // But if you put a custom value it will still increment by 1
  // aisle = 10,
  // If you put the value as string you need to put the values for all of them
  // The value doesnt have to be of the same type
  aisle = "aisle",
  // If you put a number after the string the rest will follow by increment 1 value
  middle = 3,
  window,
  fourth,
}

const hcSeat = SeatChoice.aisle;

export {};
