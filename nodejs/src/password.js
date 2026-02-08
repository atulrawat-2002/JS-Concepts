import bcrypt from 'bcrypt';

const pass = 'Atul@2002'



const salt = bcrypt.genSalt(10);
// const hash = await bcrypt.hash(pass, salt)

const ans = await bcrypt.compare(pass, hash);

console.log(ans)
console.log(hash)