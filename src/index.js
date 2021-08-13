module.exports = function toReadable(num) {
    let baseNumber = [
        'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen',
        'nineteen', 'twenty'
    ];
    let dozents = [
        'twenty', 'thirty', 'forty', 'fifty',
        'sixty', 'seventy', 'eighty', 'ninety'
    ];

    let remainderDozent = num % 10;
    let remainderHundred = num % 100;

    if (num === 0) {
        return 'zero';
    } else if (num <= 20) { // от 1 до 20 
        return `${baseNumber[num - 1]}`;
    } else if (num <= 90 && remainderDozent === 0) { // десятки (10,20..90)
        return `${dozents[num/10 - 2]}`;
    } else if (num < 100) { // двухзначные числа
        let firstNum = num.toString()[0];
        let twoNum = num.toString()[1];
        return `${dozents[firstNum - 2]} ${baseNumber[twoNum - 1]}`;
    } else if (num <= 900 && remainderHundred === 0) { // сотни (100, 200...900)
        let firstNum = num.toString()[0];
        return `${baseNumber[firstNum - 1]} hundred`;
    } else if (num <= 999) { // некруглые трехзначные (567, 214..999)
        let firstNum = num.toString()[0];
        let twoNum = num.toString()[1];
        let threeNum = num.toString()[2];

        let lastNum = num.toString()[1] + num.toString()[2];

        if (lastNum <= 20) { // трехзначные числа (окончание до 20 (109,512,..920))
            return `${baseNumber[firstNum - 1]} hundred ${baseNumber[lastNum - 1]}`;
        } else if (lastNum > 20 && remainderDozent === 0) {
            return `${baseNumber[firstNum - 1]} hundred ${dozents[twoNum -2]}`;
        } else { //некруглые трехзначные 
            return `${baseNumber[firstNum - 1]} hundred ${dozents[twoNum - 2]} ${baseNumber[threeNum - 1]}`;
        }
    }

}