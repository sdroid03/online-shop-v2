import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#login');

const customStyles = {
    overlay: {
        zIndex: 9999,
        background: 'rgba(0, 0, 0, .5)',
        animation: 'appear 350ms ease-in 1'

    },
    content: {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        transform             : 'translate(-50%, -50%)',
        borderRadius: '10px',
        // transition: 'background .2s ease-in',
        width: '350px'
    }
};

export default class Modal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showModal: false,
            isValid: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        setTimeout(() => {
            this.setState({ showModal: false });
        }, 0)
    }

    render () {
        return (
            <div>
                <a className={"open"} onClick={this.handleOpenModal}>Войти</a>
                <ReactModal
                    isOpen={this.state.showModal}
                    onRequestClose={this.handleCloseModal}
                    style={customStyles}
                    contentLabel="Modal window"
                    shouldFocusAfterRender={true}
                    isValid={this.state.isValid}
                >
                    <div className={"modal"}>
                        <div className={"title"}>
                            <h2>Авторизация</h2>
                            <span className={"close"} onClick={this.handleCloseModal}>&times;</span>
                        </div>
                                <div className={"inputs"}>
                                    <input
                                        required
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder=" "
                                        className={"inputText"}
                                    />
                                    <span className="floating-label email">Логин или e-mail</span>
                                    <span className="wrong">Некорректный e-mail</span>
                                </div>
                                <div className={"inputs"}>
                                    <input
                                        required
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder=" "
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                        className={"inputText"}
                                    />
                                    <span className="floating-label password">Пароль</span>
                                    <span className="wrong">Неправильный пароль</span>
                                </div>
                        <div className={"buttons"}>
                            <button onClick={this.handleCloseModal}>Войти</button>
                            <button onClick={this.handleCloseModal}>Отмена</button>
                        </div>
                    </div>
                </ReactModal>
            </div>
        );
    }
}

ReactDOM.render(<Modal />, document.getElementById('login'))
