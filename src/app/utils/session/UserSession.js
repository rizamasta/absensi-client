import { decorate, observable, action } from "mobx";
import { getItem, setItem } from "app/utils";
import { RequestGet } from "../general/HttpClient";
import { clearAll } from "../general/Storage";

class UserSession {
  data = null;
  setData(val) {
    this.data = val;
    setItem("token", val.token);
    setItem("user_data", JSON.stringify(val));
  }

  initData = () => {
    if (getItem("token")) {
      this.data = {
        token: getItem("token"),
        user_data: JSON.parse(getItem("user_data")),
      };
      return this.data;
    } else {
      return null;
    }
  };

  destroy = async (isLogout) => {
    await RequestGet("logout")
      .then((r) => {
        if (r) {
          clearAll();
          isLogout = true;
        } else {
          isLogout = false;
        }
      })
      .catch((e) => {
        console.log(e);
        isLogout = false;
      });

    return isLogout;
  };
}
const userSession = decorate(UserSession, {
  data: observable,
  destroy: action,
});
export default new userSession();
