import React from 'react'
import Aux from '../Aux/Aux'
import ToolBar from '../../component/Navigation/ToolBar/ToolBar'

const Layout = (props) => {
    return <Aux>
        <ToolBar/>
        <main>
            {props.children}
        </main>
    </Aux>
    
}

export default Layout