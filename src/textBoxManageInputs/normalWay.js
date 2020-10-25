import React, { useEffect, useRef, useState } from 'react'

const NormalWay = () => {

    const [state, setState] = useState({
         name: '',
         age : ''
    })


    //para mas malinis 
    const {name, age} = state

    const handleChange = (e) => {

        setState(
            {
                ...state,
                [e.target.name] : e.target.value
            }
        )
      
    }

    
    //use For useRef
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    }, [])


    console.log('state :' , state)
    return (
        <>
            <input name="name" placeholder="Type Name" value={name} onChange={e => handleChange(e)} ref={inputRef}/>
            <input name="age" placeholder="Type age" value={age} onChange={e => handleChange(e)} />
            
        </>
    )
}

export default NormalWay
