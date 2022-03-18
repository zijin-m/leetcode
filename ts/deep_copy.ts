function deepClone(target: any, hash = new WeakMap()) { // 额外开辟一个存储空间WeakMap来存储当前对象
    if (target === null || target === undefined) {
        return target
    }
    if (target instanceof Date) {
        return new Date(target)
    }
    if (target instanceof RegExp) {
        return new RegExp(target)
    }
    if (typeof target !== "object") {
        return target
    }
    if (hash.get(target)) {
        return hash.get(target)
    }
    const clone = new target.constructor()
    hash.set(target,clone)
    Reflect.ownKeys(target).forEach(key=> {
        clone[key] = deepClone(target[key], hash)
    })
    return clone;
}