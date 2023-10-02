function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

  fetch("https://anapioficeandfire.com/api/books")
    .then((res) => res.json())
    .then((data) => renderBooks(json[0]));

  // (json['0'].name));
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});





async function fetchBooks() {
  try {
    const response = await fetch("https://anapioficeandfire.com/api/books");
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const json = await response.json();
    return json;  // Return the JSON data
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;  // Re-throw the error to be caught by the caller
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  try {
    const books = await fetchBooks();  // Wait for the fetchBooks promise to resolve
    renderBooks(books);
  } catch (error) {
    console.error("Error rendering books:", error);
  }
});
