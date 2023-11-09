/*   
        --> String length           = The length property return the length of string

        *********************Extracting string parts*********************
        there are 3 methods to extracting a part of string
                i> slice(start, end)     : it return the extracted part of string in new string
                        it take two argunment(start_index, end_index)==end not included
                        if argunment is negative position is counted from end index
                ii>substring(start,end)  : It is same as slice the only difference is to start and
                        end values is less than 0 is treated as 0th index of substring()
                iii>substr(start, length): It is same as slice the only difference is the second argunment
                        is the length of the extracted part
                        if the parameter is negative is treated as last index
        ******************************************************************

        --> String replace()         = It replace the specific part of string return with new string
                        it replace the only first matched string part, if you want to replace all matches need to 
                        regular expression
                        ** Regular expressions are written without quotes.
                        ** To replace all matches, use a regular expression with a /g flag (global match):
        --> String replaceAll()      = It replace the all matches of the given string

        --> String toUpperCase()     = string is converted to upperCase with toUpperCase()
        --> String toLowerCase()     = string is converted to lowelCase with toLowerCase()

        --> String concat()          = concat() join two or more string into a single string
        --> String trim()            = trim() methods remove the white spaces from the both sides
        --> String trimStart()       = remove white spaces from start
        --> String trimEnd()         = remove white spaces from end

        --> String padStart()        = it gives padding from the start with given argument
        --> String padEnd()          = it gives padding from the end with given argument

        ********************************Extracting string character**********************************
        There are 3 methods to extract the string charectars
        --> String charAt(position)  = it return the character at the specific position
        --> String charCodeAt(position)= it return the unicode of the character at a spcific index position in string
                        it gives the number between 0 to 65535
        --> String property access = string_name[index_number];
        --> String split()            = it is used to convert string into array form with seperated by
        split on the basis of (",")
        split on the basis of (" ")
        splic on the basis of ("|")


*/

// --> String length  = The length property return the length of string
var str = "my name is Babloo the Babloo"
console.log(`length of the ${str} is ${str.length}`);

// extracting string parts(slice(start, end), substring(start, end), substr(start,length))
console.log(`use of slice on ${str} from index 7 to 12 : ${str.slice(6, 12)}`);
console.log(`use of substring on ${str} from index 7 to 12 : ${str.substring(6, 12)}`);
console.log(`use of substr on ${str} from index 7 to 12 : ${str.substr(6, 5)}`);

// replacing the part of string
console.log(`replacing ${str} Babloo as Mohit is: ${str.replace("Babloo", "Mohit")}`);
// replace all matches
console.log(`replaceing ${str} "Babloo" with "Mohit" is :  ${str.replace(/Babloo/g, "Mohit")}`); 

// replace all
var str = "I have a cat, my cat name is meuu, cat has four legs cat has good health";
console.log(`Replacing Cat from ${str} into Dog, new string is: ${str.replaceAll(/cat/g, "dog")}`);

// uses of toUpperCase() an toLowerCase()
var str = "my name is babloo kumar";
console.log(`Converted ${str} into uppercase\nResult: ${str.toUpperCase()}`);
var str = "MY NAME IS BABLOO KUMAR, i'm good boy";
console.log(`converted ${str} into lowerCase\nResul: ${str.toLowerCase()}`);

// uses of concat() to join string
var str1 = "my ";
var str2 = "name is ";
var str3 = "Babloo Kumar";
console.log(`concat the string1 ${str1}, string2 ${str2} and string3 ${str3} is\nResult: ${str1.concat(str2,str3)}`);

// trim() removing the white spaces
var str = "    my name     is babloo                            kumar";
var res = str.trim();
console.log(`length of ${str} = ${str.length}`);
console.log(`length of the trimed string is ${res} = ${res.length}`);
console.log(`trim method perform on ${str}\nResul: ${res}`);

// padding in string uses padStart(legnth_to_pad, "value_to_pad") same as in padEnd()
var str ="Mohit";
str = str.padStart(4, "Babloo");
str = str.padEnd(4, "Babloo");
console.log(`uses of padStart(), 4times\nResult: ${str}`);
console.log(`uses of padEnd(), 4times\nResult: ${str}`);

// extracting string character
// use of charAt(positon);
var str = "My name is babloo";
console.log(` extracting 1first index value of ${str} = ${str.charAt(1)}`);
console.log(` extracting unicode of 1first index value of ${str} = ${str.charCodeAt(1)}`);

// use of split() to converting string into an array
var str = "My name is babloo";
var res = str.split("|");
console.log(`Original string: ${str}and splited string is\n${res}`);
for(let i = 0; i < res.length; i++)
{
        console.log(res[i]);
}
res[3] = "mohit"; // it replace the value at index 3 but rest are as undefined