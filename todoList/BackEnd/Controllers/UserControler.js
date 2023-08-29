const User = require('../Models/UserModel')
const jwt = require('jsonwebtoken')

exports.SingUp = async (req, res) => {
    try {
        const { Email, FirstName, LastName, Password } = req.body;
        const ImagePath = "http://localhost:5000/" + req.file.path;
        const UserCheck = await User.findOne({ where: { Email } })
        if (!UserCheck) {
            const UserCreated = User.create(({ Email, FirstName, LastName, Password, Image: ImagePath }))
            return res.status(200).json({ success: true, msg: 'User Has Been Register' })
        }
        else {
            return res.status(400).json({ success: false, msg: 'Already Register With This Email Please Login' })
        }

    } catch (error) {
        console.log("SingUp Error : ", error)

    }
}


exports.Login = async (req, res) => {
    const { Email, Password } = req.body;
    try {
        const Checkuser = await User.findOne({ where: { Email } });
        if (Checkuser) {
            if (Checkuser.Password == Password) {
                const token = jwt.sign({ token: Checkuser }, "SecretKey")
                return res.status(200).json({ success: true, token: token })
            }

            else {
                return res.json({ success: false, msg: "Invalid Paasword Try Again" })
            }
        }
        else {
            return res.json({ success: false, msg: "Invalid Email Try Again" })
        }

    } catch (error) {
        res.status(500).json({ success: false, msg: "Login Failed Internal Error" })

    }
}

