//npm Packages
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const cookieParser = require("cookie-parser");
// amazingly bcrypt handles the salting of passwords and stores them together
// with the resulting password, so no need for separate salts and such.
const bcrypt = require("bcrypt");

//Local imports (currently just user)
const User = require("mongoose").model("User");

router.use(bodyParser.json());
router.use(cookieParser());
router.use(bodyParser.urlencoded({ extended: true }));

//Creates a new user, it's the backend for registration
router.post("/", (req, res) => {
  console.log("Creating user :" + req.body.username);

  //TODO(jeff): verify the user's email is whitelisted from the
  //google sheet
  bcrypt.hash(req.body.password, 10, function (err, hash) {
    if (err) {
      res.send(err);
    }
    let user = {
      username: req.body.username,
      password: hash,
      email: req.body.email,
      userType: req.body.userType,
      organization: req.body.organization
    };
    User.find({ username: req.body.username })
      .exec()
      .then(dupe => {
        if (dupe.length) {
          let err = "User already exists";
          res.status(405).send(err);
          //abort abort
          throw err;
        }
      })
      .then(() => {
        User.create(user, (err, user) => {
          if (err) {
            res.status(500).send(err);
            throw err;
          } else {
            console.log("User " + user._id + " registered");
            console.log("with organization: " + user.organization + " registered");
            res.send(user._id);
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
});

router.put('/:user_id', (req, res) => {
  User.findByIdAndUpdate(req.params.user_id, req.body, { upsert: true, new: true }, function (err, response) {
    if (err) {
      res.json("" + err);
    } else {
      res.json(response);
    }
  });
});

router.delete('/:user_id', (req, res) => {
  User.findByIdAndRemove(req.params.user_id, function (err, response) {
    if (err) {
      res.json("" + err);
    } else {
      res.json({ message: "User with id " + req.params.user_id + " removed" });
    };
  })
});

//This should really be a debug route only, don't leak our user database to the world
if (process.env.NODE_ENV !== "production") {
  router.get("/", (req, res) => {
    //DO NOT LEAK PASSWORDS
    let fields = "_id username email userType organization";
    User.find({}, fields, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Failed to retrieve users");
      } else {
        res.json(result);
      }
    });
  });
}

router.get("/logged_in", (req, res) => {
  User.findById(req.session.userId, (err, result) => {
    if (err || result == null) {
      // console.log(err);
      res.status(200).send({ status: "not_logged_in" });
    } else {
      res.status(200).send({
        loggedIn: "logged_in",
        userType: result.userType,
        mentorId: String(result.mentor) != "{}" ? result.mentor : null,
        orgId: String(result.organization) != "{}" ? result.organization : null
      });
    }
  });
});

router.get("/getUser/:user_id", (req, res) => {
  //DO NOT LEAK PASSWORDS
  let fields = "_id username email userType organization";
  User.findById(req.params.user_id, fields, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Failed to retrieve user");
    } else {
      res.json(result);
    }
  });
});

//TODO(jeff) auto-invalidate tokens
//TODO(jeff) prevent CSRF
//http://scottksmith.com/blog/2014/09/04/simple-steps-to-secure-your-express-node-application/
router.post("/login", (req, res) => {
  console.log("Auth user: " + req.body.email);
  User.find({ email: req.body.email }, (err, result) => {
    if (!result.length) {
      res.status(404).send("User not found!");
    } else {
      let user = result[0];
      bcrypt.compare(req.body.password, user.password, (err, success) => {
        if (success) {
          //set login cookie, response with userid
          // res.cookie("loggedin", user._id, { httpOnly: true, secure: true });
          req.session.userId = user._id;
          res.status(200).send(user._id);
        } else {
          res.status(401).send("Invalid credentials");
        }
      });
    }
  });
});

router.post("/logout", (req, res) => {
  //this will just invalidate the user's cookie
  res.clearCookie("loggedin");
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        RTCRtpSender.status(500).send(err);
      } else {
        return res.redirect("/");
      }
    });
  }
  res.status(200).send("Logged Out");
});

router.put("/:user_id", (req, res) => {
  let fields = "_id username email userType organization";
  User.findByIdAndUpdate(
    req.params.user_id,
    req.body,
    { upsert: true, new: true, fields: fields },
    (err, result) => {
      //TODO(jeff) make sure you can't have both mentor and organization
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(result);
    }
  );
});

//Find and get mentor by mentor id
router.get("/mentor/:mentor_id", (req, res) => {
  User.findOne({mentor: req.params.mentor_id}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  }).catch((err) => {res.send("" + err)});
})

router.put("/mentor/:mentor_id", (req, res) => {
  User.findOneAndUpdate({mentor: req.params.mentor_id}, {userType: req.body.userType}, {new: true}, (err, result) => {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
})

module.exports = router;
