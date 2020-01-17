import React, { Fragment } from 'react'
import {add} from 'components/add'
import {Button } from 'antd'

export function ContentComponent() {
    return (
        <Fragment>
            <Button>click</Button>
            <div>{add(3,4)}</div>
        </Fragment>
    )
}
