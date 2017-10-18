import React from 'react'
import { Grid, Image, Reveal } from 'semantic-ui-react'


const Navigation = ({onFooterSection}) => {
  return(
    <div id="footer">

        <Grid columns={5}  className="container">
         <Grid.Row>
         <Grid.Column className="about-footer-img">
            <Image src="https://www.gens1.com/genesisSite/images/about-data.jpg" size="large"  onClick={onFooterSection} data-message="We speak data, we breathe data - we live data. Quality data underlies everything at Genesis. You show us a problem, we'll identify the data that solves it.
            - Frank A. Corvino, PhD" data-key="Data"/>

             <div class="top-left">Data-Driven</div>
         </Grid.Column>
           <Grid.Column className="about-footer-img">
              <Image  src="https://www.gens1.com/genesisSite/images/about-visualization.jpg" size="medium" onClick={onFooterSection} data-message="One can easily get lost in the fog of data.
              With our visualization capabilities, we show you the right path to the information you need.
              - Marko Zivkovic, PhD" data-key="Visualization"/>

              <div class="top-left">Visualization</div>
           </Grid.Column>
           <Grid.Column className="about-footer-img">
              <Image  src="https://www.gens1.com/genesisSite/images/about-partner.jpg" size="medium" onClick={onFooterSection} data-message="We invest in our relationships. It is a long, fruitful journey and we are with you from start to finish, and beyond.
              - Steve Arikian, MD" data-key="Partnership at Heart"

              />

              <div class="top-left">Partnership At Heart</div>
           </Grid.Column>
           <Grid.Column className="about-footer-img">
           <Image  src="https://www.gens1.com/genesisSite/images/about-value.jpg" size="medium" onClick={onFooterSection} data-message="It is not just the speed with which we produce results or the quality of evidence we provide, but our constant focus on added value that makes us distinct from others.
           - Jianyi Lee, PhD" data-key="Value Focused"

           />

           <div class="top-left">Value Focused</div>
           </Grid.Column>
           <Grid.Column className="about-footer-img">
             <Image  src="https://www.gens1.com/genesisSite/images/about-bigPic.jpg" size="medium" onClick={onFooterSection} data-message="We not only think about the current engagement, we have the big picture in mind. How our work fits with your long term goals is an important part of our process.
             - Michael Livingstone, MA" data-key="The Big Picture"/>

             <div class="top-left">The Big Picture</div>
             <br />
           </Grid.Column>
         </Grid.Row>
       </Grid>


    </div>
  )
}

export default Navigation
