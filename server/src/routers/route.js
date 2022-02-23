const express = require('express');
const router = new express.Router();
const multer = require('multer');
const dStructure = require("../model/schema");
const registration = require("../model/regschema");
var urlencodedParser = express.urlencoded({ extended: false });

//upload Profile photo
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/upload');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});
const upload = multer({ storage: storage });

//registration
// router.post("/register", urlencodedParser, async (req, res) => {
//     try {
//         var data = {
//             name: req.body.name,
//             mobile: req.body.mobile,
//             email: req.body.email,
//             password: req.body.password
//         }
//         const addingRecord = new registration(data)
//         const insert = await addingRecord.save();
//         res.status(200).send(insert);
//     } catch (e) {
//         res.status(400).send(e);
//     }
// })

// Registration 
router.post('/register', urlencodedParser, async (req, res) => {

    const { name, email, mobile, password } = req.body;

    if (!name || !email || !mobile || !password) {
        return res.status(422).json({ error: " plz filles all details " });
    }
    try {
        const userExist = await registration.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: " Email already exist" });
        } else {
            const user = new registration({ name, email, mobile, password });
            await user.save();

            res.status(200).json({ message: "User Registered Sucessfully" });
        }


    } catch (err) {
        console.log(err);
    }
})

//login
router.post('/login', urlencodedParser, async (req, res) => {

    try {
        var data = {
            email: req.body.email,
            password: req.body.password
        };
        const dataLogin = await registration.find(data);

        if (dataLogin.length > 0) {
            res.send({ status: true, data: [], message: "User LoggedIn Sucessfully" });
        } else {
            res.send('Wrong Password');
        }
    }
    catch (e) {
        console.log(e);
    }
})

// we will handle post
router.post("/adds", urlencodedParser, upload.single('profile'), async (req, res) => {
    try {

        var data = {
            ranking: req.body.ranking,
            name: req.body.name,
            mobile: req.body.mobile,
            email: req.body.email,
            address: req.body.address,
            country: req.body.country,
            state: req.body.state,
            city: req.body.city,
            pincode: req.body.pincode,
            profile: req.file.filename
        }
        const addingNewrecod = new dStructure(data)
        const insertData = await addingNewrecod.save();
        res.status(200).send(insertData);
    } catch (e) {
        res.status(400).send(e);
    }
})

// we will handle get request for all data
router.get("/adds", urlencodedParser, async (req, res) => {
    try {
        const getAllData = await dStructure.find({}).sort({ "ranking": 1 });

        res.send(getAllData);
    } catch (e) {
        res.status(400).send(e);
    }
})

// we will handle get request for individual data
router.get("/adds/:id", urlencodedParser, async (req, res) => {
    try {
        const _id = req.params.id;
        const getData = await dStructure.findById(_id);

        res.send(getData);
    } catch (e) {
        res.status(400).send(e);
    }
})

// we will handle patch request or updating data
router.patch("/adds/:id", urlencodedParser, async (req, res) => {
    try {
        const _id = req.params.id;
        const getData = await dStructure.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(getData);
    } catch (e) {
        res.status(500).send(e);
    }
})

// we will handle delete request or updating data
router.delete("/adds/:id", urlencodedParser, async (req, res) => {
    try {
        const _id = req.params.id;
        const getData = await dStructure.findByIdAndDelete(_id);
        res.send(getData);
    } catch (e) {
        res.status(500).send(e);
    }
})

module.exports = router;