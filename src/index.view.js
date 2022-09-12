class View {
    constructor() {
        this.app = this.getElement('#root')
        this.button = this.createElement('button')
        this.button.textContent = 'New Number'
        
        this.paragraph = this.createElement('p')
        this.paragraph.innerHTML = ''
        this.app.append(this.button, this.paragraph)
    }

    getElement(selector) {
        const element = document.querySelector(selector);
        return element
    }

    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)
        return element
    }

    bindAddRandom(handler) {
        this.button.addEventListener('click', event => {
            console.log('click!!!')
            handler(Math.floor(Math.random() * 100) + 1);
        })
    }

    displayChanges(data) {
        console.log(data)
        this.paragraph.innerHTML = data.toString();
    }
}

module.exports = { View }