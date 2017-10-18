import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'

const Home = () => {
  return(
    <div id="home">
      <h1 id="title">Genesis Research</h1>
      <h2 id="subTitle">Promised | Delivered</h2>

    <Grid verticalAlign='middle' columns={4} centered>
     <Grid.Row>
       <Grid.Column>
         <Image src='https://www.gens1.com/genesisSite/images/Pyramid_05_lonely_left.png'/>
       </Grid.Column>
       <Grid.Column>
         <Image src="https://www.gens1.com/genesisSite/images/arrowsv11.png" />
         <br />
       </Grid.Column>
       <Grid.Column>
         <Image src="https://www.gens1.com/genesisSite/images/Pyramid_05_lonely_right.png" />
       </Grid.Column>
     </Grid.Row>
   </Grid>

    <h2>END TO END EVIDENCE DEVELOPMENT, OPTIMIZATION, AND COMMUNICATION</h2>

    </div>
  )
}

export default Home
