export class AsyncWebStorage {

    constructor(storage) {
        console.log(storage)
        this.storage = storage || new Map()
        this.storage.set('createdAt', Date.now())
    }

    find = async (key) => this.storage.get(key)

    async set(key, value) {
        this.storage.set(key, value)
    }

    async delete(key) {
        this.storage.delete(key)
    }

    length = async () => this.storage.size

}