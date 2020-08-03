let push = (data, res) => {

    try {
    
        data.save();
    
      } catch (err) {
    
        res.status(500)
        return err;
    
    }

};

module.exports = push;