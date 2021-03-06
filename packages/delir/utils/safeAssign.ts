
export const safeAssign = <T extends object> (dest: T, ...source: Partial<T>[]): T => {
    return Object.assign(dest, ...source)
}
