export default class ListCtrl {

    constructor() {
        this.items = ['nothing'];

        this.date = new Date();
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

    openDatePicker () {
        this.opened = true;
    }

    solve(list) {
        var arr = [3, 3, 4, 5, 5];

        this.items.push(this.findUnique(arr));
    }

    findUnique(arr) {
        if (arr.length == 1) {
            return arr[0];
        }

        var middle = (arr.length - 1) / 2;

        var leftPart = arr.slice(0, middle - 1);
        var rightPart = arr.slice(middle + 1, arr.length);

        if (arr[middle] == arr[middle - 1]) {
            if (leftPart.length % 2 === 0) {
                return this.findUnique(rightPart);
            }
            if (leftPart.length % 2 === 1) {
                return this.findUnique(leftPart);
            }

        } else if (arr[middle] == arr[middle + 1]) {

            var leftPart = arr.slice(0, middle - 1);
            var rightPart = arr.slice(middle + 2, arr.length - 1);

            if (leftPart.length % 2 === 0) {
                return this.findUnique(rightPart);

                if (leftPart.length % 2 === 1) {
                    return this.findUnique(leftPart);
                }
            } else {
                return arr[middle];
            }
        }
    }
}
