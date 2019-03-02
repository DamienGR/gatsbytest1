import React from "react"
import { Link } from "gatsby"
import Header from "../components/header";

export default () => (
    <div style={{color: 'teal'}}>
        <Header headerText="Home"/>
        <p>Lorem ipsum</p>
        <div><Link to="/about/">About</Link></div>
        <div><Link to="/contact/">Contact</Link></div>
    </div>
)
