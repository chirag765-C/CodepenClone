import React,{useContext,useState,useEffect} from 'react'
import {Box,styled} from '@mui/material';

import {DataContext} from '../context/DataProvider';

const Container=styled(Box)`
height:41vh;
`



 const Result = () => {

    //html css and i have java script
 const [src,setSrc]=useState('');
const {html,css,js}= useContext(DataContext);

const srcCode=`
<html>
<body>${html}</body>
<style>${css}</style>
<script>${js} </script>

</html>
`

useEffect(() =>{
  
const timeout=setTimeout(()=> {
setSrc(srcCode)
},2000)
return () =>clearTimeout(timeout);

},[html,css,js])

  return (
    <Container>
    <iframe
    srcDoc={srcCode}
    title="Output"
    sandbox="allow-scripts"
    framBorder={0}
    width="100%"
    height="100%"
/>
    </Container>
  )

}

export default Result;
