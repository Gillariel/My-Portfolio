import Button from '@material-ui/core/Button/Button'
import Card from '@material-ui/core/Card/Card'
import CardActions from '@material-ui/core/CardActions/CardActions'
import CardContent from '@material-ui/core/CardContent/CardContent'
import TextField from '@material-ui/core/TextField/TextField'
import Typography from '@material-ui/core/Typography/Typography'
import Autocomplete from '@material-ui/lab/Autocomplete/Autocomplete'
import { Link } from 'gatsby'
import React from 'react'

export default function _404() {
  const [link, setLink] = React.useState("");

  return (
    <div style={{ position: "fixed", top: 0, bottom: 0, right: 0, left: 0, backgroundColor: "lightgrey" }}>
      <Card style={{ minHeight: "50vh", maxHeight: "75vh", margin: "50px" }}>
        <CardContent style={{ justifyContent: "center" }}>
          <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: "center" }}>
            Oups! This link does not seems to exists :'(
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{ textAlign: "center" }}>
            The page may have been deleted or you might have enter a wrong url. Type another url below or <Link to="/">Go back to Home</Link>
          </Typography>
          <Autocomplete
            id="combo-box-demo"
            options={["blabalbla", "plpplplplp", "ziuefgizufce"]}
            style={{ margin: " 20px 50px 0px 50px" }}
            onChange={(e, value) => setLink(value ?? "")}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
          />
        </CardContent>
        {link !== "" && <CardActions>
          <Button style={{ width: "100%", textAlign: "center"}}><Link to={"/" + link}>Go!</Link></Button>
        </CardActions>}
      </Card>
    </div>
  )
}
