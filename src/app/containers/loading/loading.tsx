import React, {useEffect} from 'react';
import {AxiosRequestConfig, AxiosResponse} from "axios";
import {apiAxios} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {setLoading} from "../../modules/loading";

let callCount: number = 0; //### 동일한 분기 Api 호출 횟수 카운트
const Loading = () => {
    const dispatch = useDispatch();

    const loading = useSelector((state: any) => state.loading);

    useEffect(() => {
        //### Axios 요청
        apiAxios.interceptors.request.use((config: AxiosRequestConfig) => {
            try {
                callCount += 1;
                dispatch(setLoading(true));
            } catch (err) {
                dispatch(setLoading(false));
            }
            return config;
        });
        //### Axios 응답
        apiAxios.interceptors.response.use((config: AxiosResponse) => {
            try {
                callCount -= 1;
                if (callCount === 0) {
                    dispatch(setLoading(false));
                }
            } catch (err) {
                //### Api 호출부에서 에러 예외처리
                dispatch(setLoading(false));
            }
            return config;
        }, (err) => {
            dispatch(setLoading(false));
            return Promise.reject(err);
        });
    }, []);

    useEffect(() => {
        if (callCount === 0) {
            dispatch(setLoading(false));
        }
    }, [callCount]);

    //##################################################################################################################
    //##
    //## >> Method : Default Rendering
    //##
    //##################################################################################################################

    return (
        <>
            {
                loading &&
                <aside className="loading">
                    <img src="/images/loading.gif" alt="로딩 중입니다."/>
                </aside>
            }
        </>
    );
};

export default Loading;