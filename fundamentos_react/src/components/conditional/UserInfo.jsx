import React from "react";
import If from "./If";

export default (props) => {
    const user = props.user || {}

    return(
        <div>
            <If condition={user && user.name}>
                Welcome <strong>{user.name}</strong>!
            </If>

            <If condition={!user || !user.name}>
                Welcome <strong>Ghest</strong>!
            </If>

        </div>
    )
}