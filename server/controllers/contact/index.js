const {Contact} = require('./../../model/Contacts/index.js');

const handelCreateContact = async (req, res) => {
    var existContact = await Contact.findOne({ createdBy: req.headers.authorization })
    if (existContact) return res.status(400).json({ massage: "you can't save contact anymore " })
    console.log()
    if (!req.body.name) return res.status(400).json({ massage: "heyyyy noob name is required!?" })
    if (!req.body.phoneNumber) return res.status(400).json({ massage: "heyyyy noob phone number is required!?" })
    existContact = await Contact.findOne({ phoneNumber: req.body.phoneNumber })
    if (existContact) return res.status(400).json({ massage: "this number had been saved befor" })
    const newContact = await new Contact({ name: req.body.name, phoneNumber: req.body.phoneNumber , createdBy: req.headers.authorization })
    await newContact.save()
    res.status(201).json({ massage: "user saved sucessfully!?" })
  }
  
  const handelShowContact = async (req, res) => {
    if (!req.headers.authorization) return  res.status(404).json({massage:"you dont have acsess to see contacts"})
    const filter = {};
    const all = await Contact.find(filter);
    if (!all) return res.status(404).json({massage:"there is no contact"})
    res.status(200).json({contacts : all})
  }
  const handelUpdateContact = async (req , res) => {
    req.body._id
    const update = { name: req.body.name , phoneNumber: req.body.phoneNumber};
    existContact = await Contact.findOneAndUpdate({ _id: req.body._id } , update )
    res.status(200).json({massage:"contact sucessfully updated!?"})
  }
  
  module.exports = { handelCreateContact, handelShowContact , handelUpdateContact }