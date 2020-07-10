const ToDo = require('../models/ToDo');
const mongoPull = require('../utility/mongo-pull');
const mongoPush = require('../utility/mongo-push');

exports.todo_add = async (req, res) => {
    const { entry } = req.body;

    const todo = new ToDo({
      entry: entry,
    });
    
    await mongoPush(todo, res);
    if (res.statusCode === 500) { return res.json({ message: todo }); }
    
    return res.status(200).redirect('/home');
};

exports.todo_update = async (req, res) => {
    const { record, entry } = req.body;
    let todos;
    
    todos = await mongoPull(ToDo, res);
    if (res.statusCode === 500) { return res.json({ message: todos }); }
  
    try {
  
      const updatedEntry = await ToDo.updateOne(
        { _id: todos[record - 1]._id},
        {$set: {
          entry: entry
        }});
  
    } catch (err) {
        
      return res.status(500).json({ message: err });
  
    }
    
    return res.status(200).redirect('/home');
  };

  exports.todo_remove = async function(req, res) {
    const { remove } = req.body
    let todos;
    
    todos = await mongoPull(ToDo, res);
    if (res.statusCode === 500) { return res.json({ message: todos }); }
  
    try {
  
      const removedEntry = await ToDo.deleteOne({ _id: todos[remove - 1]._id });
  
    } catch (err) {
        
      return res.status(500).json({ message: err });
  
    }
    
    return res.status(200).redirect('/home');
  };