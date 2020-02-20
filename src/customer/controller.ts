import { Request, Response } from "express";
import * as useCase from "./usecase";

export const getCustomers = (req: Request, res: Response) => {
    let customers = [
        {
            id: 1,
            name: "admin"
        }
    ];

    useCase
        .getCustomerListUseCase(0, 10)
        .then(rows => {
            console.log(rows);
        })
        .catch(e => {
            console.warn(e);
        });

    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(customers));
};
