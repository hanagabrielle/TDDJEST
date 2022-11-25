import app from './app.js';

const port = process.env.PORT_SERVER || 3000;

app.listen(process.env.PORT_SERVER || 3000, () => {
    console.log('Servidor iniciado na porta ' + port)
});