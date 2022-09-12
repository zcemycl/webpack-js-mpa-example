class Model {
    constructor() {
        this.data = []
    }

    bindDataChanged(callback) {
        this.onDataChanged = callback
    }

    _commit(data) {
        this.onDataChanged(data)
    }

    addRandom(num) {
        this.data.push(num)
        this._commit(this.data)
    }
}

export { Model }