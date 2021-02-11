export class Carousel {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    render(model) {
        this.$el.innerHTML = '' // очитска шаблона
        model.forEach(block => {
            this.$el.insertAdjacentHTML('beforeend', block.render())
        })
    }
}