const overlay=document.getElementById('overlay');
const modal=document.getElementById('modal');

class Book{
    constructor ( title, author, pages){
        this.title = form.title.value;
        this.author = form.author.value;
        this.pages = form.pages.value;
    }
}

let library=[];
let newBook;

function addBooktoLibrary(){
    event.preventDefault();
    newBook = new Book(title,author,pages);
    library.push(newBook);
    render();
    form.reset();
}
function render(){
    const librarium=document.querySelector('.library-list')
    const byebooks=document.querySelectorAll('.bookk')
    byebooks.forEach( byebook => {librarium.removeChild(byebook)});
    for(i=0;i<library.length;i++){
        addBook(library[i]);
    }   
}

function addBook(item){
    const libraryy = document.querySelector('.library-list')
    const bookItem = document.createElement('div');
    const title=document.createElement('div'); 
    const author=document.createElement('div');
    const pages=document.createElement('div');
    const remove=document.createElement('button');
    const edit=document.createElement('button');

    bookItem.classList.add('bookk')

    title.textContent=item.title;
    title.classList.add('title')
    bookItem.appendChild(title);

    author.textContent=item.author;
    author.classList.add('author')
    bookItem.appendChild(author);
    
    pages.textContent=item.pages;
    pages.classList.add('pages')
    bookItem.appendChild(pages);

    edit.addEventListener('click', () => {
        toggle_active();
        form.title.value=item.title;
        form.author.value=item.author;
        form.pages.value=item.pages;
        library.splice(library.indexOf(item),1);
    })

    edit.classList.add('edit')
    edit.textContent='EDIT';
    bookItem.appendChild(edit);

    remove.addEventListener('click',() =>{
        library.splice(library.indexOf(item),1);
        render();
    })
    remove.textContent='REMOVE';
    remove.classList.add('removebutton')
    bookItem.appendChild(remove);

    
    libraryy.appendChild(bookItem);


}

const button=document.querySelector('.add');

button.addEventListener('click',()=>{
toggle_active()})
const submit=document.querySelector('form button');
submit.addEventListener('click',()=>{
    toggle_inactive()
addBooktoLibrary()})
function toggle_active(){
    overlay.classList.add('active');
    modal.classList.add('active');
}
function toggle_inactive(){
    overlay.classList.remove('active');
    modal.classList.remove('active');
}
overlay.addEventListener('click', () =>
toggle_inactive())