import React from 'react'
import { Typography } from '@material-ui/core'
import Layout from '../layout'
import ConditionalLoader from '../components/conditional-loader';
import Grid from '@material-ui/core/Grid/Grid';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import CardActions from '@material-ui/core/CardActions/CardActions';
import Button from '@material-ui/core/Button/Button';
import { Link } from 'gatsby';

// import * as jsonLanguages from 'static/data/available-languages.json';

export default function Contact() {
  const [languages, setLanguages] = React.useState<{ id: string, name: string }[] | null>(null);
  React.useEffect(() => {
    //(async () => {
      //@ts-ignore
      const langs = (require('static/assets/data/available-languages.json')) as { id: string, name: string }[]
      console.log(langs);
      if(langs) setLanguages(langs)
    //})();
  }, [])
  return (
    <Layout>
      <Typography>Available languages</Typography>
      <ConditionalLoader
        variable={languages}
        ComponentBuilder={(languages: { id: string, name: string }[]) => <Grid container>
            {languages.map(l => <Grid item key={l.id + '_' + l.name} className="scale-hover">
              <Card style={{ backgroundColor: "lightgrey", margin: "20px" }}>
                <CardContent style={{ textAlign: 'center' }}>
                  <Typography><b>{l.name}</b></Typography>
                  <img style={{ maxWidth: "200px", maxHeight: "200px" }} src={`/assets/images/${l.id}.png`} />
                </CardContent>
                <CardActions>
                  <Button size="small"><Link className="no-link" to={`/blog?language=${l.id}`}>See it!</Link></Button>
                </CardActions>
              </Card>
            </Grid>)}
          </Grid>
        }
      />
    </Layout>
  )
}
