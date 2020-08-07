import KKB from './libs/KKB';


const server = new KKB({
    baseURL: '/api',
    controllersDir: '../controllers/**/*'
});

server.start(7777);
