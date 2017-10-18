import React from 'react'
import { Grid } from 'semantic-ui-react'
import ServiceCol from './components/ServiceCol'

const sectionTitles = ["Research", "Optimize", "Communication"]
const sectionSubTitles = ["Evidence Development", "Evidence Access", "Evidence Communication"]

const sectionBody = ["Assembling and integrating high-quality scientific evidence is critical to gathering insights on patient outcomes, therapeutic area needs and product value. We offer a suite of services that employs rigorous qualitative and quantitative research methods to effectively generate actionable intelligence.", "The true potential of your data assets can be unlocked through intuitive, interactive and user-friendly analytic platforms. Our customized and innovative solutions disseminate evidence and demonstrate value efficiently across various stakeholders.", "We leverage our technical expertise, writing and editorial capabilities to translate complex scientific data into key value messages and evidence. Our team is well-equipped to help you strategize evidence dissemination and create engaging and scientifically valid content to drive decision-making."]

const backgroundImages = ["https://www.gens1.com/genesisSite/images/Research2.jpg", "https://www.gens1.com/genesisSite/images/Optimization2.jpg", "https://www.gens1.com/genesisSite/images/Communicate1.jpg"]

const Services = () => {

  let data = sectionTitles.map((title, index) => <ServiceCol key={index} title={title} subTitle={sectionSubTitles[index]} message={sectionBody[index]} backgroundImage={backgroundImages[index]}/>)


  return(
    <div>
      <h1 id="title"> Evidence Development, Access, and Communication for Life Sciences Groups</h1>

      <Grid columns={3}  className="container">
       <Grid.Row>
          {data}
       </Grid.Row>
     </Grid>
    </div>
  )
}

export default Services
