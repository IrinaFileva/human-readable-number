module.exports = function toReadable (number) {
  const strNumOne = {
     0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: "eight", 9: 'nine' 
    };
  const strNumTwo = { 
      11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen',19: 'nineteen'
    };
  const strNumThree = { 
      10: 'ten', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'
    };
  const strNumFour = {
      100: 'one hundred', 200: 'two hundred', 300: 'three hundred', 400: 'four hundred', 500: 'five hundred', 600: 'six hundred', 700: 'seven hundred', 800: 'eight hundred', 900: 'nine hundred'
    };
  const string = number.toString() 

    if(number >= 0 && number < 10) return strNumOne[string];
    if(number > 10 && number < 20) return strNumTwo[string];
    if(number < 100 && string[1] === '0') return strNumThree[string]; 
    if(number < 100) return `${strNumThree[string[0] + '0']} ${strNumOne[string[1]]}`;
    if(number < 1000 && string[1] === '0' && string[2] === '0') return strNumFour[string]; 
    if(number < 1000 && string[1] === '0') return `${strNumFour[string[0] + '0' + '0']} ${strNumOne[string[2]]}`;
    if(number < 1000 && string[2] === '0') return `${strNumFour[string[0] + '0' + '0']} ${strNumThree[string[1] + '0']}`;
    if(number < 1000 && string[1] === '1') return `${strNumFour[string[0] + '0' + '0']} ${strNumTwo[string[1] + string[2]]}`;
    if(number < 1000) return `${strNumFour[string[0] + '0' + '0']} ${strNumThree[string[1] + '0']} ${strNumOne[string[2]]}`;
  
};




