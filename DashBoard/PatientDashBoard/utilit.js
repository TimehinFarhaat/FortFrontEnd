const encodedOpenBracket = encodeURIComponent('[')
const encodedCloseBracket = encodeURIComponent(']')
const encodedComma = encodeURIComponent(',')

function encodeQueryString(obj) {
    if (typeof obj !== 'object') {
        return encodeURIComponent(obj.toString());
    }

    const keys = Object.keys(obj)
    let result = []
    for (const key of keys) {
        const value = obj[key]
        const encodedKey = encodeURIComponent(key)
        if (typeof value === 'object') {
            if (!Array.isArray(value)) {
                result.push(`${encodedKey}=${encodeQueryString(value)}`)
            }
            else {
                const innerResults = value.map(v => encodeQueryString(v)).join(encodedComma)
                result.push(`${encodedKey}=${encodedOpenBracket}${innerResults}${encodedCloseBracket}`)
            }
        } else {
            result.push(`${encodedKey}=${encodeURIComponent(value)}`)
        }
    }
    return result.join('&')
}