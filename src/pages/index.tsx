import React from 'react'
import Layout from '../layout'
import MyCarousel from '../components/carousel'
import Grid from '@material-ui/core/Grid/Grid'

export default function Home() {
  return (
    <Layout>
      <Grid container style={{ backgroundColor: "lightblue" }}>
        <Grid item xs={12}>
          <MyCarousel 
            items={[
              {
                text: <><h1>Hi, I am Nathan Foerster</h1>
                        <p>Aslo known as Gillariel on the web</p></>,
                image: '/assets/images/me-rounded.png',
                imagePosition: 'left',
              },
              {
                text: <><h2>This portfolio will show you who I really am</h2>
                              <ul className="list-unstyled">
                                <li>My skills</li>
                                <li>My previous works</li>
                                <li>And informations about my person</li>
                              </ul></>, 
                image: '/assets/images/skills.png', 
                imagePosition: 'right',
              },
              {
                text: <><h1>A Full-stack Developer</h1>
                              <ul className="list-unstyled">
                                <li>All current OOP languages</li>
                                <li>Web technologies</li>
                                <li>Server side programming</li>
                                <li>Network solutions</li>
                              </ul></>, 
                image: '/assets/images/programming.png', 
                imagePosition: 'left'
              },
              {
                text: <><h1>A Video game passionate 🎮</h1>
                              <ul className="list-unstyled">
                                <li>Use of game engine</li>
                                <li>Gameplay programmer</li>
                                <li>Level design</li>
                                <li>But first passionate ❤️</li>
                              </ul></>, 
                image: '/assets/images/gaming.png', 
                imagePosition: 'right'
              },
              {
                text: <><h1>But also an artist</h1>
                              <ul className="list-unstyled">
                                <li>Playing Music</li>
                                <li>Writing Music</li>
                                <li>Digital design</li>
                              </ul></>, 
                image: '/assets/images/art.png', 
                imagePosition: 'left'
              },
            ]}
            backgroundColor="lightblue"
            itemsPerSlide={1}
          />
          <MyCarousel 
            items={[
              { image: '/assets/images/js.png' },
              { image: '/assets/images/ts.png' },
              { image: '/assets/images/react.png' },
              { image: '/assets/images/csharp.png' },
              { image: '/assets/images/java.png' },
              { image: '/assets/images/node.png' },
              { image: '/assets/images/golang.png' },
              { image: '/assets/images/dialogflow.png' },
              { image: '/assets/images/unity.png' },
              { image: '/assets/images/ue4.png' },
            ]}
            backgroundColor="lightblue"
            backgroundImage="/assets/images/technology-bg.jpg"
            itemsPerSlide={3}
          />
        </Grid>
      </Grid>
    </Layout>
  )
}
