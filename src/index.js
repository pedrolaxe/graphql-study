const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        active: Boolean!
    }
    type Posts{
        id: ID!
        title: String!
        content: String!
        author: User!
    }

    type Query {
        hello: String
        users: [User!]!
        getUserbyEmail(email: String!): User!
    }

    type Mutation {
        createUser(name: String!, email: String!, password: String!): User!
    }
`;
const users = [
    {
        id: (Math.random()),
        name: 'John Doe',
        email: 'john@doe.com.br',
        password: 'e10adc3949ba59abbe56e057f20f883e',
        active: false,
    },
    {
        id: (Math.random()),
        name: 'Pedro Laxe',
        email: 'pedro@laxe.dev',
        password: 'e10adc3949ba59abbe56e057f20f883e',
        active: true,
    },
    {
        id: (Math.random()),
        name: 'Vinicius',
        email: 'vini@laxe.dev',
        password: 'e10adc3949ba59abbe56e057f20f883e',
        active: true,
    }
]
const resolvers = {
    Query: {
        hello: () => 'Hello World!',
        users: () => users,
        getUserbyEmail: (_, args) => {
            return users.find((user) => user.email === args.email);
        }
    },
    Mutation: {
        createUser: (_, args) => {
            const newUser = {
                id: (Math.random()),
                name: args.name,
                email: args.email,
                password: args.password,
                active: true
            }
            users.push(newUser);
            return newUser;
        }
    }
}

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
    })]
});
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});