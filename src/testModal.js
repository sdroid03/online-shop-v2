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
        // marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        borderRadius: '10px',
        // transition: 'background .2s ease-in',
        width: '350px'
    }
};

export default class TestModal extends React.Component {
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

    // handleChange () {
    //     if (typeof input["email"] !== "undefined") {
    //         const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //
    //         if (!pattern.test(input["email"])) {
    //             this.setState({ isValid: false });
    //                 errors["email"] = "Please enter valid email address.";
    //         }
    //     }
    // }

    render () {
        return (
            <div>
                <a className={"open"} onClick={this.handleOpenModal}>Войти</a>
                <ReactModal
                    isOpen={this.state.showModal}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={this.handleCloseModal}
                    style={customStyles}
                    contentLabel="Modal window"
                    // className={"modal"}
                    shouldFocusAfterRender={true}
                    isValid={this.state.isValid}
                >
                    <div className={"modal"}>
                        <div className={"title"}>
                            <h2>Авторизация</h2>
                            <span className={"close"} onClick={this.handleCloseModal}>&times;</span>
                        </div>
                            {/*<form action="#0">*/}
                                <div className={"inputs"}>
                                    <input
                                        required
                                        type="email"
                                        id="email"
                                        name="email"
                                        // onChange={this.handleChange}
                                        // placeholder="Логин или e-mail"
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
                                        // onChange={this.handleChange}
                                        // placeholder="Пароль"
                                        placeholder=" "
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                        className={"inputText"}
                                    />
                                    <span className="floating-label password">Пароль</span>
                                    <span className="wrong">Неправильный пароль</span>
                                </div>
                            {/*</form>*/}
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

ReactDOM.render(<TestModal />, document.getElementById('login'))
