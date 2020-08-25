console.log("This is ES6");

let pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 },
];

const getAge = (pet) => new Date().getFullYear() - pet.bornOn;

let ageOfPets = pets.map(getAge);
console.log("ageOfPets", ageOfPets);

let petWithAge = pets.map((pet) => {
  pet.age = getAge(pet);
  return pet;
});

console.log("petWithAge", petWithAge);

let dogs = pets.filter((pet) => {
  return pet.type === "dog";
});

console.log("dogs", dogs);

let jasper = pets.filter((pet) => {
  return pet.name === "Jasper";
})[0];

console.log("jasper", jasper);

console.log(`Jasperis ${jasper.age} years old ${jasper.ty}`);
