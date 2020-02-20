import * as repository  from "./repository";

export const getCustomerListUseCase = function(page: number, pageSize: number) {
  return repository.customerList(page, pageSize);
};
