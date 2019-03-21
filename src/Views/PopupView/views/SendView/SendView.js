import React from 'react'
import { BitcoinField } from './components'
import { Button, TextField } from '../../../../Atoms'
import { Title, CloseButton } from '../../atoms'
import './SendView.css'

const SendView = props => (
    <div className='SendView'>
        <CloseButton {...props} />
        <div className='content'>
            <div className='TitleWrap'>
                <Title>
                    SEND
            </Title>
            </div>
            <div className='fieldsWrap'>
                <TextField />
                <BitcoinField {...props} />
            </div>
            <Button
                style={{
                    display: 'block',
                    margin: 'auto auto 20px',
                    height: window.innerWidth > 800 ? 60 : 50,
                    width: window.innerWidth > 800 ? 300 : 280
                }}
                onClick={() => {
                    props.pushTransaction({ method: 'sent' })
                    props.setPopup(null)
                }}
            >
                SEND
            </Button>

        </div>
    </div>
)

export default SendView