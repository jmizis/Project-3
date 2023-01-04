const db = require('../config/connection');
const { User, Tools, Technician } = require('../models');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Tools.deleteMany({});

        await User.create(userSeeds);

        // const user = await User.findOneAndUpdate(
        //     { tool: [Tools] }
        // )
    } catch(error) {
        console.error(error);
    }
});
