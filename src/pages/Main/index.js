import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreatePost from '../CreatePost'
import DetailPost from '../DetailPost'
import Home from '../Home'
import { Footer, Header } from '../../components'
import './main.scss'

const Main = () => {
    return (
        <div className="main-wrapper">
            <Header />
            <div className="content-wrapper">
                <Router>
                    <Switch>
                        <Route path="/create-post/:id?">
                            <CreatePost />
                        </Route>
                        <Route path="/detail-post/:id">
                            <DetailPost />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>
    )
}

export default Main