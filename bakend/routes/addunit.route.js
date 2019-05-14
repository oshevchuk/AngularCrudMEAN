const express = require('express');
const app = express();
const adddUnitRoutes = express.Router();

let AddUnit = require('../models/AddUnit');

addUnitRoutes.route('/add').post(function(req, res) {
  let addUnit = new AddUnit(req.body);
  addUnit = new AddUnit(req.body);
  AddUnit.save()
    .then(game => {
      res.status(200).json({'addUnit': 'AddUnit in added successfully'});
    })
    .catch(err => {
      res.status(400).send('unable to save to database - error')
    });
});

addUnitRoutes.route('/').get(function(req, res) {
  AddUnit.find(function(err, addUnits) {
    if (err) {
      console.log(err);
    } else {
      res.json(addUnits);
    }
  });
});

addUnitRoutes.route('/edit/:id').get(function(req, res) {
  let id = req.params.id;
  AddUnit.findById(id, function(err, addUnit) {
    res.json(addUnit);
  })
});

addUnitRoutes.route('/update/:id').post(function(req, res) {
  AddUnit.findById(req.params.id, function(err, addUnit) {
    if (!addUnit)
      return next(new  Error('could not load document'));
    else {
      addUnit.unitName = req.body.unitName;
      addUnit.unitPrice = req.body.unitPrice;

      addUnit.save().then(addUnit => {
        res.json('update complete');
      })
      .catch(err => {
        res.status(400).send('unable to update database');
      });
    }
  });
});

addUnitRoutes.route('/delete/:id').get(function(req, res) {
  AddUnit.findByIdAndRemove({_id: req.params.id}, function(err, addUnit) {
    if (err) {
      res.json(err);
    } else {
      res.json('succsfully removed');
    }
  });
});

module.exports = addUnitRoutes;