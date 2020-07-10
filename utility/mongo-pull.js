let pull = (model, res) => {

    let data;
    
    try {
      
        data = model.find();
        
    } catch (err) {
        
        res.status(500);
        return err;
    
    }
    
    return data;
    
};

module.exports = pull;