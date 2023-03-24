import React from "react";
import Layout from '@theme/Layout';
import RadialGradient from "../components/RadialGradient";
// import Root from "./root";
// import Main from "./main";


export default function Badges() {
  return (
	    <Layout>
	      <div
	        style={{
	          display: 'flex',
	          justifyContent: 'center',
	          alignItems: 'center',
	          height: '50vh',
	          fontSize: '20px',
	        }}>
	        <p>
	          Edit <code>pages/helloReact.js</code> and save to reload.
	        </p>
	      </div>
	    </Layout>
  );
}