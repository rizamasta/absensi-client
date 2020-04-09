import { decorate, observable, action } from 'mobx';
class General {
    pageTitle = null;
    visible =false;
    setVisible(){
        this.visible = !this.visible;

    }
}
const general = decorate(General, {
    pageTitle: observable,
    visible:observable,
    setVisible:action
})
export default new general();