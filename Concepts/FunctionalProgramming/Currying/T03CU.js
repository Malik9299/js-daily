const updateElement = (id) => (content) =>
  (document.querySelector(`#${id}`).textContent = content);

const updateHeaderText = updateElement("header");

console.log(updateHeaderText("New Text")); // Test in browser
