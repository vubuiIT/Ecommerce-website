import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import InputForm from '../../components/InputForm/InputForm'
import { WrapContent, WrapperAvatar, WrapperContentAvatar, WrapperContentProfile, WrapperHeader, WrapperInput, WrapperLabel, WrapperLabelAvatar, WrapperUploadFile } from './style'
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHooks'
import { message } from 'antd'
import Loading from '../../components/LoadingComponent/LoadingComponent'

import { updateUser } from '../../redux/slices/userSlice'
import { Button } from 'antd'
import { UploadOutlined, UserOutlined} from '@ant-design/icons'
import { getBase64 } from '../../utils'

const ProfilePage = () => {
    const user = useSelector((state) => state.user)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [avatar, setAvatar] = useState('')
    const mutation = useMutationHooks(
        (data) => {
            const { id, access_token, ...rests } = data
            UserService.updateUser(id, rests, access_token)
        }
    )

    const dispatch = useDispatch()
    const { data, isLoading, isSuccess, isError, error} = mutation

    useEffect(() => {
        setEmail(user?.email)
        setName(user?.name)
        setPhone(user?.phone)
        setAddress(user?.address)
        setAvatar(user?.avatar)
    }, [user])

    useEffect(() => {
        if (isSuccess) {
            message.success("Cập nhật thành công")
            handleGetDetailsUser(user?.id, user?.access_token)
        } else if (isError) {
            message.error(error.message)
        }
    }, [isSuccess, isError])

    const handleGetDetailsUser = async (id, token) => {
        const res = await UserService.getDetailsUser(id, token)
        dispatch(updateUser({ ...res?.data, access_token: token }))
    }

    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }
    const handleOnchangeName = (value) => {
        setName(value)
    }
    const handleOnchangePhone = (value) => {
        setPhone(value)
    }
    const handleOnchangeAddress = (value) => {
        setAddress(value)
    }

    const handleOnchangeAvatar = async ({fileList}) => {
        const file = fileList[0]
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj );
        
        }
        setAvatar(file.preview)
    }

    const handleUpdate = () => {
        mutation.mutate({ id: user?.id, email, name, phone, address, avatar, access_token: user?.access_token })

    }
    
    return (
        <div style={{ width: '100%', margin: '20px auto', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <WrapperHeader>Thông tin cá nhân</WrapperHeader>
            <Loading isLoading={isLoading}>
                <WrapContent>
                <WrapperContentProfile>
                    <WrapperInput>
                        <WrapperLabel htmlFor="name">Name</WrapperLabel>
                        <InputForm style={{ width: '300px' }} id="name" value={name} onChange={handleOnchangeName} placeholder = "Nhập tên"/>
                        
                    </WrapperInput>
                    <WrapperInput>
                        <WrapperLabel htmlFor="email">Email</WrapperLabel>
                        <InputForm style={{ width: '300px' }} id="email" value={email} onChange={handleOnchangeEmail} placeholder = "Nhập email"/>
                        
                    </WrapperInput>
                    <WrapperInput>
                        <WrapperLabel htmlFor="phone">Phone</WrapperLabel>
                        <InputForm style={{ width: '300px' }} id="email" value={phone} onChange={handleOnchangePhone} placeholder = "Nhập số diện thoại"/>
                        
                    </WrapperInput>
                    
                    <WrapperInput>
                        <WrapperLabel htmlFor="address">Address</WrapperLabel>
                        <InputForm style={{ width: '300px' }} id="address" value={address} onChange={handleOnchangeAddress} placeholder = "Nhập địa chỉ"/>
                    
                    </WrapperInput>


                </WrapperContentProfile>
                <WrapperContentAvatar>
                <WrapperAvatar>
                        <WrapperLabelAvatar htmlFor="avatar">Avatar</WrapperLabelAvatar>
                        
                        {avatar ? (
                            <img src={avatar} style={{
                                height: '240px',
                                width: '240px',
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }} alt="avatar"/>
                        ) : ( <div>
                            <UserOutlined style={{fontSize: "240px"}}/>
                        </div>)}

                        <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
                            <Button style={{margin: "10px"}} icon={<UploadOutlined />}>Select File</Button>
                        </WrapperUploadFile>
                        
                        
                    </WrapperAvatar>
                </WrapperContentAvatar>
                
                </WrapContent>
                <div style= {{textAlign: "center"}}>
                <ButtonComponent
                    onClick={handleUpdate}
                    size={40}
                    styleButton={{
                        height: '30px',
                        width: 'fit-content',
                        borderRadius: '4px',
                        padding: '2px 40px 20px',
                        background:'var(--primary-color)',
                    }}
                    textbutton={'Cập nhật'}
                    styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                ></ButtonComponent>
                </div>
            </Loading>
        </div>
    )
}

export default ProfilePage