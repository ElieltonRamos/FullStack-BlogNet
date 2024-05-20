import app from './app';

const PORT = process.env.API_PORT || 3001;
const server = app.listen(PORT, () => console.log(`BackEnd Online at the Port: ${PORT}`));

export default server;