import React, { Component } from "react";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import PopupContent from '../PopupContent/PopupContent';
import styles from './style.module.css';

class ApplyButton extends Component {
    constructor() {
        super();
        this.state = {
            modalOpen: false
        }
    }

    onOpenModal = () => {
        this.setState({ modalOpen: true });
    };
    
    onCloseModal = () => {
        this.setState({ modalOpen: false });
    };

    render() {
        const { modalOpen } = this.state;
        const { cover, form, title } = this.props;
        return (
            <span className='col-lg my-3'>
                <input
                    type="button"
                    onClick={this.onOpenModal}
                    className={`rounded-pill ${styles["apply-btn"]}`}
                    value="APPLY NOW!"
                    aria-label="Send"
                />
                <Modal 
                    open={modalOpen} 
                    onClose={this.onCloseModal}
                    center
                    styles={{
                        overlay: {
                            background: `url(${cover}) no-repeat center center fixed`, 
                            backgroundSize: 'cover',
                        },
                        modal: {
                            animation: `${
                                modalOpen ? styles.customEnterAnimation : styles.customLeaveAnimation
                            } 500ms`,
                            backgroundColor: 'var(--layout-primary)',
                            width: '30rem',
                            borderRadius: '1rem'
                        }
                    }}>
                    <PopupContent form={form} title={title} />
                </Modal>
            </span>
        );
    }
}

export default ApplyButton;