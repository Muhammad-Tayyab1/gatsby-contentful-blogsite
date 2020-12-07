import React from 'react'
import { navigate } from "gatsby"
function Maintemplate() {
    return (
        <div>
            <div style={{ textAlign: "center", marginTop: "30px", cursor: "pointer" }} onClick={() =>
                navigate("/blog")
            }>
                <h3 style={{color:'slateblue'}}>StoryBook Blog</h3>
                <img src="http://images.ctfassets.net/y5dmf9a605x5/2ZPmX02W4MQ2PicaIrZCb/c048c6d6c4a7a4bdba80b3c246765d68/cdd.png?w=278&h=181&q=50" height={400} width={600}


                />
            </div>
            <div style={{ textAlign: "center", marginTop: "30px", cursor: "pointer" }} onClick={() =>
                navigate("/blog")
            }>
                <h3 style={{color:'slateblue'}}>Form with Formic and Yup</h3>
                <img src="http://images.ctfassets.net/y5dmf9a605x5/3AG5LsjoUqXhmmg0KZKYii/741df857fea6b64001ec5735439565fb/formic.png?w=750&h=399&q=50" height={400} width={600}


                />
            </div>
            <div style={{ textAlign: "center", marginTop: "30px", cursor: "pointer", color:"yellow" }} onClick={() =>
                navigate("/blog")
            }>
                <h3 style={{color:'slateblue'}}>React Concept</h3>
                <img src="http://images.ctfassets.net/y5dmf9a605x5/46Df4m9FsG6meHfZKKijuN/3adc6bb52d4ba845351943494bc5e2e2/redux.png?w=347&h=145&q=50" height={400} width={600}


                />
            </div>
            <div style={{ textAlign: "center", marginTop: "30px", cursor: "pointer" }} onClick={() =>
                navigate("/blog")
            }>
                <h3 style={{color:'slateblue'}}>React with Typescript</h3>
                <img src="http://images.ctfassets.net/y5dmf9a605x5/3n7eU4JX47pzD71M6Smfqi/42fc3911bf20d82859d71b5c5a5cb9aa/React-and-typescript.png?w=750&h=450&q=50" height={400} width={600}


                />
            </div>
        </div>
    )
}

export default Maintemplate
