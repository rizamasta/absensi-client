import React from "react";
import grey from '@material-ui/core/colors/grey';

export default class Sparator extends React.Component {

    render() {
        const { type } = this.props;
        let width = 10;
        let height = 10;
        let style = { border: "1px solid ", borderLeft: 0, borderTop: 0, borderBottom: 0, borderRightColor: grey[500], width: 10, marginRight: 10 };
        if (type) {
            if (type === "horizontal") {
                style = { border: "1px solid ", borderLeft: 0, borderTop: 0, borderRight: 0, borderBottomColor: grey[500], height: height, marginBottom: height };
            }
            else if (type === "vertical") {
                style = { border: "1px solid ", borderLeft: 0, borderTop: 0, borderBottom: 0, borderRightColor: grey[500], width: width, marginRight: width };
            }
            else if (type === "horizontal-spacing") {
                style = { height: height, marginBottom: height };
            }
            else if (type === "vertical-spacing") {
                style = { width: width, marginRight: width };
            }
        }
        return (
            <div style={style}></div>
        )
    }
}