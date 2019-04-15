// npm Packages
const express = require('express');;
const bodyParser = require('body-parser');
const router = express.Router();
const nodemailer = require('nodemailer');

// Local imports
const Organization = require('mongoose').model('Organization');
const Mentor = require('mongoose').model('Mentor');

router.get('/test', (req, res) => {
    res.send('test successful');
});

//For all organizations
router.post('/', (req,res) => {
    console.log(req.body);
    Organization.create(req.body, (err, organization) => {
        if (err) {
            res.send("" + err);
        } else {
            console.log("Created Organization");
            res.send(organization);
        }
    });
});

router.get('/', (req, res) => {
    console.log("Getting all Organizations");
    Organization.find({})
        .exec().then((organization) => res.send(organization))
        .catch((err) => {
            res.send("" + err);
        });
});

//For specific organization
router.get('/:organization_id', (req, res) => {
    Organization.findById(req.params.organization_id).then((organization) => res.send(organization))
      .catch((err) => res.send("" + err));
});

router.put('/:organization_id', (req, res) => {
    Organization.findByIdAndUpdate(req.params.organization_id, req.body, {upsert: true, new: true}, function(err, response) {
        if (err) {
            res.json("" + err);
        } else {
            res.json(response);
        }
    });
});

router.delete('/:organization_id', (req, res) => {
    Organization.findByIdAndRemove(req.params.organization_id, function(err, response) {
        if (err) {
            res.json("" + err);
        } else {
            res.json({message: "Organization with id " + req.params.organization_id + " removed"});
        };
    })
});

router.post('/:organization_id/email', function (req, res) {
    Organization.findById(req.params.organization_id).then(function(organization) {
        if (organization.mentors == null) {
            organization.mentors = [];
        }
        var mentors = organization.mentors;
        for (var i = 0; i < mentors.length; i++) {
            var m = mentors[i];
            Mentor.findById(m._id).then(function(thisMentor) {
                var transporter = nodemailer.createTransport({
                    service: 'gmail.com', 
                    auth: {
                        user: 'email',
                        pass: 'password'
                    }
                });
                var mailOptions = {
                    from: 'Test',
                    to: 'alex.kelso@gatech.edu',
                    //thisMentor.email,
                    subject: req.body.subject,
                    text: req.body.content,
                    attachments: [
                        {
                            filename: 'test file',
                            path: 'https://imgur.com/to4pSUZ'
                        }
                    ]
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    console.log(info)
                    if (error) {
                        console.log(error);
                    }
                    console.log('Message %s sent: %s', info.messageId, info.response);
                    res.send(info.responseCode)
                });
            });
        }
    }).catch(function () {
        console.log("oh no")
    });
});

//For all members in organization
router.get('/:organization_id/members', (req, res) => {
    Organization.findById({
        _id: req.params.organization_id
    }).then((organization) => res.send(organization.members))
      .catch((err) => res.send("" + err));
});

router.post('/:organization_id/members', (req, res) => {
    Organization.findById({
        _id: req.params.organization_id
    }).then(function(organization) { 
        if (organization.members == null) {
            organization.members = [];
        }
        var newMember = {"member": req.body.member, "id": organization.members.length};
        organization.members.push(newMember);
        organization.save((e, organization) => res.send(organization));
    })
      .catch((err) => res.send("" + err));
});

//For specific member in organization
router.get('/:organization_id/members/:member_id', (req, res) => {
    Organization.findById(req.params.organization_id).then(function(organization) { 
        if (organization.members == null) {
            organization.members = [];
        }
        var members = organization.members;
        var requestedMember = null;
        for (var i = 0; i < members.length; i++) {
            var m = members[i];
            if (m._id == req.params.member_id) {
                requestedMember = m;
                break;
            }
        }
        res.send(requestedMember) })
      .catch((err) => res.send("" + err));
});

router.put('/:organization_id/members/:member_id', (req, res) => {
    Organization.findById(req.params.organization_id).then(function(organization) { 
        if (organization.members == null) {
            organization.members = [];
        }
        var members = organization.members;
        var m = null;
        for (var i = 0; i < members.length; i++) {
            m = members[i];
            if (m._id == req.params.member_id) {
                m.member = req.body.member;
                break;
            }
        }
        organization.save((e, organization) => res.send(m.member))})
      .catch((err) => res.send("" + err));
});

router.delete('/:organization_id/members/:member_id', (req, res) => {
    Organization.findById(req.params.organization_id).then(function(organization) { 
        if (organization.members == null) {
            organization.members = [];
        }
        var members = organization.members;
        for (var i = 0; i < members.length; i++) {
            var m = members[i];
            if (m._id == req.params.member_id) {
                organization.members.splice(i, 1);
                break;
            }
        }
        organization.save((e, organization) => res.send(m.member))})
      .catch((err) => res.send("" + err));
});

