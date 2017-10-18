import React from 'react'
import Navigation from './components/Navigation'

class About extends React.Component {
  constructor(){
    super()
    this.state = {
      activeAbout: 'WHO WE ARE',
      message: "Genesis Research is an international healthcare consultancy providing end-to-end evidence development, optimization and communication services for Life Sciences groups.",
      backgroundImage: "https://www.gens1.com/genesisSite/images/WhoWeAre4.jpg"
    }

  }


  onFooterSection = (e) => {
    document.querySelector("#aboutBackground").style.backgroundImage = `url(${e.target.src})`
    this.setState({
      activeAbout: e.target.dataset.key,
      message: e.target.dataset.message,
      backgroundImage: e.target.src
    })
  }



  render(){
    return(
      <div id="aboutBackground">
        <h1 className="title" >WHO WE ARE</h1>

        <h3 className="message">{this.state.message}</h3>

        <h2>Our Guiding Principles</h2>

        <Navigation onFooterSection={this.onFooterSection}/>

      </div>
    )
  }
}

export default About
