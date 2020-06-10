const jwt = require('jsonwebtoken');

module.exports = async function (req, res, next){
    const token = req.header('auth-token');
    if(!token) res.status(401).send('Acesso negado');

    try{
        const verifiedUser = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verifiedUser;
        next();
    }catch(err){
        res.status(400).send('Invalid Token');
    }
}