import React from 'react';
import { Link,navigate } from 'gatsby';
import style from './nav.module.css'

export default function Header() {
    return <div className={style.narbar}>
    <div ><h1 className={style.title} onClick={()=> navigate("/")}>Gatsby Blog</h1></div>  
      <div className={style.content}>
        <Link className={style.link} to="/blog">Blog</Link>
        <Link className={style.link} to="/contact">Contact</Link>
        <Link className={style.link} to="/about">About</Link></div>
    </div>
}