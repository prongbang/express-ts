import knex from "knex";

export = knex({
    client: "pg",
    version: "7.2",
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "admin",
        database: "storeback"
    }
});
