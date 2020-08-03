const ToDo = require('../models/ToDo');
const mongoPull = require('../utility/mongo-pull');

exports.index_redirect = (req, res) => res.redirect('/home');

exports.index_home = async (req, res) => {
    let data = [];
    let todos;
    
    todos = await mongoPull(ToDo, res);
    if (res.statusCode === 500) { return res.json({ message: todos }); }
  
    for(let i in todos) {
      data.push(todos[i].entry);
    }
    
    return res.status(200).render('index', { result: data });
  };