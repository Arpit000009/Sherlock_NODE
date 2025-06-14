const jwt = require("jsonwebtoken");
const secret = 'Arpit$123@$';

function setUser(user){
    return jwt.sign({
        _id:user.id,
        email: user.email,
    },secret);
}

// function setUser(id,user){
//     sessionIdToUserMap.set(id, user);
// }

function getUser(token){
    if(!token) return null;
    return jwt.verify(token, secret);
}

module.exports = {
    setUser,
    getUser,
}

