import React from 'react'
import { UseForm } from './useForm'


const UsingCustomHooks = () => {

const initialValues = {
    name:'',
    age: 0
}

    const [values ,handleOnchane] = UseForm(initialValues)
    

    console.log("values:" , values)


    return (
        <>
            <input name="name" placeholder="Type Name" values={values} onChange={e => handleOnchane(e)}/>
            <input name="age" placeholder="Type age" values={values}  onChange={e => handleOnchane(e)}/>
            
        </>
    )
}

export default UsingCustomHooks
