function debounce(func, delay) {
  let timeoutId;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

function testFunction1() {
  console.log("Test function 1 executed");
}
function testFunction2() {
  console.log("Test function 2 executed");
}

const debouncedFunc1 = debounce(testFunction1, 500);
const debouncedFunc2 = debounce(testFunction2, 1000);

debouncedFunc1(); // Should log 'Test function 1 executed' after 500ms
debouncedFunc2(); // Should log 'Test function 2 executed' after 1000ms
debouncedFunc1(); // This call should reset the timer for debouncedFunc1
