import React, { Component } from 'react'

import { Grid, Image, Reveal } from 'semantic-ui-react'

const Careers = () => {
  return(
    <div>
      <h1>GENESIS CAREERS</h1>
      <h3>Jobs that matter. People we need.</h3>

      <Grid columns={2}  className="container">
       <Grid.Row className="white">
        <Grid.Column>
          <h2>REWARDING ENVIRONMENT</h2>
          <h4>No politics - Strong team spirit</h4>
          <Image src="https://www.gens1.com/genesisSite/images/jobs-rewarding3.png"/>
        </Grid.Column>
        <Grid.Column>
          <h2>DIVERSE GROUP</h2>
          <h4>We come from across the globe</h4>
          <Image src="https://www.gens1.com/genesisSite/images/jobs-map1.png"/>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Careers
