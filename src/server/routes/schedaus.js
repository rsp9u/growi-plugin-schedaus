module.exports = (crowi) => {
  const express = crowi.require('express');
  const router = express.Router();

  router.get('/config', async(req, res) => {
    res.status(200).send({ uri: process.env.SCHEDAUS_URI });
  });

  return router;
};
