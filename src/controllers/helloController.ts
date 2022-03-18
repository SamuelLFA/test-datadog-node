import { Request, Response } from 'express';

export class HelloController {

    hello(req: Request, res: Response) {
        throw Error("Test");
        return res.send({
            "message": "ok"
        });
    }
}