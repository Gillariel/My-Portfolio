import React from 'react'
import Layout from '../layout'
import MyCarousel from '../components/carousel'
import Grid from '@material-ui/core/Grid/Grid'
import UnderlineTitle from '../components/text/underline-title'
import Button from '../components/controls/buttons/button'
import Typography from '@material-ui/core/Typography/Typography'
import Colored from '../components/text/colored'
import ImageWithParagraph from '../components/layout/image-with-paragraph'
import { getListOfAllFile, FileIndex } from '../utils/public-files' 
import BlogPreview from '../components/layout/blog-preview';

const NUMBER_OF_LATEST_BLOGS_PREVIEW = 4;

export default function Home() {

  const [latestBlogs, setLatestBlogs] = React.useState<FileIndex[] | null>(null);

  React.useEffect(() => {
    (async () => {
      const blogsMetadata = await getListOfAllFile("/blog");
      console.log(blogsMetadata)
      if(!blogsMetadata) setLatestBlogs([]);
      else 
        setLatestBlogs(blogsMetadata.sort((a, b) => a.date.getTime() - b.date.getTime()).slice(0, NUMBER_OF_LATEST_BLOGS_PREVIEW));
    })()
  }, []);

  console.log(latestBlogs)

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} style={{ backgroundColor: "lightblue" }}>
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
        </Grid>
        <Grid item xs={12} style={{ marginRight: "auto", marginTop: "20px", marginBottom: "40px" }}>
          <UnderlineTitle variant="h4" text={"LAST PROJECT"} />
          <ImageWithParagraph
            imgSettings={{
              src: "/assets/images/index/google-home.png",
              position: "left",
              size: "400px"
            }}
            spacing="all-centered"
          >
            <Typography variant="h6"><Colored><b>DIALOGFLOW ASSISTANT</b></Colored></Typography>
            <br />
            <Typography variant="subtitle1">
              As an internship at <Colored>Cronos Group</Colored>, I have to make a bot working on the <Colored>Google Assistant</Colored>. This bot will allow, vocally, the user to get train's schedule and, if he wants to, order his ticket and even directly generate his invoice and received it, ready to pay, by mail!
            </Typography>
            <br />
            <Typography variant="subtitle2">
              To make this bot, I use the last technology provided by Google, 
              <Colored>DialogFlow</Colored>, to build the actions of the bot. 
              I also use <Colored>Firestore</Colored>, the nosql database of <Colored>Firebase</Colored>, 
              to quickly and easily access our data and <Colored>Microsoft Flow</Colored> 
              to send mail without worry of the technology used ! 
              All of this process is handle by a <Colored>Node.js</Colored> webhook hosted on the <Colored>Heroku platform</Colored>.
            </Typography>
            <br />
            <Button text="Test it!" link="/project/dialogflow/oui-lu" />
          </ImageWithParagraph>
        </Grid>
        <Grid item xs={12}>
          <MyCarousel
            title="Overview of my technologies" 
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
            imgMaxSize="150px"
            useGreyEffect={true}
            backgroundColor="lightblue"
            backgroundImage="/assets/images/technology-bg.jpg"
            itemsPerSlide={3}
          />
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={8} style={{ marginRight: "auto", marginTop: "20px", marginBottom: "40px" }}>
          <UnderlineTitle variant="h4" text={"FROM MY BLOG"} />
          <Typography>
            When I learn something useful, I like to synthetize it into a document that can help other people to learn it faster. 
            Here is my last articles but feel free to check <Colored>my blog</Colored> for other one !
          </Typography>
          {latestBlogs && (
            latestBlogs.length === 0 
              ? <Typography style={{ textAlign: "center" }}>It seems loading of blogs failed or that I do not have any blogs yet :/</Typography>
              : <Grid container>
                {latestBlogs.map(blog => <Grid item md={3}>
                  <BlogPreview key={Math.random() * 25000} { ...blog } />
                </Grid>)
                }
              </Grid>
          )}
          {/* 
            TODO Add blog last X blog items here
              Should fetch them from static json file (loaded in useEffect)
              use infinite loading here? may not be a good idea :/

              Foreach, render a custom card element with image (same hover effet as old site), title, 
              techno (link to blog/techno), small desc and direct link
          */}
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Layout>
  )
}
