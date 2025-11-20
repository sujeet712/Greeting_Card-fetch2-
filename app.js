let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';
let parsedString = JSON.parse(greeting);
console.log(parsedString);
let greetTextnew = parsedString.greetText;

let paraElement = document.getElementById("para");
let fromElement = document.getElementById("from");
let toElement = document.getElementById("to");
let fromName = parsedString.from;
let toName = parsedString.to;
fromElement.append(fromName);
toElement.append(toName);

paraElement.classList.add("text-bold");
paraElement.append(greetTextnew);
