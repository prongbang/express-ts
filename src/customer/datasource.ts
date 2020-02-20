import knex from "../database/knex";

export const customerList = (page: number, pageSize: number) => {
    return knex.select().table('customer').limit(pageSize).offset(page)
}
