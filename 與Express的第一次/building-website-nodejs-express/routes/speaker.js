const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params;

  router.get('/', async (req, res) => {
    const speakers = await speakersService.getList();
    res.render('layout/index', {
      pageTitle: 'Welcome',
      template: 'speakers',
      speakers,
    });
  });

  router.get('/:shortname', async (req, res) => {
    const speaker = await speakersService.getSpeaker(req.params.shortname);
    global.console.log(speaker);
    res.render('layout/index', {
      pageTitle: 'Welcome',
      template: 'speakers-detail',
      speaker,
    });
  });

  return router;
};
