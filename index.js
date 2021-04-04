const bcrypt = require('bcrypt');

// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(12); //数字が大きいほどsaltを生み出すのに時間がかかる　12が適正
//     const hash = await bcrypt.hash(pw, salt)
//     console.log(salt);
//     console.log(hash);
// }
const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

const login = async(pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if(result){
        console.log("LOGGED YOU IN! SUCCESSFUL MATCH!")
    } else {
        console.log("INCORRECT!")
    }
}

// hashPassword('monkey');
login('monkey','$2b$12$UiSbV76nl8ioJlA.L7qBU.ciZpCyGF/oORo9Snvkoaoq7C7kgpXZC')