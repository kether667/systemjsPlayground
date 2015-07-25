export default class ListCtrl {

    constructor() {
        this.items = ['nothing'];
    }

    addItem(item) {
        this.items.push(item);
        this.tmp = '';
    }

    clear() {
        this.items = [];
    }

    remove (index) {
        this.items.splice(index, 1);
    }
}
