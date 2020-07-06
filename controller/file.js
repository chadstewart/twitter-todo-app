const xyz = async function(req, res) {
  const { remove } = req.body
  let todos;

  try {

    todos = await mongoPull(ToDo);

  } catch (err) {

    return res.status(500).json({ message: err });

  }

  try {

    const removedEntry = await ToDo.remove({ _id: todos[remove - 1]._id });

  } catch (err) {

    return res.status(500).json({ message: err });

  }

  return res.status(200).redirect('/home');
}

modules.exports = xyz