const { User, Tools, Technician } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        // by catergory
        // by technician
        // by tool
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
       
        // add tool
        
        // delete tool

        // update tool

        // add technician

        // delete technician

        // update technician

        // add category

        // delete category


        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        }
    }
};

module.exports = resolvers;