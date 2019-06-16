import { GraphQLServer } from 'graphql-yoga'
import uuidv4 from 'uuid/v4'
import db from './db'






// Resolvers
const resolvers = {
    Query: {
        users(parent, args, { db }, info) {
            return db.users
        },

        departments(parent, args, {db}, info) {
            return db.departments
        }


    },

    Mutation: {
        createUser(parent, args, {db}, info) {
            const lastNameTaken = db.users.some((user) => {
                return user.lastName === args.lastName
            })

            if(lastNameTaken) {
                throw new Error('This last name taken')
            }

            const user = {
                id: uuidv4(),
                firstName: args.firstName,
                lastName: args.lastName,
                jobTitle: args.jobTitle
            }

            db.users.push(user)

            return user

        


        }
    },

    User: {
        department(parent, args, {db}, info) {
            return db.users.find((User) => {
                return user.id === parent.department
            })
        }
    },

}


const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: {
        db

    }
})

server.start(() => {
    console.log('The server is up!')
})