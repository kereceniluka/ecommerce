export const isEmpty = object => {
    return object && JSON.stringify(object) === '{}';
}