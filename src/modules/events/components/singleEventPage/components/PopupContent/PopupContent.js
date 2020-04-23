import React, { Component } from "react";
import FormBuilder from '@langleyfoxall/react-dynamic-form-builder';
import { sendEventForm } from 'modules/events/services/events.service'
import styles from './style.module.css';

let postTarget = '';    // made this because onFormSubmit function doesn't accept the keyword {this}
class PopupContent extends Component {
    componentDidMount = () => {
        postTarget += this.props.form.postTarget
    }

    onSubmit(submission) {
        if(submission.valid){
            sendEventForm(postTarget, submission.data.form)
            .then(console.log)
            .catch(console.log)
        }
    }

    render() {
        const { form, title } = this.props;
        return(
            <section className='text-center p-3'>
                <p className='h3'>{title}</p>
                <FormBuilder
                    form={form.fields}
                    onSubmit={this.onSubmit}
                    defaultContainerClass={' form-group'}               // you have to add a space before first className..
                    defaultInputClass={' form-control rounded-pill'}
                    defaultValidationErrorClass={` text-left text-danger ${styles["error-message"]}`}
                    defaultSubmitClass={` rounded-pill ${styles["send-btn"]}`}
                    submitButton={{
                        text: 'SEND'
                    }}
                />
            </section>
        );
    }
}

export default PopupContent;