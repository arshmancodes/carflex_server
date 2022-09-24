const db = require('../utils/database');


exports.postAd = (req, res, next) => {

    

    db.execute('INSERT INTO ads(car_name, car_model, year, number_plate, mileage, price) VALUES (?, ?, ?, ?, ?, ?)', [req.body.carname, req.body.carmodel, req.body.year, req.body.number_plate, req.body.mileage, req.body.price]).then(([rows, fieldData]) => {
        res.status(200).json({
            message: "Ad Posted Successfully",
            success : true
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            message: err.body,
            success: false
        })
        
    })
}

exports.getAllAds = (req, res, next) => {
    // db.execute('SELECT * from ads').then(([rows, fieldData]) => {
    //     res.status(200).json(rows);
    // })
    res.status(200).send("This is the test application");
}