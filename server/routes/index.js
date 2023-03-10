const express = require('express')
const router = express.Router()

exports.loginRoute = router.post("/login" , require("../controllers/auth").handelLoginUser)
exports.signInRoute = router.post("/signIn" , require("../controllers/auth").handelSignInUser)
exports.creatContactRoute = router.post("/creatContact" , require("../controllers/contact").handelCreateContact)
exports.showContactRoute = router.get("/showContacts" , require("../controllers/contact").handelShowContact)
exports.updateContactRoute = router.post("/updateContacts" , require("../controllers/contact").handelUpdateContact)
exports.removeContactRoute = router.post("/removeContact" , require("../controllers/contact").handelRemoveContact)
