import React from 'react'
import Login from './Login'
import {profileProp} from "./Profile"


type privateProp = {
    isLogin: boolean
    component: React.ComponentType<profileProp>
}
export const Private = ({isLogin, component:Component} : privateProp)=> {
    if (isLogin) {
        return <Component name="Aamirkhan" />
    }
    else{
        return <Login />
    }
}
