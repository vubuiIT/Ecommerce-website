'use client'

import { Button, Input } from "antd"


const HeaderHomepage = () => {

    return (
        <div
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                height:'10vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent:'space-between'
            }}
        >
            <div 
                className="left"
                style={{
                    width:'30%',
                    display:'flex',
                    justifyContent:'center'
                }}
            >
                logo
            </div>
            <div 
            className="center"
            style={{
                width:'40%'
            }}
            >
                <Input/>

            </div>
            <div 
                className="right" 
                style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-around',
                    width:'30%'
                }}
            >
                <div className="auth" 
                style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    logo
                    <div
                        style={{
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'center'
                        }} 
                    >
                        <Button type='link'>Sign up</Button>
                        <Button type="link">Sign in</Button>
                    </div>
                </div>
                <div 
                    className="shopping-cart"
                    style={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                >
                    logo
                    <p>
                        Shopping cart
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeaderHomepage