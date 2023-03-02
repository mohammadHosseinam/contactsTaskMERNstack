const { Contact } = require('./../../model/Contacts/index.js');

const handelCreateContact = async (req, res) => {
  if (!req.body.name) return res.status(400).json({ massage: "heyyyy noob name is required!?" })
  if (!req.body.phoneNumber) return res.status(400).json({ massage: "heyyyy noob phone number is required!?" })
  const existContact = await Contact.findOne({ phoneNumber: req.body.phoneNumber })
  if (existContact) return res.status(400).json({ massage: "this number had been saved befor" })
  const newContact = await new Contact({ name: req.body.name, phoneNumber: req.body.phoneNumber, createdBy: req.headers.authorization })
  await newContact.save()
  res.status(201).json({ massage: "user saved sucessfully!?" })
}

const handelShowContact = async (req, res) => {
  if (!req.headers.authorization) return res.status(404).json({ massage: "you dont have acsess to see contacts" })
  const filter = {createdBy : req.headers.authorization};
  const all = await Contact.find(filter);
  if (!all) return res.status(404).json({ massage: "there is no contact" })
  res.status(200).json({ contacts: all })
}
const handelUpdateContact = async (req, res) => {
  const update = { name: req.body.name, phoneNumber: req.body.phoneNumber };
  result = await Contact.findOneAndUpdate({ _id: req.body._id }, update)
  if (result) return res.status(200).json({ massage: "updated sucessfuly" })
  res.status(400).json({ massage: "nashod" })
}
 const handelRemoveContact = async (req , res) =>{
  result = await Contact.findOneAndRemove({ _id: req.body._id })
  if (result) return res.status(200).json({ massage: "updated sucessfuly" })
  res.status(400).json({ massage: "nashod" })
 }
module.exports = { handelCreateContact, handelShowContact, handelUpdateContact , handelRemoveContact }