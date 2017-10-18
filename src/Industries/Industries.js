import React from 'react'
import { Grid } from 'semantic-ui-react'
import IndustryCol from './components/IndustryCol'

const sectionTitles = ["BIOPHARMACEUTICALS AND MEDICAL DEVICES", "FINANCE", "HEALTHCARE LITIGATION"]

const sectionBody = ["The healthcare product industry presents enormous risks and enormous opportunities. New products face many potential stumbling blocks on their way to market. Genesis Research can help you gain critical insights about your drug, biologic, or device so you can overcome the obstacles it faces throughout its life cycle.", "Both investors and healthcare sector executives need to understand the true value and revenue potential of their products. This requires an in-depth assessment of a host of factors from potential competition to questions of regulatory approval. We help turn complex scientific data into actionable business information for both industry leaders and stakeholders.", "Legal and regulatory matters are a reality in the Life Sciences industry. Our suite of services can generate the information you need to deal with these issues. Whether you are seeking to demonstrate the safety of your product to regulators or defend your intellectual property against competitors, we can help you make your case."]

const backgroundImages = ["https://www.gens1.com/genesisSite/images/Biopharmaceutical1.jpg", "https://www.gens1.com/genesisSite/images/Finance2.jpg", "https://www.gens1.com/genesisSite/images/Legal1.jpg"]

const fontColors = ["black", "white", "black"]


const Intustries = () => {

  let data = sectionTitles.map((title, index) => <IndustryCol key={index} title={title} message={sectionBody[index]} backgroundImage={backgroundImages[index]} fontColor={fontColors[index]}/>)


  return(
    <div>
      <Grid columns={3}  className="container">
       <Grid.Row>
          {data}
       </Grid.Row>
     </Grid>
    </div>
  )
}

export default Intustries
