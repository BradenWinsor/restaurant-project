module.exports = {
    getMenu: function(req, res) {
        console.log('getting the menu master chef')
        const db = req.app.get('db');
        db.get_all_food()
        .then(function(response) {
            res.status(200).send(response)
        })
        .catch(function(error) {
            console.log(error);
            res.status(500).send(error)
            })
    }
};