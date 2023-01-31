const { AuthenticationError } = require('apollo-server-express');
const { User, Tools } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('Tools');
        },
        tools: async (parent,  content) => {
    const findTools = await Tools.find()
           console.log(findTools)
           return findTools
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

        // takes args/ finds user context/pushes new tool object into selected users tool array
        addTool: async (parent, { toolData }, context) => {
            if (context.user){
                const addTool = await Tools.create(
                    // toolName,
                    // description,
                    // value,
                    toolData
                ) 
                
                // await User.findByIdAndUpdate(
                //     {_id: context.user._id},
                //     {$addToSet: {tools: tools._id}},
                //     {new: true}

                // ) 
                return addTool;
            }
            
            
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
           
        },

        // update tool

        // add technician (same as adding tool)
        // addTechnician: async (parent, args, context) => {
        //     if (context.user){
        //         const updateUser = await User.findByIdAndUpdate(
        //             {_id: context.user._id},
        //             {$push: {technician: args}},
        //             {new: true}

        //         ) 
        //         return updateUser
        //     }
        //     // might need to add auth error
        // },

        // delete technician Finds tech by id and pulls from user tech array
        // deleteTechnician: async (parent, {_id}, context) => {
        //     if (context.user){
        //         const updateUser = await User.findByIdAndUpdate(
        //             {_id: context.user._id},
        //             {$pull: {technician: _id}},
        //             {new: true}

        //         ) 
        //         return updateUser
        //     }
        //     // might need to add auth error
        // },


       
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