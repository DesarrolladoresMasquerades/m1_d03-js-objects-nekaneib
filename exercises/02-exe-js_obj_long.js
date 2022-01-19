const user = { 
    name: 'Nekane', 
    surname: 'Ibarlucea',
    id: 12,
 };

 const user2 = {
    name: 'Paco', 
    surname: 'Martin',
    id: 13,
 }

 const books = 
 [ book1 = {
    title: 'Fundation',
    author: 'Asimov',
    isbn: '0316769487',
    category: 'Cience Fiction'
    },

 book2 = {
    title: 'Demian',
    author: 'Herman Hesse',
    isbn: '0446310786',
    category: 'Classic Literature'
    }
]

user.favBook = books

const library = [];

library.push(user, user2)
const book3 = {
    title: 'Portico',
    author: 'Frederick Pohl',
    isbn: '07656310786',
    category: 'Cience Fiction'
}

user.favBook.push(book3)
user2.favBook = books[1]

for (key in library){
    console.log(`The ${user} has ${library.key.books}`)
}

console.log(library)