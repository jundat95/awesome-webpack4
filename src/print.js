import lodashPrint from 'lodash';

export default function printMe() {
    var temp = lodashPrint.partition([1, 2, 3, 4], n => n % 2);
    console.log('I get called from print.js!', temp);
}