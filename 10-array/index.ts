// Putting [] will assign to type never
// const heros: [] = [];
const heros: string[] = [];
// const heroPower: number[] = [];
// You can use diamond brackets like this too. Works the same
const heroPower: Array<number> = [];

heros.push("spiderman");
heroPower.push(2);

type User = {
  name: string;
  isActive: boolean;
};

const MLModels: number[][] = [[255, 255, 255]];
const allUsers: User[] = [];

allUsers.push({ name: "Delon", isActive: true });
