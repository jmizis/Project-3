const { AuthenticationError } = require('apollo-server-express');
const { User, Tools, Technician } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('Tools');
        },
        tools: async (parent, {_id}, content) => {
            return Tools.findOne({ _id }).populate('Tools')
        }
        


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
        // delete user
       
        // add tool JM
        // takes args/ finds user context/pushes new tool object into selected users tool array
        addTool: async (parent, args, context) => {
            if (context.user){
                const updateUser = await User.findByIdAndUpdate(
                    {_id: context.user._id},
                    {$push: {tool: args}},
                    {new: true}

                ) 
                return updateUser
            }
            // might need to add auth error
        },

        
        // delete tool
        deleteTool: async (parent, {_id}, context) => {
            if (context.user){
                const updateUser = await User.findByIdAndUpdate(
                    {_id: context.user._id},
                    {$pull: {tool: _id}},
                    {new: true}

                ) 
                return updateUser
            }
            // might need to add auth error
        },

        // update tool

        // add technician (same as adding tool)
        addTechnician: async (parent, args, context) => {
            if (context.user){
                const updateUser = await User.findByIdAndUpdate(
                    {_id: context.user._id},
                    {$push: {technician: args}},
                    {new: true}

                ) 
                return updateUser
            }
            // might need to add auth error
        },

        // delete technician Finds tech by id and pulls from user tech array
        deleteTechnician: async (parent, {_id}, context) => {
            if (context.user){
                const updateUser = await User.findByIdAndUpdate(
                    {_id: context.user._id},
                    {$pull: {technician: _id}},
                    {new: true}

                ) 
                return updateUser
            }
            // might need to add auth error
        },


        // update technician

        // add category

        // delete category

        // log out user

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