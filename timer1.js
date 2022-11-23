process.stdout.write('\x07');

setTimeout(() => {
  process.stdout.write('\x07|   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\x07/   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\x07-   ');
}, 9000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\x07\\   '); 
}, 10000);

setTimeout(() => {
  process.stdout.write('\x07-   ');
}, 15000);



// Edge Cases 
// No numbers are provided: Easy. It should just not beep and end immediately.
// An input is a negative number: Ignore/skip any numbers that are negative. 
// An input is not a number: Ignore/skip these as well.