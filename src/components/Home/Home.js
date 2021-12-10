import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <Link to="/reduxapi">reduxapi</Link><br/>
            <Link to="/design">website design</Link><br/>
            <Link to="/login">list select</Link>
            
        </div>
    )
}
