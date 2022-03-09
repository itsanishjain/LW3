import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Link from "next/link";

import { useRef,useState } from "react";



export default function Home() {
  const [text,setText]  =  useState("");

  const ref = useRef();
  
  console.log(ref,">>>>>>>>>>>>>>>>>");

  ref.current = "HEEETlll"

  const handleChange = (e) => {
    setText(e.target.value);
  }



  return (
    <div>
    <input type="text" value = {text} onChange={handleChange} />
    <p>{text}</p>
    </div>
  );
}
