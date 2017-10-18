import React from 'react'
import {Grid} from 'semantic-ui-react'

const IndustryCol = ({title, message, backgroundImage, fontColor}) => {

  const style = { backgroundImage: `url(${backgroundImage})`, height: "800px", color: fontColor}
  return(
      <Grid.Column>
        <div style={ style }>
        <h1 className="servicesTitle">{title}</h1>
        <h4 className="servicesMessage">{message}</h4>
        </div>
      </Grid.Column>
  )
}

export default IndustryCol
