const jwt = require('jsonwebtoken');
const authConfig = require('../../Secret/Auth.json');
module.exports =(req, res, next) => {

    const authHeader = req.headers.authorization;

    if(!authHeader){
        // console.log(authHeader);
        return res.status(201).send({err: "provider a token"});
    }

    const parts = authHeader.split(' ');

    if(!parts.length === 2) {
        console.log(parts);
        return res.status(201).send({err: "invalid token"});
    }

    const [schema, token] = parts;

    if(!/^Bearer$/i.test(schema)) {
        return res.status(201).send({err: "unformated token"})
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) {
            console.log(err);
            return res.status(401).send({err});
        }

        req.id = decoded.id;
        return next();
    });
;
}