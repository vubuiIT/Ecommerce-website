import { Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    background-color: #3397f3;
    align-items: center;
    flex-wrap: nowrap;
    width: 100%;
    padding: 10px 0;
`;

export const WrapperTextHeader = styled(Link)`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    margin-left: 40px;
`;

export const WrapperHeaderAccout = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    margin-left: 20px;
    max-width: 200px;
`;

export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
`;

export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover {
        color: rgb(26, 148, 255);
    }
`;
