export default class ListCtrl {

    constructor() {
        this.items = ['nothing'];
    }

    addItem(item) {
        this.items.push(item);
        this.tmp = '';
    }

}
