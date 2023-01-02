import db from ('../config/connection');
const { User } = require('../models');
const userSeeds = require('./userSeed.json');

db.once('open', async () => {
    try {
        await User.deleteMany({});

        await User.create(userSeeds);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
    console.log('all done!');
  process.exit(0);
});