let books = [];
let id = 0;

const read = (req, res, next) =>{
    return res.json(books);
};

const create = (req, res, next) => {
    const {title, author} = req.body;
    books.push({id, title, author});
    id++;
    res.json(books);
};

const update = (req, rest, next) => {
    const updateID = req.params.id;
    let index = books.findIndex(book => book.id === updateID);

    books[index] = {
        id: books[index].id,
        title: req.body.title || books[index].title,
        author: req.body.author || author[index].author
    };
    res.json(books);
};

const destroy = (req, res, next) =>{
    const deleteID = req.params.id;
    let bookID = books.findIndex(book => book.id === deleteID);
    books.splice(bookID, 1);
    res.json(books);
};

module.exports = {
    read,
    create,
    update,
    destroy
};
