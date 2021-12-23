import * as bcrypt from 'bcrypt'

export const encrypt = (text: string): Promise<string> => bcrypt.hash(text, 10)
