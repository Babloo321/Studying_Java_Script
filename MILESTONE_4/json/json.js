/*
JSON is a format for storing and transporting data.
JSON is often used when data is sent from a server to a web page.
What is JSON?
JSON stands for JavaScript Object Notation
JSON is a lightweight data interchange format
JSON is language independent *
JSON is "self-describing" and easy to understand
* The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.

*****JSON Syntax Rules*****
Data is in name/value pairs
Data is separated by commas
Curly braces hold objects
Square brackets hold arrays
*/

let text = `{
    "employess":[
        {"name":"john", "age" :33},
        {"name": "mahi", "age": 22},
        {"name": "rohi", "age": 21}
    ],
    "person":[
        {"name":"Babloo", "age":33},
        {"name":"Vickkey", "age":22}
    ]
}`
const obj = JSON.parse(text);
for(let key in obj) {
    console.log(key);
    console.log(obj[key]);
}
