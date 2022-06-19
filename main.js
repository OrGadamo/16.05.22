//jacob's Tasks

//14
function getRandomArray(length, randomlimit) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr[i] = Math.floor(Math.random() * (randomlimit + 1));
  }
  return arr;
}
function getNewArrayAboveNUM(arr, aboveme) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= aboveme) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
// console.log(getNewArrayAboveNUM(getRandomArray(10, 100), 20));

//15
function numberMyItemsInArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = i + "." + arr[i];
  }
  return arr;
}
// console.log(numberMyItemsInArray(getRandomArray(10, 100)));

//16
function evenItemsToString(arr, text) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      arr[i] = text;
    }
  }
  return arr;
}
// console.log(evenItemsToString(getRandomArray(10, 100), "even"));

//17
function getPrompt(text) {
  return prompt("please enter " + text);
}
// console.log(+getPrompt("number"), +getPrompt("number"));

//18
function getSum(num1, num2) {
  return num1 + num2;
}
// var number1 = +getPrompt("number");
// var number2 = +getPrompt("number");
// if (getSum(number1, number2) >= 13) {
//   console.log("bar mitzva");
// } else if (getSum(number1, number2) == 12) {
//   console.log("bat mitzva");
// } else {
//   console.log("kid");
// }

//19
function printByAge(firstname, lastname, age, num) {
  if (age > 18) {
    for (var i = 0; i < num; i++) {
      console.log(firstname + " " + lastname);
    }
  } else {
    console.log(firstname + " " + lastname);
  }
}
// printByAge("Or", "Gadamo", 23, 4);

//20
function printManyText(times, text) {
  for (var i = 0; i < times; i++) {
    console.log(text);
  }
}
// printManyText(1000, "javascript is not JAVA");

//21
// printManyText(+getPrompt("how many ors"), "or");

//22
// var name = getPrompt("name");
// var email = getPrompt("email");
// var age = +getPrompt("age");
// console.log("name " + name + " email " + email + " age " + age);
// if (age > 18) {
//   var count = +getPrompt("how many prints");
//   for (var i = 0; i < count; i++) {
//     console.log("name " + name + " email " + email + " age " + age);
//   }
// }

//23
// var count = +getPrompt("number of chances");
// do {
//   var user = getPrompt("name");
//   if (user == "or") {
//     alert("hi boss " + user);
//   } else {
//     alert("no entry");
//   }
//   count--;
// } while (count > 0 && user != "or");

//24
// var number1 = +getPrompt("number");
// var number2 = +getPrompt("number");
// for (var i = 1; i <= number1; i++) {
//   for (var j = 1; j <= number2; j++) {
//     document.writeln(i * j);
//   }
//   document.write("<br>");
// }

//25
function printMyArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// printMyArray(getRandomArray(5, 100));

//26
// var namearray = ["or", "chen", "david", "abayneh", "lior"];
// printMyArray(namearray);

//27
// var twodigitarray = getRandomArray(8, 89);
// for (var i = 0; i < twodigitarray.length; i++) {
//   twodigitarray[i] += 10;
// }
function printEvenArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      console.log(arr[i]);
    }
  }
}
// console.log(twodigitarray);
// printEvenArray(twodigitarray);

//28
function getUserNameArray(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr[i] = getPrompt("name");
  }
  return arr;
}
// var nameArray = getUserNameArray(5);
// console.log(nameArray);

//29
function getUserNumberArray(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr[i] = +getPrompt("number");
  }
  return arr;
}
function printOddItemsArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      console.log(arr[i]);
    }
  }
}
// printOddItemsArray(getUserNumberArray(7));

//30
// var randomArray = [1, "re", 14, 5, "tree", "more", 22, "random"];
// console.log(randomArray);
// for (var i = 0; i < randomArray.length; i++) {
//   if (randomArray[i] * 0 != 0) {
//     randomArray[i] = "not_number";
//   }
// }
// console.log(randomArray);

//31
function getUserEvenArray(length) {
  var arr = [];
  var i = 0;
  while (length > 0) {
    var check = +getPrompt("number");
    if (check % 2 == 0) {
      arr[i++] = check;
      length--;
    }
  }
  return arr;
}
// console.log(getUserEvenArray(10));

//32
function printAreaPerimeter() {
  var width = +getPrompt("width");
  var height = +getPrompt("height");
  console.log("the area is " + width * height);
  console.log("the perimeter " + 2 * (width + height));
}
// printAreaPerimeter();

//33
function checkOrder() {
  var num1 = +getPrompt("first number");
  var num2 = +getPrompt("second number");
  var num3 = +getPrompt("third number");
  if (num1 == num2 - 1 && num2 == num3 - 1) {
    console.log("ascending order");
  } else if (num1 == num2 + 1 && num2 == num3 + 1) {
    console.log("descending order");
  } else {
    console.log("no order");
  }
}
// checkOrder();

//34
function printDigits(num) {
  num = parseInt(num);
  if (num == 0) {
    console.log(num);
  }
  while (num != 0) {
    console.log(num % 10);
    num = (num - (num % 10)) / 10;
  }
}
// printDigits(getPrompt("number to divide"));
