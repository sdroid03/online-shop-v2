// authorization.addEventListener("click", authorizationModal);
account.addEventListener("click", accountModal);

// function authorizationModal() {
//     Swal.fire({
//         showCloseButton: true,
//         title: 'Авторизация',
//         icon: 'error',
//         text: 'В разработке!'
//     })
// }

function accountModal() {
    Swal.fire({
        showCloseButton: true,
        title: 'Личный кабинет',
        icon: 'error',
        text: 'В разработке!'
    })
}

function _createModal(options) {
    const DEFAULT_WIDTH = '600px'
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay" data-close="true">
            <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
              <div class="modal-header">
                <span class="modal-title">${options.title || 'window'}</span>
                
                ${options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
                
              </div>
              <div class="modal-body">
                ${options.content || ''}
              </div>
              <div class="modal-footer">
                <button data-close="true">Войти</button>
                <button data-close="true">Отмена</button>
              </div>
            </div>
        </div>
    `)
    document.body.appendChild(modal)
    return modal
}

$.modal = function (options) {
    const  ANIMATION_SPEED = 200
    const  $modal = _createModal(options)
    let closing = false
    let destroyed = false

    const modal = {
        open() {
            if (destroyed) {
                return console.log('Modal is destroyed')
            }
            !closing && $modal.classList.add('open') // if not closing
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        }
    }

    const listener = event => {
        if (event.target.dataset.close) {
            modal.close()
        }
    }

    $modal.addEventListener('click', listener)

    return Object.assign(modal, {
        destroy() {
            // $modal.parentNode.removeChild($modal)
            // $modal.removeEventListener('click', listener)
            // destroyed = true

            $modal.remove()
        },
        setContent(html) {

        }
    })
}

const modal = $.modal({
    title: 'Авторизация',
    closable: true,
    content: `
        <input placeholder="Логин или e-mail">
        <input placeholder="Пароль">
    `,
    width: '300px'
})

function openModal() {
    modal.open()
}