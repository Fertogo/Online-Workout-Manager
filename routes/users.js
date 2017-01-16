var express = require('express'),
    router  = express.Router(),
    userController = require('../controllers/user-controller'),
    mongoose   = require('mongoose'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.json());

// Get workouts for :userid
router.get('/getWorkouts/:userid', userController.getWorkouts);

// Show the workout-manager homepage
router.get('/home'/*?info=id,version*/, function(req, res, next){
  res.render("workout-manager", {});
});

/* Save user's workout */
router.put('/workout/save', userController.saveWorkouts);

// Mark a workout as completed
router.post('/completeWorkout/:id/:name/', userController.completeWorkout);

module.exports = router;
