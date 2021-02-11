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







// import React from 'react';
// import ReactDOM from 'react-dom';
// import ReactModal from 'react-modal';
//
// ReactModal.setAppElement('#item');
//
// const customStyles = {
//     content: {
//     }
// };
//
// export default class TestItem extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             labelColor : 'new-bg',
//             labelTextSize : 'new',
//             label : 'NEW',
//             labelTriangleColor : 'new-triangle-bg',
//             image : './img/product1.png',
//             newPrice : '12 300 р. ',
//             oldPrice : '15 500 р.'
//         };
//     }
//
//     render () {
//         return (
//             <div className="item">
//                 <div className={this.labelColor}>
//                     <p className={this.labelTextSize}>${this.label}</p>
//                     <div className={this.labelTriangleColor} />
//                 </div>
//                 <a href="#" className="item-link">
//                     <div className="item-img-frame">
//                         <img src={this.image} alt="" />
//                     </div>
//                     <h1>IP телефон Siemens Gigaset C530A IP</h1>
//                 </a>
//                 <div className="price">
//                     <p>Цена:</p>
//                     <p className="new-price">{this.newPrice}</p>
//                     <p className="old-price">{this.oldPrice}</p>
//                 </div>
//                 <div className="buttons">
//                     <button className="to-buy"><i className="fas fa-shopping-cart" />КУПИТЬ</button>
//                     <a href="#" className="clickable">Подробнее</a>
//                 </div>
//             </div>
//     );
//     }
// }
//
// ReactDOM.render(<TestItem />, document.getElementById('item'))