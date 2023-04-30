import { Request, Response } from 'express';

/**
* @swagger
* /:
*   get:
*     description: Status of the server
*     tags: [Status]
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
function statusRoute(_: Request, res: Response) {
    res.status(200).send({ message: 'Server is up' });
}

export default statusRoute;
