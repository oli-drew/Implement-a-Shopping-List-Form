const shoppingFormEl = $("#shopping-form");
const shoppingListEl = $("#shopping-list");
const userInput = $("#shopping-input");

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
const submission = () => {
  event.preventDefault();
  $("<li>").appendTo(shoppingListEl).text(userInput.val());
  userInput.val("");
};

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.submit(submission);
