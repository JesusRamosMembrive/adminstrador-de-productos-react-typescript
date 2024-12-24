import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World desde get');
});

router.post('/', (req, res) => {
    res.send('Hello World desde post');
});


router.patch('/', (req, res) => {
    res.send('Hello World desde patch');
});

router.put('/', (req, res) => {
    res.send('Hello World desde put');
});

router.delete('/', (req, res) => {
    res.send('Hello World desde delete');
});

export default router;