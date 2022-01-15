import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import {
    Login,
    Main
} from "./components";

const Root: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Main/>}/>
            <Route path="/index" element={<Main/>}/>
            <Route path="/index.html" element={<Main/>}/>
            <Route path="/main" element={<Main/>}/>
            {/*<Route path="*" element={<Navigate replace to=""/>}/>*/}
        </Routes>
    </BrowserRouter>
);

export default Root;