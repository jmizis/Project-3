const db = require('../config/connection');
const { User, Tools, Technician } = require('../models');
const userSeeds = require('./userSeeds.json');
const toolsSeeds = require('./toolsSeeds.json');

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Tools.deleteMany({});

        await User.create(userSeeds);
        await Tools.create(toolsSeeds);

        // remove if not using
        // const user = await User.findOneAndUpdate(
        //     { tool: [Tools] }
        // )
    } catch(error) {
        console.error(error);
    }
});
