import { LightningElement, track } from 'lwc';

export default class ClaroOscuroOpportunity extends LightningElement {

    @track modoOscuro = false;

    oportunidad = {
        nombre: 'Proyecto CRM Corporativo',
        estado: 'Closed Won',
        importe: '24.500 €',
        fechaCierre: '31/05/2025'
    };

    // Cambia la clase del contenedor según el tema
    get claseContenedor() {
        return this.modoOscuro
            ? 'contenedor modo-oscuro'
            : 'contenedor modo-claro';
    }

    // Cambia el texto del botón según el tema activo
    get etiquetaBoton() {
        return this.modoOscuro ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
    }

    get claseEstado() {
        return this.oportunidad.estado === 'Closed Won'
            ? 'valor estado estado-won'
            : 'valor estado estado-other';
    }

    alternarTema() {
        this.modoOscuro = !this.modoOscuro;
    }
}