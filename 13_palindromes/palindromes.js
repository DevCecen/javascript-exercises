// const palindromes = function (a) {
//     let array = [];
//     let reverseArr ="";
//     let string = "";
//     for(let i = 0; i<a.length; i++)
//     {
//         let harf = a[i].match(/[a-z0-9]/i);
//         if(harf !== null)
//         {
//             array.push(a[i].toLowerCase());
//             string = array.join("");
//         }
//     }
//     reverseArr = array.slice().reverse().join("");

//     if(string === reverseArr)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }


// };

const palindromes = function (string) {
  // Since we only consider letters and numbers, create a variable containing all valid characters
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
  const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

  // Create a new reversed string for comparison
  const reversedString = cleanedString.split('').reverse().join('');

  // Return the outcome of the comparison which will either be true or false
  return cleanedString === reversedString;
};

module.exports = palindromes;


// Do not edit below this line
module.exports = palindromes;
