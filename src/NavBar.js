import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

const NavBar = ({activeSection, changeSection}) => {
  return(
    <div>
      <div className="ui nine item menu">
      <Menu.Item name='Home' active={activeSection === 'Home'} onClick={changeSection} />
      <Menu.Item name='About Us' active={activeSection === 'About Us'} onClick={changeSection} />
      <Menu.Item name='Services' active={activeSection === 'Services'} onClick={changeSection} />
      <Menu.Item name='Industries' active={activeSection === 'Industries'} onClick={changeSection} />
      <Menu.Item name='Leadership' active={activeSection === 'Leadership'} onClick={changeSection} />
      <Menu.Item name='Careers' active={activeSection === 'Careers'} onClick={changeSection} />
      <Menu.Item name='Contact Us' active={activeSection === 'Contact Us'} onClick={changeSection} />
      <Menu.Item name='News' active={activeSection === 'News'} onClick={changeSection} />
      <Menu.Item name='ISPOR 2017' active={activeSection === 'ISPOR 2017'} onClick={changeSection} />
      </div>
    </div>

  )
}

export default NavBar
