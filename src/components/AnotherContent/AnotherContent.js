import React, { useState, Fragment } from 'react'
import { add } from 'components/add'
import {Button} from "antd";

export function AnotherContent() {
    return (
        <Fragment>
            <Button>click1</Button>
            <div>{add(4, 5)}</div>
        </Fragment>
    )
}
