import bcrypt from 'bcrypt'

async function getSalt() {
  const saltRound = 10
  return await bcrypt.genSalt(saltRound)
}

export async function hashPassword(password) {
  const salt = await getSalt()
  console.log('salt')
  const hash = await bcrypt.hash(password, salt)
  return hash
}
