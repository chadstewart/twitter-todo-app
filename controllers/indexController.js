const ToDo = require('../models/ToDo');
const mongoPull = require('../utility/mongo-pull');

exports.index_redirect = (req, res) => res.redirect('/home');

exports.index_home = async (req, res) => {
    let data = [];
    let todos;
    
    try {
  
      todos = await mongoPull(ToDo);
      
    } catch (err) {
        
      return res.status(500).json({ message: err });
  
    }
  
    for(let i in todos) {
      data.push(todos[i].entry);
    }
    
    return res.status(200).render('index', { result: data });
  };