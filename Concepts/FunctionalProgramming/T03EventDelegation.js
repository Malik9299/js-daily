// Event delegation is a technique in JavaScript where a single event listener is added to a parent element to manage events for multiple child elements. Instead of adding an event listener to each child element, you add one listener to a common ancestor. This parent element listens for events that bubble up from the children and handles them accordingly.

// How Event Delegation Works
// When an event is triggered on an element, it propagates (bubbles) up through the DOM tree to its ancestors. This propagation allows a single event handler on a parent element to handle events triggered by its children. Here’s a basic example:

{
  /* <ul id="parent">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  document.getElementById('parent').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      console.log('Clicked item:', event.target.textContent);
    }
  });
</script> */
}

// In this example, the click event listener is added to the ul element (the parent). When any li element inside the ul is clicked, the event bubbles up to the ul, and the event listener is triggered. The event.target property identifies the actual element that was clicked.

// Why Event Delegation is Useful

// 1. Performance Improvement:

// Fewer Event Listeners: Instead of attaching an event listener to each child element, which can be numerous, you attach a single listener to a parent element. This reduces the memory usage and improves performance.
// Reduced Memory Usage: By having fewer event listeners, you reduce the overall memory footprint of your application.

// Dynamic Content Handling:

// Handling Future Elements: Event delegation allows you to handle events on elements that are added to the DOM dynamically after the initial page load. Since the parent element’s event listener handles all child elements, it can manage events for new children added later.

// Simplified DOM Manipulation: Adding or removing child elements does not require attaching or detaching event listeners.

// Simplified Code Management:

// Centralized Event Handling: With event delegation, all related event handling logic is centralized in one place, making the code easier to manage and debug.
// Cleaner Code: You avoid repetitive code for adding and removing event listeners on multiple elements.
