import * as dataSource from "./datasource";

export const customerList = (page: number, pageSize: number) => {
    return dataSource.customerList(page, pageSize);
}
