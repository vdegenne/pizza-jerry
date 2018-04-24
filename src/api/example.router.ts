import {Router} from 'express';

const router: Router = Router();

router.get('/hello', async(req, res) => {
  res.send({success: true, message: 'hello world'});
});

export {router as exampleRouter};
