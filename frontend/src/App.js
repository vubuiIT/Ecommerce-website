import React, {Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slides/counterSlice'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { routes } from './routes'
import DeafultComponent from "./components/DefaultComponent/DefaultComponent";

function App() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const Button = styled.button({
        background: 'red',
    });
    return (
        <div>
            <Router>
                <Routes>
                    {routes.map((route, index) => {
                        const Page = route.page
                        const Layout = route.isShowHeader ? DeafultComponent:Fragment
                        return (
                            <Route path={route.path} element={
                               <Layout>
                                <Page/>
                             </Layout>
                            }/>
                        )
                    })}
                </Routes>
            </Router>
        </div>
    )
}
export default App