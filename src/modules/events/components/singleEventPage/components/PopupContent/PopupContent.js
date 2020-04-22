import React, { Component } from "react";
import FormInput from 'shared/Input';
import { sendEventForm } from '../../../../services/events.service'
import styles from './style.module.css';

class PopupContent extends Component {
    constructor() {
        super();
        this.state = {}
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        sendEventForm(this.props.form.postTarget, this.state)
        .then(console.log)
        .catch(console.log)
    }

    render() {
        const { form } = this.props
        return(
            <form onSubmit={this.onFormSubmit}>
            {console.log(form.postTarget)}
                {
                    form.fields.map((field, index) => {
                        return (
                            <section key={index} className="form-group">
                                <label>{field.name}</label>
                                <FormInput
                                    type={field.type}
                                    required={field.rule.required}
                                    max={field.rule.max}
                                    min={field.rule.max}
                                    minLength={field.rule.minLength}
                                    maxLength={field.rule.maxLength}
                                    options={field.options}
                                    classes={'form-control rounded-pill'}
                                    regPattern={ field.rule.pattern || `[A-Za-z]`}
                                />
                            </section>
                        )
                    })
                }
                <section className='text-center'>
                    <input
                        type="submit"
                        className={`rounded-pill ${styles["send-btn"]}`}
                        value="SEND"
                        aria-label="Send"
                    />
                </section>
            </form>
        );
    }
}

export default PopupContent;