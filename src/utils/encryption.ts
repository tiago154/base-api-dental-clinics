import * as bcrypt from 'bcrypt'

export const encrypt = (text: string): Promise<string> => bcrypt.hash(text, 10)

export const compare = (originalText: string, encryptedText: string): Promise<boolean> => bcrypt.compare(originalText, encryptedText)
