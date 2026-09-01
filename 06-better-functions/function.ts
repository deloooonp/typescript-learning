// By adding a : after the input you can declare the output type of the function
function addTwo(num: number): number {
  return num + 2;
  // return "hello";
}

// A function can return multiple types of value
// function getValue(myVal: number) {
//   if (myVal > 5) return true;
//   return "200 OK";
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

// typescript automatically switches the type
heros.map((hero): string => {
  // return 1;
  return `hero is ${hero}`;
});

// If the function doesnt return anything it will automatically be of type void
function consoleError(errMsg: string): void {
  console.log(errMsg);
  // return 1;
}

// The function never returns a value, use case for error handling
function handleError(errMsg: string): never {
  throw new Error(errMsg);
}
