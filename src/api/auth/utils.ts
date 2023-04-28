import crypto from 'crypto';

const getHash = (value: string): string => {
    return crypto.createHash('sha256').update(value).digest('hex');
}

export {
    getHash
}
