const { User } = require('../models');
const bcrypt = require('bcryptjs');


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: 'All fields are mandatory!'
            });
        }
        const userData = await User.findOne({
            where: {
              email: email,
            },
        })
        if (!userData || !await bcrypt.compare(password, userData.password)) {
            res.status(401).json({
                message: "Email or Password is Incorrect"
            });
            return;
        }
        res.status(200).json({message: "Login Successfully"})
            
    } catch (err) {
        res.status(500).json(err); 
    }
};

exports.register = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        if (!email || !password || !name) {
            return res.status(400).json({
                message: 'All fields are mandatory!'
            });
        }
        const userData = await User.findOne({
            where: {
              email: email,
            },
        })
        if (userData && userData.dataValues.email) {
            res.status(409).json({ message: 'Email Already Registered'});
            return;
        }
        bcrypt.hash(password, 8, function(err, hash) {
            User.create({
                email: email,
                password: hash,
                name: name,
            }).then(() => {
                res.json({message: 'User has been created'});
            });
        });    
    } catch (err) {
        res.status(500).json(err);
    }
}
