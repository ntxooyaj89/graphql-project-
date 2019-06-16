import { GraphQLServer } from 'graphql-yoga'

const people = [{
    id: '2798c35b-5b8f-4a5d-9858-0a818d48cbef',
    firstName: 'Orval',
    lastName: 'Hauck',
    jobTitle: 'CEO',
    departmentId: "2b9edccb-41fc-4fc5-b832-ac86a034a877"
},
{
    id: 'd44390cd-b306-4e11-b7d5-a5e0e6fe1e3d',
    firstName: 'Asia',
    lastName: 'Streich',
    jobTitle: 'Dynamic Branding Orchestrator',
    departmentId: 'aef293ee-8dcc-4d89-99cf-1b8f61bab07b',
    managerId: '2798c35b-5b8f-4a5d-9858-0a818d48cbef'

}]

const typeDefs = `
    type Query {
       people(query: String): [people!]!

    }

    type people {
    id: ID! 
    firstName: String!
    lastName: String!
    jobTitile: String!
    departmentId: Float
    managerId: 
    }

`

// Resolvers
const resolvers = {
    Query: {
        people(parent, args, ctx, info) {
            return people
        },


    }
}


const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log('The server is up!')
})