document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-book-form');
    const bookList = document.getElementById('books');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const year = document.getElementById('year').value;

        if (title && author && year) {
            addBook(title, author, year);
            form.reset();
        }
    });

    function addBook(title, author, year) {
        const li = document.createElement('li');
        li.textContent = `Título: ${title}, Autor: ${author}, Ano: ${year}`;
        bookList.appendChild(li);
    }
});
