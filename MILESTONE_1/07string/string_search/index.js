/*     String Search Methods
            ::    String indexOf()    : it return the index(position) the first occurence of specific text in string
            ::    String lastIndexOf(): it return the index(position) the last occurence of specific text in string
            ::    String search()     : it searches the string for string (or regular expression) and return the index of matches of string
            ::    String match()      : it methods return an array of matching string against string(or regular expression)
            ::    String matchAll()   : it return an iterator of matching string against string(or regular expression).
            ::    String includes()   : it return true if the text is present in string otherwise return false
            ::    String startsWith() : return true if the string(need to specify starting index of given string) in present otherwise false
            ::    String endsWith()   : opposite to startwith() and also same as include take argunment

*/

//  ::    String indexOf()    : it return the index(position) the first occurence of specific text in string
// it return -1 if the text is not present in string
var str = "My name is babloo";
console.log(`first index of name in ${str} string is: ${str.indexOf("name")}`);
console.log(`last index of name in ${str} string is: ${str.lastIndexOf("name")}`);
let text = "Please locate where 'locate' occurs!";
console.log(text.length);
console.log(` last index of "locate" in ${text} is: ${text.lastIndexOf("locate", 15)}`);

//::    String search()     : it searches the string for string (or regular expression) and return the index of matches of string
var texx = "Please locate where 'locate' occurs!";
console.log(`search index of 'locate' in ${texx} is : ${texx.search("locate")}`);
console.log(`search index of 'locate' in ${texx} is : ${texx.search(/locate/)}`);   // regular expression

// ::    String match()      : it methods return an array of matching string against string(or regular expression)
var texx = "The rain in SPAIN stays mainly in the plain";
var out = texx.match('ain');        // search for ain will geaven about out
console.log(out);
var out = texx.match(/ain/);        // search using regular expression
console.log(out);
var out = texx.match(/ain/g);       // used for global match
console.log(out);
var out = texx.match(/ain/gi);      // used for global and case-insensitive search
console.log(out);

// ::    String matchAll()   : it return an iterator of matching string against string(or regular expression).
console.log("****************mathc all****************");
var texx = "I have cat, my cat name is ...., cat drink milk, cat is looking very cute";
var out = texx.matchAll('cat');
console.log(Array.from(out));           // how to iterator on an iterator
var out = texx.matchAll(/cat/g);
console.log("***********global match***********")
console.log(Array.from(out));           // how to iterator on an iterator
var out = texx.matchAll(/cat/gi);
console.log("***********global search with incasesensetive**********");
console.log(Array.from(out));           // how to iterator on an iterator

 //::    String includes()   : it return true if the text is present in string otherwise return false
 // it also take another parameter as index where to find and is case sensetive
 var texx = "Hey guys i'm babloo kumar ";
 console.log(texx.includes("guys", 8));     // false
console.log(texx.startsWith("babloo", 13));
console.log(texx.endsWith("babloo", 19));

