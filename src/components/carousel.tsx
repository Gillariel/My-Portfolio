import React from 'react'
import Carousel, { autoplayPlugin, Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';

interface IItemProps {
  text?: any;
  image: string;
  imagePosition?: "left" | "right",
  backgroundColor?: string
}

const Item = ({
  text,
  image,
  imagePosition,
  backgroundColor,
}: IItemProps) => {
  const items = [];
  if(!text){
    return (
      <Grid item xs={4} style={{ textAlign: "center", alignSelf: "center", marginTop: "20px", paddingLeft: "10px", paddingRight: "10px" }}>
        <img className="img-responsive" src={image} />
      </Grid>
    )
  }

  const textComp = <Grid item xs={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
    <Typography variant="body1" style={{ textAlign: imagePosition, marginTop: "20px" }}>
      {text}
    </Typography>
  </Grid>
  const imageComp = <Grid item xs={6} style={{ textAlign: imagePosition === "left" ? "right" : "left", marginTop: "20px", paddingLeft: "10px", paddingRight: "10px" }}>
    <img className="img-responsive" src={image} />
  </Grid>
  
  if(imagePosition === 'left') items.push(imageComp, textComp)
  else items.push(textComp, imageComp)
  
  return (
    <Grid container>
      {items}
    </Grid>
  )
}

interface IMyCarourelProps {
  backgroundImage?: string;
  backgroundColor?: string;
  items: IItemProps[];
  itemsPerSlide: number
}

const buildGrouped = (items: IItemProps[], nbItemPerGroup: number) => {
  const result: any[] = [];
  let temp: any[] = []
  const ratio = nbItemPerGroup;
  items.forEach((item, i) => {
    console.log(i % ratio)
    if((i + 1) % ratio > 0 && i < items.length - 1)
      temp.push(<Item key={i} {...item} />)
    else {
      result.push(<Grid container>
        {temp}
        <Item key={i} {...item} />
      </Grid>);
      temp = [];
    }
  })
  console.log(result);
  return result
}

const MyCarousel = ({
  backgroundImage,
  backgroundColor,
  items,
  itemsPerSlide
}: IMyCarourelProps) => {
  const [value, setValue] = React.useState<number>(0);
  const onChange = (value: number) => setValue(value)

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundColor }}>
      <Carousel
        value={value}
        onChange={onChange}
        plugins={[
          'infinite', 
          {
            resolve: autoplayPlugin,
            options: {
              interval: 5000,
            }
          },
          {
            resolve: slidesToShowPlugin,
            options: {
             numberOfSlides: itemsPerSlide
            }
          },
       ]}   
       animationSpeed={1000}
      >
        {items && (items.findIndex(i => !!i.text)
          ? buildGrouped(items, itemsPerSlide)
          : items.map((item, i) => <Item key={i} {...item} />)
        )}
      </Carousel>
      <Dots
        value={value}
        onChange={onChange}
        number={itemsPerSlide > 1 ? (items.length / itemsPerSlide) : items.length}
      />
    </div>
  );
};

export default MyCarousel