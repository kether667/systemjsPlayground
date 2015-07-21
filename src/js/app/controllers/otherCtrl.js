import RootCtrl from 'js/app/controllers/rootCtrl'

export default class OtherCtrl extends RootCtrl{

    hello(from = 'from other') {
        super.hello(from);
    }

}
