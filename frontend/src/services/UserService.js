import axios from "axios";

export const axiosJWT = axios.create();

export const loginUser = async (data) => {
    try {
        const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/user/sign-in`,
            data
        );
        return res.data;
    } catch (err) {
        throw new Error(err.response.data.message);
    }
};

export const signupUser = async (data) => {
    try {
        const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/user/sign-up`,
            data
        );
        return res.data;
    } catch (err) {
        throw new Error(err.response.data.message);
    }
};

export const getDetailsUser = async (id, access_token) => {
    const res = await axiosJWT.get(
        `${process.env.REACT_APP_API_URL}/user/get-details/${id}`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );
    return res.data;
};
