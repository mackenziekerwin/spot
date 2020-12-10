import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'

function Spotting(props) {
  const { dog, image_url } = props.content;
  console.log(image_url);
  return (
    <Card>
      <img width="100px" src={image_url} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            {dog}
          </Typography>
      </CardContent>
    </Card>
  )
}

export default Spotting;
