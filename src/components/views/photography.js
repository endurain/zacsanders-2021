import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { SRLWrapper } from "simple-react-lightbox";
    
import useFetch from '../hooks/useFetch';

export default function Posts() {
    const posts = useFetch('https://wp-zacsanders.test/wp-json/wp/v2/pictures/');
    // console.log(posts);
  return (
    <SRLWrapper>
      <Grid container spacing={2}>
        {posts && posts.map((post, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <Card>
            <CardContent>
              <Typography
                  color="textSecondary"
                  gutterBottom
                  dangerouslySetInnerHTML={{__html: post.title.rendered}} 
              />
              <Typography
                  variant="body2"
                  component="p"
                  dangerouslySetInnerHTML={{__html: post.content.rendered}} 
              />
              
                <img src={post.better_featured_image.source_url} alt="test" /> 
            </CardContent>
          </Card>
        </Grid>
        ))}
      </Grid>
    </SRLWrapper>
  );
}