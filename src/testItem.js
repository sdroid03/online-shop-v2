import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
// import {model1, model2, model3} from '../public/classes/item_data.js'

ReactModal.setAppElement('#item');

const customStyles = {
    content: {
    }
};

export default class TestItem extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            labelColor : 'label new-bg',
            labelTextSize : 'new',
            label : 'NEW',
            labelTriangleColor : 'triangle new-triangle-bg',
            image : './img/product1.png',
            newPrice : '12 300 р. ',
            oldPrice : '15 500 р.'
        };
    }

    render () {
        return (
            <div className="item">
                <div className={this.state.labelColor}>
                    <p className={this.state.labelTextSize}>{this.state.label}</p>
                    <div className={this.state.labelTriangleColor} />
                </div>
                <a href="#" className="item-link">
                    <div className="item-img-frame">
                        <img src={this.state.image} alt="" />
                    </div>
                    <h1>IP телефон Siemens Gigaset C530A IP</h1>
                </a>
                <div className="price">
                    <p>Цена:</p>
                    <p className="new-price">{this.state.newPrice}</p>
                    <p className="old-price">{this.state.oldPrice}</p>
                </div>
                <div className="buttons">
                    <button className="to-buy"><i className="fas fa-shopping-cart" />КУПИТЬ</button>
                    <a href="#" className="clickable">Подробнее</a>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<TestItem />, document.getElementById('item'))