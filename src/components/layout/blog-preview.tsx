import Card from '@material-ui/core/Card/Card'
import CardMedia from '@material-ui/core/CardMedia/CardMedia'
import Typography from '@material-ui/core/Typography/Typography'
import { ImportContacts } from '@material-ui/icons'
import React from 'react'
import Button from '../controls/buttons/button'

const customStyles = (isHovered: boolean) => {
  return {
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    },
    card: {
      position: 'relative' as 'relative',
    },
    overlay: {
      position: 'absolute' as 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: isHovered ? "block" : "none",
      color: isHovered ? '#38a7bb' : 'transparent',
    }
  }
}

interface BlogPreviewProps {
  image: string;
  title: string;
  description: string;
  category: string;
  link: string;
  key: string | number;
}

const BlogPreview = ({
  category,
  description,
  image,
  key,
  link,
  title,
}: BlogPreviewProps) => {
  //TODO Hover  like that will not works
  //Need css here, will be a lot faster and looks far better
  const [isHovered, setIsHovered] = React.useState(false);
  const styles = customStyles(isHovered);

  return <div key={key}>
    <Card style={styles.card}>
      <CardMedia image={image} style={styles.media} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div style={styles.overlay}>
        <Button 
          iconSettings={{
            icon: <ImportContacts />,
            position: "start"  
          }}
          link={link}
          text="READ MORE"
          invertColor
        />
      </div>
    </Card>
    <Typography variant="h6" style={{ textAlign: "center" }}>{title}</Typography>
    <Typography variant="caption" component="p" style={{ textAlign: "center" }}>
      <a className="no-link--clean-blue" href={`/blog?language=${category}`}>{category}</a>
    </Typography>
    <Typography variant="caption" component="p" style={{ textAlign: "center" }}>
      {description}
    </Typography>
    <div style={{ textAlign: "center" }}>
      <Button link={link} text="CONTINUE READING" />
    </div>
    {/*
    <div className="blog-preview">
      <div className="blog-preview-image">

      </div>
      <div className="blog-preview-text">
        <Typography variant="h4">{title}</Typography>
        <Typography variant="caption">
          <a>{catagory}</a>
        </Typography>
        <
      </div>
    </div>
    */}
  </div>
}

export default BlogPreview
