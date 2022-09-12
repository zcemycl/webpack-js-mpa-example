class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        this.model.bindDataChanged(this.onDataChanged)
        this.view.bindAddRandom(this.handleAddRandom)

        this.onDataChanged(this.model.data)
    }

    onDataChanged = data => {
        console.log('changed data')
        this.view.displayChanges(data)
    }

    handleAddRandom = num => {
        this.model.addRandom(num)
    }
}

export { Controller }