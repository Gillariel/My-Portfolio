import Grid from '@material-ui/core/Grid/Grid'
import React from 'react'

interface IImageWithParagraphProps {
  imgSettings: {
    src: string,
    position: 'left' | 'right'
    size: string
  }
  spacing: 'all-repulsed' | 'center' | 'all-centered'
  children: any
}

const ImageWithParagraph = ({
  imgSettings,
  spacing,
  children
}: IImageWithParagraphProps) => {
  return (
    <Grid container>
      <Grid item xs={12} md={6} lg={6} style={{ textAlign: "right", padding: "20px" }}>
        <img src={imgSettings.src} width={imgSettings.size} />
      </Grid>
      <Grid item xs={12} md={6} lg={6} style={{ padding: "20px" }}>
        {children}
      </Grid>
    </Grid>
  )
}

export default ImageWithParagraph
