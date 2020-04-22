import React, { Component } from "react";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import PopupContent from '../PopupContent/PopupContent';
import styles from './style.module.css';

class ApplyButton extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };
    
    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        const { cover } = this.props
        return(
            <span className='col-lg my-3'>
                <input
                    type="button"
                    onClick={this.onOpenModal}
                    className={`rounded-pill ${styles["apply-btn"]}`}
                    value="APPLY NOW!"
                    aria-label="Send"
                />
                <Modal 
                    open={open} 
                    onClose={this.onCloseModal}
                    center
                    classNames={{
                        modal: styles.customModal
                    }}
                    styles={{
                        modal: {
                            animation: `${
                            open ? styles.customEnterAnimation : styles.customLeaveAnimation
                            } 500ms`,
                        },
                        overlay: {
                            background: `url(${cover}) no-repeat center center fixed`, 
                            backgroundSize: 'cover',
                        }
                    }}>
                    <PopupContent />
                </Modal>
            </span>
        );
    }
}

export default ApplyButton;