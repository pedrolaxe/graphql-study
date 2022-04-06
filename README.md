### Graphql Study

All requests in Graphql are POST.

Endpoint: http://localhost:4000/graphql

- Query -> get information
- Mutation -> change information
- Scalar types -> String, Int, Float, Boolean and ID

Line 2 is added but in apolloServer 3 disabled the graphql playground.

Running dev mode:

```sh
yarn dev
```

### Graphql Queries and Mutations examples

Query users example:

```graphql
query{
  users{
    name
    email
    password
    active
  }
}
```

Query user by Email example:

```graphql
query{
  getUserbyEmail(email: "pedro@laxe.dev"){
    name
    email
  }
}
```

Mutation to create new user example:

```graphql
mutation{
  createUser(name: "Jonas", email: "jonas@laxe.dev", password: "123456"){
    name
    email
  }
}
```
