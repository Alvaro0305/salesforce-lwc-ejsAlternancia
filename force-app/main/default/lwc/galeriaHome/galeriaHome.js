import { LightningElement } from 'lwc';

export default class GaleriaHome extends LightningElement {
    images = [
        {
            id: 1,
            url: 'https://picsum.photos/id/1015/600/400'
        },
        {
            id: 2,
            url: 'https://picsum.photos/id/1025/600/400'
        },
        {
            id: 3,
            url: 'https://picsum.photos/id/1035/600/400'
        },
        {
            id: 4,
            url: 'https://picsum.photos/id/1045/600/400'
        }
    ];

    selectedImage = 'https://picsum.photos/id/1015/600/400';

    handleImageClick(event) {
        this.selectedImage = event.target.dataset.url;
    }

    get imageList() {
        return this.images.map(image => ({
            ...image,
            cssClass:
                image.url === this.selectedImage
                    ? 'thumbnail selected'
                    : 'thumbnail'
        }));
    }
}