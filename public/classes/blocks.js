class Block {
    constructor(labelColor, labelTextSize, label, labelTriangleColor,
                image, newPrice, oldPrice) {
        this.labelColor = labelColor
        this.labelTextSize = labelTextSize
        this.label = label
        this.labelTriangleColor = labelTriangleColor

        this.image = image
        this.newPrice = newPrice
        this.oldPrice = oldPrice
    }

    toHTML() {
        throw new Error('Метод toHTML должен быть реализован')
    }
}

export class CarouselItem extends Block{
    constructor(labelColor, labelTextSize, label, labelTriangleColor,
                image, newPrice, oldPrice) {
        super(labelColor, labelTextSize, label, labelTriangleColor,
            image, newPrice, oldPrice)
    }

    toHTML() {
        const html =
            `
            <div class="item">
                <div class="label ${this.labelColor}">
                    <p class="${this.labelTextSize}">${this.label}</p>
                    <div class="triangle ${this.labelTriangleColor}"></div>
                </div>
                <div class="item-img-frame">
                    <img src="./img/${this.image}" alt="">
                </div>
                <h1 class="clickable">IP телефон Siemens Gigaset C530A IP</h1>
                <div class="price">
                    <p>Цена:</p>
                    <p class="new-price">${this.newPrice}</p>
                    <p class="old-price">${this.oldPrice}</p>
                </div>
                <div class="buttons">
                    <button class="to-buy"><i class="fas fa-shopping-cart"></i>КУПИТЬ</button>
                    <a href="#" class="clickable">Подробнее</a>
                </div>
            </div>
           `
        return html
    }
}