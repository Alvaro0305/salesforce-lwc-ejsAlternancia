import { LightningElement, track } from 'lwc';
import IMG1 from '@salesforce/resourceUrl/img1';
import IMG2 from '@salesforce/resourceUrl/img2';
import IMG3 from '@salesforce/resourceUrl/img3';
import IMG4 from '@salesforce/resourceUrl/img4';

export default class GaleriaHome extends LightningElement {

    @track imagenes = [
        { id: '1', url: IMG1, alt: 'Imagen 1', seleccionada: true },
        { id: '2', url: IMG2, alt: 'Imagen 2', seleccionada: false },
        { id: '3', url: IMG3, alt: 'Imagen 3', seleccionada: false },
        { id: '4', url: IMG4, alt: 'Imagen 4', seleccionada: false },
    ];

    imagenPrincipal = IMG1;

    get imagenesConClase() {
        return this.imagenes.map(img => ({
            ...img,
            claseMinuatura: img.seleccionada ? 'thumbnail thumbnail-selected' : 'thumbnail'
        }));
    }

    seleccionarImagen(event) {
        const idSeleccionado = event.target.dataset.id;

        this.imagenes = this.imagenes.map(img => ({
            ...img,
            seleccionada: img.id === idSeleccionado
        }));

        const imagenEncontrada = this.imagenes.find(img => img.id === idSeleccionado);
        this.imagenPrincipal = imagenEncontrada.url;
    }
}