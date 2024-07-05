const express = require('express');
const router = express.Router();
const {addUser,getUsers,getUser,updateUser,deleteUser} = require('./../handlers/userHandler');

router.post('/users', async (req, res) => {
    await addUser(req, res); 
  });
  
router.get('/users', async (req, res) => {
    await getUsers(req,res); 
  });

  router.get('/users/:id', async (req, res) => {
    console.log("id",req.params["id"])
    let user = await getUser(req.params["id"]);
    res.send(user);
  });

  router.put('/users/:id', async (req, res) => {
    console.log("id",req.params["id"])
     await updateUser(req.params["id"],req.body);
    res.send()
  });
  router.delete('/users/:id', async (req, res) => {
    console.log("id",req.params["id"])
     await deleteUser(req.params["id"]);
    res.send()
  });



  module.exports = router;  