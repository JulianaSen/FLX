const data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];

function findTypes() {
  let result = [];
  for(let i = 0; i < arguments.length; i++) {
    result.push(typeof(arguments[i]));
  }
  return result;
}

console.log(findTypes('number'));
console.log(findTypes(null, 5, 'hello'));

function executeforEach(arr, func) {
  for(let el of arr) {
      func(el);
  }
}

executeforEach([1,2,3], function(el) { 
  console.log(el) 
});

function mapArray(arr, func) {
  let result = [];
  executeforEach(arr, function(el) {
      result.push(func(el));
  });
  return result;
}

mapArray([2, 5, 8], function(el) {
  return el + 3;
}); 

function filterArray(arr, func) {
  let result = [];
  executeforEach(arr, function(el) { 
    if(func(el)) {
      result.push(el)
    } 
  });
  return result;
}

filterArray([2, 5, 8], function(el) {
  return el > 3;
});

function getAmountOfAdultPeople(data) {
  let result = filterArray(data, function(el) {
    return el.age > 18;
  });
  return result.length;
}
getAmountOfAdultPeople(data);

function getGreenAdultBananaLovers(data) {
  let filtered = filterArray(data, function(el) {
    return el.age > 18 && el.favoriteFruit === 'banana' && el.eyeColor === 'green';
  });
  let result = mapArray(filtered, function(el) {
    return el.name;
  });
  return result;
}
getGreenAdultBananaLovers(data);

function keys(object) {
  let keysOfAnObject = [];
  for(let key in object) {
    keysOfAnObject.push(key);
  }
  return keysOfAnObject;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3}); 

function values(object) {
  let valuesOfAnObject = [];
  for(let key in object) {
    valuesOfAnObject.push(object[key]);
  }
  return valuesOfAnObject;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3}); 

function showFormattedDate(date) {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `Date: ${date.getDate()} of ${month[date.getMonth()]}, ${date.getFullYear()}`
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

function isEvenYear(date) {
  if (date.getFullYear() % 2 === 0) {
      return true;
  } else {
      return false;
  }
}
isEvenYear(new Date('2019-01-27T01:10:00')); 

function isEvenMonth(date) {
  if ((date.getMonth() + 1) % 2 === 0) {
      return true;
  } else {
      return false;
  }
}
isEvenMonth(new Date('2019-02-27T01:10:00')); 