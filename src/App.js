import React from "react";
import ReactDOM from 'react-dom';

const create = React.createElement;
const selectedContainer = document.querySelector('#test_container');

class TestReact extends React.Component {
    render() {
        // return create(
        //     'p',
        //     {},
        //     'test'
        // );
        return (
            <React.Fragment>
                <h2>Заголовок</h2>
            </React.Fragment>
        );
    }
}
export default TestReact;

ReactDOM.render(create(TestReact), selectedContainer);



// const e = React.createElement;
//
// class LikeButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { liked: false };
//     }
//
//     render() {
//         if (this.state.liked) {
//             return 'You liked this.';
//         }
//
//         return React.createElement(
//             'button',
//             { onClick: () => this.setState({ liked: true }) },
//             'Like'
//         );
//     }
// }
//
// export default LikeButton;
//
// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(React.createElement(LikeButton), domContainer);