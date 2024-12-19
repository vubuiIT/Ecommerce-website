import React, { useEffect } from "react";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputForm from "../../components/InputForm/InputForm";
import {
    WrapperContainerLeft,
    WrapperContainerRight,
    WrapperTextLight,
} from "./style";
import imageLogo from "../../assets/images/logo-login.png";
import { Image } from "antd";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHooks";
import Loading from "../../components/LoadingComponent/LoadingComponent";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slices/userSlice";
import { message } from "antd";
import { GoogleLogin } from "@react-oauth/google";

const SignInPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const mutation = useMutationHooks((data) => UserService.loginUser(data));
    const { data, isLoading, isSuccess, isError, error } = mutation;

    const mutationLoginGg = useMutationHooks((data) =>
        UserService.loginWithGoogle(data)
    );
    const {
        data: dataLoginGG,
        isLoading: isLoadingGG,
        isSuccess: isSuccessGG,
        isError: isErrorGG,
        error: errorGG,
    } = mutationLoginGg;

    console.log("dataLoginGG", dataLoginGG, isSuccessGG);

    useEffect(() => {
        if (isSuccess) {
            message.success("Đăng nhập thành công!");
            if (location?.state) {
                navigate(location?.state);
            } else {
                navigate("/");
            }
            localStorage.setItem(
                "access_token",
                JSON.stringify(data?.access_token)
            );
            localStorage.setItem(
                "refresh_token",
                JSON.stringify(data?.refresh_token)
            );
            if (data?.access_token) {
                const decoded = jwt_decode(data?.access_token);
                if (decoded?.id) {
                    handleGetDetailsUser(decoded?.id, data?.access_token);
                }
            }
        } else if (isError) {
            message.error(error.message);
        }
    }, [isSuccess, isError, error]);

    useEffect(() => {
        if (isSuccessGG) {
            message.success("Đăng nhập Google thành công!");
            if (location?.state) {
                navigate(location?.state);
            } else {
                navigate("/");
            }
            localStorage.setItem(
                "access_token",
                JSON.stringify(dataLoginGG?.access_token)
            );
            localStorage.setItem(
                "refresh_token",
                JSON.stringify(dataLoginGG?.refresh_token)
            );
            if (dataLoginGG?.access_token) {
                const decoded = jwt_decode(dataLoginGG?.access_token);
                if (decoded?.id) {
                    handleGetDetailsUser(
                        decoded?.id,
                        dataLoginGG?.access_token
                    );
                }
            }
        } else if (isErrorGG) {
            message.error(error.message);
        }
    }, [isSuccessGG, isErrorGG, errorGG]);

    const handleGetDetailsUser = async (id, token) => {
        const storage = localStorage.getItem("refresh_token");
        const refreshToken = JSON.parse(storage);
        const res = await UserService.getDetailsUser(id, token);
        dispatch(
            updateUser({ ...res?.data, access_token: token, refreshToken })
        );
    };

    const handleNavigateSignUp = () => {
        navigate("/sign-up");
    };

    const handleOnchangeEmail = (value) => {
        setEmail(value);
    };

    const handleOnchangePassword = (value) => {
        setPassword(value);
    };

    const handleSignIn = () => {
        mutation.mutate({
            email,
            password,
        });
    };

    const handleLoginWithGoogle = async (credentialResponse) => {
        mutationLoginGg.mutate(credentialResponse?.credential);
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0, 0, 0, 0.23)",
                height: "100vh",
            }}
        >
            <div
                style={{
                    width: "800px",
                    height: "445px",
                    borderRadius: "6px",
                    background: "#fff",
                    display: "flex",
                }}
            >
                <WrapperContainerLeft>
                    <h1>Xin chào</h1>
                    <p>Đăng nhập vào tài khoản</p>
                    <InputForm
                        style={{ marginBottom: "10px" }}
                        placeholder="User@gmail.com"
                        value={email}
                        onChange={handleOnchangeEmail}
                    />
                    <div style={{ position: "relative" }}>
                        <span
                            onClick={() => setIsShowPassword(!isShowPassword)}
                            style={{
                                zIndex: 10,
                                position: "absolute",
                                top: "4px",
                                right: "8px",
                            }}
                        >
                            {isShowPassword ? (
                                <EyeFilled />
                            ) : (
                                <EyeInvisibleFilled />
                            )}
                        </span>
                        <InputForm
                            placeholder="Password"
                            type={isShowPassword ? "text" : "password"}
                            value={password}
                            onChange={handleOnchangePassword}
                        />
                    </div>
                    {data?.status === "ERR" && (
                        <span style={{ color: "red" }}>{data?.message}</span>
                    )}
                    <Loading isLoading={isLoading}>
                        <ButtonComponent
                            disabled={!email.length || !password.length}
                            onClick={handleSignIn}
                            size={40}
                            styleButton={{
                                background: "rgb(255, 57, 69)",
                                height: "48px",
                                width: "100%",
                                border: "none",
                                borderRadius: "4px",
                                margin: "26px 0 10px",
                            }}
                            textbutton={"Đăng nhập"}
                            styleTextButton={{
                                color: "#fff",
                                fontSize: "15px",
                                fontWeight: "700",
                            }}
                        ></ButtonComponent>
                    </Loading>

                    <div style={{ width: "100%" }}>
                        <GoogleLogin
                            onSuccess={handleLoginWithGoogle}
                            onError={(error) => message.error(error)}
                        />
                    </div>

                    <p>
                        Chưa có tài khoản?{" "}
                        <WrapperTextLight onClick={handleNavigateSignUp}>
                            {" "}
                            Tạo tài khoản
                        </WrapperTextLight>
                    </p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image
                        src={imageLogo}
                        preview={false}
                        alt="iamge-logo"
                        height="203px"
                        width="203px"
                    />
                    <h4>Mua sắm tại TiKi Shop</h4>
                </WrapperContainerRight>
            </div>
        </div>
    );
};

export default SignInPage;
