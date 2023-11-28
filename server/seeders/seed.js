const db = require('../config/connection');
const { Profile, Review } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const reviewSeeds = require('./reviewSeeds.json');
const skillSeeds = require('./skillSeeds.json')
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Profile', 'profiles');
    await cleanDB('Review', 'reviews');

    await Profile.create(profileSeeds);
    const students = await Profile.find({roleType:"Student"})

    for (let i = 0; i < reviewSeeds.length; i++) {
      const review = await Review.create(reviewSeeds[i]);
      const index = Math.floor(Math.random() * students.length)
      await Profile.findOneAndUpdate({ _id: students[index]._id }, { $addToSet: { reviews: review._id } }, { new: true })
    }
    const tutors = await Profile.find({roleType:"Tutor"})

    for (let index = 0; index < skillSeeds.length; index++) {
      const tutorIndex = Math.floor(Math.random() * tutors.length)
      const skillIndex = Math.floor(Math.random() * skillSeeds.length)
      await Profile.findOneAndUpdate({ _id: tutors[tutorIndex]._id }, { $addToSet: { skills: skillSeeds[skillIndex] } }, { new: true })
    }


    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

