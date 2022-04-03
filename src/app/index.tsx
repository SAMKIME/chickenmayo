import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import {
    Login,
    Main,
    TeamRegister,
    TeamList,
    TeamDetail
} from "./components";

const Root: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Main/>}/>
            <Route path="/index" element={<Main/>}/>
            <Route path="/index.html" element={<Main/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/team">
                <Route path="register" element={<TeamRegister/>}/>
                <Route path="list" element={<TeamList/>}/>
                <Route path="detail" element={<TeamDetail/>}>
                {/*<Route path="detail">*/}
                    <Route path=":id" element={<TeamDetail/>}/>
                </Route>
            </Route>
            {/*<Route path="*" element={<Navigate replace to=""/>}/>*/}
        </Routes>
    </BrowserRouter>
);

export default Root;