//For all mentors in organization
router.get('/:organization_id/mentors', (req, res) => {
    Organization.findById({
        _id: req.params.organization_id
    }).then((organization) => res.send(organization.mentors))
      .catch((err) => res.send("" + err));
});

router.post('/:organization_id/mentors', (req, res) => {
    Organization.findById({
        _id: req.params.organization_id
    }).then(function(organization) { 
        if (organization.mentors == null) {
            organization.mentors = [];
        }
        organization.mentors.push(req.body.mentor);
        organization.save((e, organization) => res.send(organization));
    })
      .catch((err) => res.send("" + err));
})

//For specific mentor in organization
router.get('/:organization_id/mentors/:mentor_id', (req, res) => {
    Organization.findById(req.params.organization_id).then(function(organization) { 
        if (organization.mentors == null) {
            organization.mentors = [];
        }
        var mentors = organization.mentors;
        var requestedMentor = null;
        for (var i = 0; i < mentors.length; i++) {
            var m = mentors[i];
            if (m == req.params.mentor_id) {
                requestedMentor = m;
                break;
            }
        }
        res.send(requestedMentor) })
      .catch((err) => res.send("" + err));
});


//WARNING: DOES NOT WORK PROPERLY
router.put('/:organization_id/mentors/:mentor_id', (req, res) => {
    Organization.findByIdAndUpdate(req.params.organization_id).then(function(organization) { 
        if (organization.mentors == null) {
            organization.mentors = [];
        }
        var mentors = organization.mentors;
        var m = null;
        for (var i = 0; i < mentors.length; i++) {
            m = mentors[i];
            if (m == req.params.mentor_id) {
                m = req.body.mentor;
                organization.mentors[i] = m;
                break;
            }
        }
        organization.save((e, organization) => res.send(m))})
      .catch((err) => res.send("" + err));
});

router.delete('/:organization_id/mentors/:mentor_id', (req, res) => {
    Organization.findById(req.params.organization_id).then(function(organization) { 
        if (organization.mentors == null) {
            organization.mentors = [];
        }
        var mentors = organization.mentors;
        for (var i = 0; i < mentors.length; i++) {
            var m = mentors[i];
            if (m == req.params.mentor_id) {
                organization.mentors.splice(i, 1);
                break;
            }
        }
        organization.save((e, organization) => res.send(m))})
      .catch((err) => res.send("" + err));
});

//For all leaders in organization
router.get('/:organization_id/leaders', (req, res) => {
    Organization.findById({
        _id: req.params.organization_id
    }).then((organization) => res.send(organization.leaders))
      .catch((err) => res.send("" + err));
});

router.post('/:organization_id/leaders', (req, res) => {
    Organization.findById({
        _id: req.params.organization_id
    }).then(function(organization) { 
        if (organization.leaders == null) {
            organization.leaders = [];
        }
        var newLeader = {"leader": req.body.leader, "id": organization.leaders.length};
        organization.leaders.push(newLeader);
        organization.save((e, organization) => res.send(organization));
    })
      .catch((err) => res.send("" + err));
});

//For specific leader in organization
router.get('/:organization_id/leaders/:leader_id', (req, res) => {
    Organization.findById(req.params.organization_id).then(function(organization) { 
        if (organization.leaders == null) {
            organization.leaders = [];
        }
        var leaders = organization.leaders;
        var requestedLeader = null;
        for (var i = 0; i < leaders.length; i++) {
            var m = leaders[i];
            if (m._id == req.params.leader_id) {
                requestedLeader = m;
                break;
            }
        }
        res.send(requestedLeader) })
      .catch((err) => res.send("" + err));
});

router.put('/:organization_id/leaders/:leader_id', (req, res) => {
    Organization.findById(req.params.organization_id).then(function(organization) { 
        if (organization.leaders == null) {
            organization.leaders = [];
        }
        var leaders = organization.leaders;
        var m = null;
        for (var i = 0; i < leaders.length; i++) {
            m = leaders[i];
            if (m._id == req.params.leader_id) {
                m.leader = req.body.leader;
                break;
            }
        }
        organization.save((e, organization) => res.send(m.leader))})
      .catch((err) => res.send("" + err));
});

router.delete('/:organization_id/leaders/:leader_id', (req, res) => {
    Organization.findById(req.params.organization_id).then(function(organization) { 
        if (organization.leaders == null) {
            organization.leaders = [];
        }
        var leaders = organization.leaders;
        for (var i = 0; i < leaders.length; i++) {
            var m = leaders[i];
            if (m._id == req.params.leader_id) {
                organization.leaders.splice(i, 1);
                break;
            }
        }
        organization.save((e, organization) => res.send(m.leader))})
      .catch((err) => res.send("" + err));
});
module.exports = router;