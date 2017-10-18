import React from 'react'
import {Grid} from 'semantic-ui-react'

const ServiceCol = ({title, subTitle, message, backgroundImage}) => {
  const style = { backgroundImage: `url(${backgroundImage})`, height: "800px"}
  return(
      <Grid.Column>
        <div style={ style }>
         <h1 className="servicesTitle">{title}</h1>
         <h2 className="servicesSubtitle">{subTitle}</h2>
         <h4 className="servicesMessage">{message}</h4>
        </div>
      </Grid.Column>
  )
}

export default ServiceCol
