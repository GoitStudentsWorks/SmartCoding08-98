import { pageContainer } from "../main";
import { LocalStorage } from './localStorage.js';
const localStorage = new LocalStorage();

// прослуховування кнопки shopping List в хедері
const shopBtn = document.getElementById('shopping-link');
shopBtn.addEventListener('click', loadShoppingList);

function loadShoppingList () {
    pageContainer.innerHTML = '';

    // Видалення секції категорій в сайдбарі
    const categoryList = document.querySelector('.sidebar-category-container');
    if (categoryList !== null) {
        categoryList.remove();
    }

    // додати лоадер
    // Видалення слухача категорій книг з сайдбару 

    // Видалення слухача карточок книжок

    const dataShop = localStorage.getProducts();
    if(dataShop.length !== 0) {
        renderShoppingList(dataShop);
    } else {
        // видалити лоадер
        // рендер картинки
    }
    
}

function renderShoppingList(dataShop) {
    const markupCard = dataShop.map(({_id, book_image, title, author}) => 
        `<li class="category-book-card" id="${_id}">
        <div class="category-box-overlay">
            <img class="category-book-image" src="${book_image}" alt="Book">
            <p class="category-overlay">Quick view</p>
        </div>
        <div class="category-book-text">
            <h3 class="category-book-title">${title}</h3>
            <p class="category-book-description">${author}</p>
        </div>
        </li>`).join('');

    const markupPageShop = 
        `<h2 class="category-page-title">Shopping<span class="category-titel-color"> List</span></h2>
        <ul class="category-books">
        ${markupCard}
        </ul>`;
    // видалити лоадер
    pageContainer.insertAdjacentHTML('afterbegin', markupPageShop);
    
    // додавання слухача для видалення товару
    const cardBookShop = document.querySelectorAll('.category-book-card');
    cardBookShop.forEach(cardBook => {
        cardBook.addEventListener('click', delBookFromStorage);
    });
}

function delBookFromStorage (event) {
    const elemID = event.carrentTarget;
    console.log(elemID);
    // дістати елемент на який натиснули з id
    // localStorage.putProducts({id: });
    // const delBookMarkup = document.getElementById(id);
}
    
export default { shopBtn };