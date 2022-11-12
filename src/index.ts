import  express  from "express";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE']// methodes autorisées
}))

app.listen(3003, () => { // on ouvre port 3003 pour acces a l'API
// log our savoir si ca se passe bien 
console.log('API en route, port 3003');

});