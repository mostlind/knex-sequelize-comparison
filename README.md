# Sequelize, Knex Comparison

## Run

- in root `docker-compose up`
- cd into `knex` or `sequelize` and `npm start`
- `knex` runs on `8080`
- `sequelize` runs on `8081`

## Findings

### `sequelize-typescript`

The library `sequelize-typescript` alleviates a lot of the pain of setting up sequelize with typescript. In a previous project with sequelize and typescript without the `sequelize-typescript` library, defining models was very verbose and error prone due to having to separately inform each technology of the shape of the data. `sequelize-typescript` allows the definition of one decorated class per model which provides type information and everything sequelize needs to work.

#### Pros

- Simple to moderate queries are easy to read and write
- Models are singletons, so they don't have to be injected; they can be imported instead
- More abstraction/magic

#### Cons

- no support for typescript migrations
- complex queries have to rely on obscure or poorly documented features of the library or output SQL with syntax errors
- More abstraction/magic

### `knex`

`knex` has first class typescript support baked into the library. The CLI can generate config and migration files in typescript.

#### Pros

- Very good typescript support
- Maps more directly to SQL, so the developer can use existing SQL knowledge. May help represent summary or aggregate queries
- Would be easier to take advantage of database features, like views or stored procedures
- Less abstraction/magic

#### Cons

- Lower level library, which leads to more verbose queries
- no singletons, so initialized `knex` instance needs to be passed around
- Less abstraction/magic
