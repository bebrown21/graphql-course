import { GraphQLServer } from 'graphql-yoga';

// Type Definitions (schema)
// Scalar Types: String, Boolean, Int, Float, ID
// 
const typeDefs = `
  type Query {
    greeting(name: String): String!
    add(numbers: [Float!]!): Float!
    grades: [Int!]!
    me: User!
    post: Post!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }
`

// Resolvers
const resolvers = {
  Query: {
    greeting(parent, args, ctx, info) {
      return `Hello, ${args.name}`;
    },
    add(parent, args, ctx, info) {
      if (args.numbers.length === 0) {
        return 0;
      }

      return args.numbers.reduce((acc, c) => {
        return acc + c;
      })
    },
    grades(parent, args, ctx, info) {
       return [99, 80];
    },
    me() {
      return {
        id: '123',
        name: 'Bob',
        email: 'bob@email.com',
        age: 32
      }
    },
    post() {
      return {
        id: '123',
        title: 'Post Title',
        body: 'Post Body',
        published: false
      }
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log('Server running!!!');
})