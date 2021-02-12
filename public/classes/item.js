class Item {
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

    render () {
        throw new Error('Метод toHTML должен быть реализован')
    }
}

export class CarouselItem extends Item {
    constructor(labelColor, labelTextSize, label, labelTriangleColor,
                image, newPrice, oldPrice) {
        super(labelColor, labelTextSize, label, labelTriangleColor,
            image, newPrice, oldPrice)
    }

    changeButton () {
        console.log("test");
    }

    render () {
        const html =
            `
            <div class="item">
                <div class="label ${this.labelColor}">
                    <p class="${this.labelTextSize}">${this.label}</p>
                    <div class="triangle ${this.labelTriangleColor}"></div>
                </div>
                <a href="#" class="item-link">
                   <div class="item-img-frame">
                        <img src="./img/${this.image}" alt="">
                    </div>
                    <h1>IP телефон Siemens Gigaset C530A IP</h1>
                </a>
                <div class="price">
                    <p>Цена:</p>
                    <p class="new-price">${this.newPrice} р.</p>
                    <p class="old-price">${this.oldPrice} р.</p>
                </div>
                <div class="item-buttons">
                    <button class="to-buy">
                        <i class="fas fa-shopping-cart"></i>
                        КУПИТЬ
                    </button>
                    <a href="#">Подробнее</a>
                </div>
            </div>
           `
        return html
    }
}
