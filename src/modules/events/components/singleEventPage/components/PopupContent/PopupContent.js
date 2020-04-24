import React, { Component } from "react";
import FormBuilder from '@langleyfoxall/react-dynamic-form-builder';
import { sendEventForm } from 'modules/events/services/events.service';
import styles from './style.module.css';


class PopupContent extends Component {
    constructor() {
        super();
        this.state = {
            sentSuccessfully: false,
            sentFail: false
        }
    }

    onSubmit = (submission) => {
        if(submission.valid) {
            sendEventForm(this.props.form.postTarget, submission.data.form)
            .then(() => {
                this.setState({ sentSuccessfully: true })
            })
            .catch(() => {
                this.setState({ sentFail: true })
            })
        }
    }

    render() {
        const { form, title } = this.props;
        const { sentSuccessfully, sentFail } = this.state;
        return sentSuccessfully 
        ?   <section className="col-lg m-auto text-center">
                <svg
                    className="bi bi-check-circle"
                    width="4em"
                    height="4em"
                    viewBox="0 0 16 16"
                    fill="green"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z"
                        clipRule="evenodd"
                    />
                    <path
                        fillRule="evenodd"
                        d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z"
                        clipRule="evenodd"
                    />
                </svg>
                <p className="text-success">
                    Thank you, the form has been sent successfully.
                </p>
            </section>
        :   <section className='text-center p-3'>
                <p className='h3 mb-4' style={{ color: "var(--text-secondary)" }}>{title}</p>
                {
                    sentFail ? (
                        <section>
                            <small className="text-danger">
                                Error sending the message, please try again later!
                            </small>
                        </section>
                    ) : null
                }
                <FormBuilder
                    form={form.fields}
                    onSubmit={this.onSubmit}
                    defaultContainerClass={' form-group'}               // you have to add a space before first className..
                    defaultInputClass={' form-control rounded-pill'}
                    defaultValidationErrorClass={` text-left text-danger ${styles["error-message"]}`}
                    defaultSubmitClass={` rounded-pill ${styles["send-btn"]}`}
                    submitButton={{ text: 'SEND' }}
                />
            </section>
    }
}

export default PopupContent;