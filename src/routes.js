import { Router } from 'express';
import User from './models/User.js'

const routes = new Router();

// routes.get('/', async (req, res) => {
//     const data = {
//         name: 'Hana',
//         email: 'hana@gmail.com',
//         password_hash: '123456'
//     }
//     let keys;
//     if (data) {
//         keys = Object.values(data);
//         console.log('⛔️ Object is true:', keys);
//       } else {
//         // 👇️ this runs
//         console.log('⛔️ Object is falsy');
//       }
//     const user = await User.create(keys).then((result) => {
//         console.log(result);
//         // return res.status(200).json(result)
//     }).catch((error) => {
//         console.log(error);
//     })
// });

routes.get('/', async (req, res) => {
    res.send('Retornei')
});

export default routes;