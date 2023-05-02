import React, {Fragment} from 'react'
import { Form } from './Form'
import {inputs} from '../../Config/inputs'

export const HomePage = () => {
  return (
    <Fragment>
        <h1>HomePage</h1>
        <Form inputs={inputs} />
    </Fragment>
    
  )
}
