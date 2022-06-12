const Modal = () => {
    return (
        <div className="wrap_box-modal">
            <input className="wrap_box-modal__input" type="text" id="todoList" placeholder="항목추가" />
            <div className="wrap_box-modal__inner">
                <button className="wrap_box-modal__button">항목 추가</button>
                <button className="wrap_box-modal__button">닫기</button>
            </div>
        </div>
    );
}

export default Modal;