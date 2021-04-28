import { observable, decorate, action } from "mobx";

const AlertData = decorate(
  class {
    open = false;
    message = "this messages";
    hidetime = 10;
    severity = "error";
    retry = 0;
    reconnecting = false;
    setOpen(val) {
      this.open = val;
    }
    setMessage(m) {
      this.message = m;
    }
    show(m = "Success", s = "success", time = 3) {
      this.message = m;
      this.severity = s;
      this.open = true;
      this.hidetime = time;
    }
    hide(m = "...", s = "error") {
      this.open = false;
      this.message = m;
      this.severity = s;
    }
    /**
     *
     * @param {number} time value is seconds.
     */
    setHideTime(time) {
      this.hidetime = time * 1000;
    }
    setSeverity(s) {
      this.severity = s;
    }
    setRetry(r) {
      this.retry = r;
    }
    setReconnecting() {
      this.reconnecting = true;
      this.retry = 0;
    }
    reset() {
      this.message = "this messages";
      this.hidetime = null;
      this.severity = "error";
      this.retry = 0;
      this.reconnecting = false;
    }
  },
  {
    message: observable,
    open: observable,
    hidetime: observable,
    severity: observable,
    retry: observable,
    reconnecting: observable,
    setMessage: action,
    setOpen: action,
    setHideTime: action,
    setSeverity: action,
    setRetry: action,
    setReconnecting: action,
  }
);

export default new AlertData();
