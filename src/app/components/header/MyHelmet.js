import React from "react";
import Helmet from "react-helmet";

export default class MyHelmet extends React.Component {
  render() {
    const { title, description } = this.props;
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {process.env.REACT_APP_NAME}
          {title ? " - " + title : ""}
        </title>
        {description && <meta name="description" content={description} />}
      </Helmet>
    );
  }
}
