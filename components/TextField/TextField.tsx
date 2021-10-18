import React from 'react'
import {Input} from "@chakra-ui/react"


interface Props {
    label:string;
    value?:string;
    handleChange:React.ChangeEventHandler<HTMLInputElement>
}

export const TextField:React.FC<Props> = ({label, value, handleChange}) => {

    return (
        <div>
            <label>{label}</label>
            <br/>
            <Input type='text' variant='filled' mb={'3'} value={value} onChange={handleChange}/>
        </div>
    )
}