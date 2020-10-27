import React from 'react'
import Carousel, { autoplayPlugin, Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';

interface Item {
  text?: any;
  image: string;
  imagePosition?: "left" | "right";
  backgroundColor?: string;
}
interface IItemProps extends Item { imgMaxSize?: string, useGreyEffect?: boolean }

const Item = ({
  text,
  image,
  imagePosition,
  backgroundColor,
  imgMaxSize,
  useGreyEffect
}: IItemProps) => {
  const items = [];
  if(!text){
    return (
      <Grid item xs={4} style={{ textAlign: "center", alignSelf: "center", marginTop: "20px", paddingLeft: "10px", paddingRight: "10px" }}>
        <img className={`img-responsive ${useGreyEffect !== undefined && useGreyEffect !== false ? 'greyscale-image' : ''}`} 
          src={image} 
          width={imgMaxSize ?? ""} 
        />
      </Grid>
    )
  }

  const textComp = <Grid item xs={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
    <Typography variant="body1" style={{ textAlign: imagePosition, marginTop: "20px" }}>
      {text}
    </Typography>
  </Grid>
  const imageComp = <Grid item xs={6} style={{ textAlign: imagePosition === "left" ? "right" : "left", marginTop: "20px", paddingLeft: "10px", paddingRight: "10px" }}>
    <img className={`img-responsive ${useGreyEffect !== undefined && useGreyEffect !== false ? 'greyscale-image' : ''}`} src={image} />
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
  title?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  imgMaxSize?: string;
  useGreyEffect?: boolean;
  items: Item[];
  itemsPerSlide: number
}

const buildGrouped = (items: Item[], nbItemPerGroup: number, imgMaxSize?: string, useGreyEffect?: boolean) => {
  const result: any[] = [];
  let temp: any[] = []
  const ratio = nbItemPerGroup;
  items.forEach((item, i) => {
    if((i + 1) % ratio > 0 && i < items.length - 1)
      temp.push(<Item key={i} {...item} imgMaxSize={imgMaxSize} useGreyEffect={useGreyEffect} />)
    else {
      result.push(<Grid container>
        {temp}
        <Item key={i} {...item} imgMaxSize={imgMaxSize} useGreyEffect={useGreyEffect} />
      </Grid>);
      temp = [];
    }
  })
  return result
}

const MyCarousel = ({
  title,
  backgroundImage,
  backgroundColor,
  imgMaxSize,
  useGreyEffect,
  items,
  itemsPerSlide
}: IMyCarourelProps) => {
  const [value, setValue] = React.useState<number>(0);
  const onChange = (value: number) => setValue(value)

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundColor }}>
      {title && <Typography variant="h4" style={{ paddingTop: "20px", textAlign: "center" }}><b>{title}</b></Typography>}
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
          ? buildGrouped(items, itemsPerSlide, imgMaxSize, useGreyEffect)
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