const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const checkPwd = async (l_pwd, user_pwd, value) => {
    try {
        const pwd = await bcrypt.compare(l_pwd, user_pwd);
        if (pwd) {
            const token = await jwt.sign(value, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
            return token;
        }
        return false;
    } catch (error) {
        return false;
    }


}


const hashedPwd = async (pwd) => {
    const hash = await bcrypt.hash(pwd, 12);
    return hash;
}


module.exports={hashedPwd,checkPwd}