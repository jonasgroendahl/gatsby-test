import React from 'react'
import { Link } from "gatsby"

export default function menu() {
    return (
        <div>
            <div>This is a menu</div>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/page-2">Page 2</Link>
                </li>
                <li>
                    <Link to="/">Index</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </div>
    )
}
