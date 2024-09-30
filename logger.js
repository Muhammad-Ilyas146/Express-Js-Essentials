import colors from 'colors';


// logger Middleware function
const logger = (req, res, next) => {
    const methodColors={
        GET:'green',
        POST:'yellow',
        PUT:'blue',
        DELETE:'red'
    };
    const color = methodColors[req.method];
    console.log(color)
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`[color]);
    next();
};

export default logger;
