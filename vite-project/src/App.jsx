import { useState } from 'react'
import './index.css'
import Authenticate from "./authenticate";
import SignUp from "./SignUp";


export default function App() {
  return (
    <>
      <Authenticate token={token} setToken={setToken}/>
      <SignUp token={token} setToken={setToken} />
    </>
  );
}