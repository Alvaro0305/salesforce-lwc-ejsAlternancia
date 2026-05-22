import { LightningElement, track } from 'lwc';

export default class ContadorHome extends LightningElement {

    @track segundos = 0;
    @track corriendo = false;
    @track pausado = true;

    intervalo = null;

    // Formatea los segundos a HH:MM:SS
    get tiempoFormateado() {
        const horas = Math.floor(this.segundos / 3600);
        const minutos = Math.floor((this.segundos % 3600) / 60);
        const segs = this.segundos % 60;

        return [
            String(horas).padStart(2, '0'),
            String(minutos).padStart(2, '0'),
            String(segs).padStart(2, '0')
        ].join(':');
    }

    iniciar() {
        this.corriendo = true;
        this.pausado = false;

        this.intervalo = setInterval(() => {
            this.segundos += 1;
        }, 1000);
    }

    pausar() {
        this.corriendo = false;
        this.pausado = true;
        clearInterval(this.intervalo);
        this.intervalo = null;
    }

    reiniciar() {
        this.corriendo = false;
        this.pausado = true;
        clearInterval(this.intervalo);
        this.intervalo = null;
        this.segundos = 0;
    }

    // Limpia el intervalo si se destruye el componente
    disconnectedCallback() {
        clearInterval(this.intervalo);
    }
}