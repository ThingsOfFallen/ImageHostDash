import {FC, PropsWithChildren, useEffect, useState} from 'react';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {StoreProvider} from "easy-peasy";
import store from './store';
import {getAccount} from "./api/account";
import Dashboard from "./pages/dashboard/Dashboard";
import RestrictedRoute from "./components/RestrictedRoute";
import Loader from "./components/Loader";
import cookie from "js-cookie";
import Overview from "@/pages/dashboard/settings/Overview";

const App = () => {
    const [loaded, setLoaded] = useState(false);
    const RR: FC<PropsWithChildren> = ({ children }) => (<RestrictedRoute loaded={loaded}>{children}</RestrictedRoute>);

    const router = createBrowserRouter(createRoutesFromElements(
        <>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/callback'} element={<Login/>}/>
            <Route path={'/dash'} element={<RR><Dashboard/></RR>}/>
            <Route path={'/dash/settings'} element={<RR><Overview/></RR>}/>
        </>
    ));

    if (!store.getState().data && !loaded && cookie.get('token')) {
        getAccount().then((data) => {
            store.getActions().setData(data.data);
            setLoaded(true);
        }).catch((err) => {
            if (err.response.status === 401) setLoaded(true);
        });
    }

    return (
        <StoreProvider store={store}>
            <RouterProvider router={router}/>
        </StoreProvider>
    );
};

export default App;
