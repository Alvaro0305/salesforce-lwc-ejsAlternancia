import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'liggithtning/platformShowToastEvent';

export default class FormularioContact extends LightningElement {
    
    nombre = '';

    email = '';
    
    mensaje = '';

    errors = {};

    handleChange(event) {
        const field = event.target.dataset.field;
        const value = event.target.value;

        this[field] = value;
        this.validateField(field, value);
    }

    handleBlur(event) {
        const field = event.target.dataset.field;
        const value = event.target.value;

        this.validateField(field, value);
    }

    validateField(field, value) {
        let errors = { ...this.errors };

        switch (field) {
            case 'nombre':
                errors.nombre = value ? '' : 'El nombre es obligatorio';
                break;

            case 'email':
                errors.email = this.validateEmail(value)
                    ? ''
                    : 'Email inválido';
                break;

            case 'mensaje':
                errors.mensaje = value && value.length >= 10
                    ? ''
                    : 'El mensaje debe tener al menos 10 caracteres';
                break;
        }

        this.errors = errors;
    }

    validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    get isInvalid() {
        return (
            !this.nombre ||
            !this.email ||
            !this.mensaje ||
            Object.values(this.errors).some(e => e)
        );
    }

    handleSubmit() {
    if (this.isInvalid) return;

    this.dispatchEvent(
        new ShowToastEvent({
            title: 'Éxito',
            message: 'Formulario enviado correctamente',
            variant: 'success'
        })
    );

    // Reset del formulario
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
    this.errors = {};
}
}