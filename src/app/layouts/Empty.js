import React from "react";
import { user } from "../routes/routes";
import { RouteWithSubRoutes } from "../routes/RouteWithSubRoutes";
class Empty extends React.Component {
  render() {
    return (
      <div>
        {user.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    );
  }
}
export default Empty;
