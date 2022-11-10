import { stringify } from 'postcss'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
export default function Private(props){
    const Component=props.Component
    const navigate=useNavigate()
    useEffect(()=>{
        let data=localStorage.getItem("login")
        if(!data){
            navigate('/')
        }
    })
    return(
        <div>
            <Component />
        </div>
    )
}