import { Component } from "react";

import axios from 'axios';

import { Container } from './styles';

import NoMediaTweet from './components/NoMediaTweet';
import OneMediaTweet from './components/OneMediaTweet';
import TwoMediaTweet from './components/TwoMediaTweet';
import ThreeMediaTweet from './components/ThreeMediaTweet';
import FourMediaTweet from './components/FourMediaTweet';

class ImagesMainPage extends Component {

  state = {
    tweet: null
  }

  componentDidMount() {
    this.getTweet();
    setInterval(() => {
      this.getTweet();
    }, 120000);
  }

  async getTweet() {
    const response = await axios.get('http://localhost:3333/tweets/next');
    const tweet = response.data;

    this.setState({
      tweet: {
        message: tweet.message,
        medias: tweet.tweet_medias,
        userName: tweet.user.username,
        userImage: tweet.user.image
      }
    });
    setTimeout(() => {
      console.log(this.state)
    }, 1500);
  }

  render() {
    const imgStyle = { height: '450px', width: '900px', borderRadius: '6px', border: '2px solid #bb86fc' };
    const { tweet } = this.state;
    if (!tweet) {
      return (<></>);
    }

    if(tweet.medias.length === 0) {
    // if(false) {
      return (
        <NoMediaTweet message={tweet.message} userImage={tweet.userImage} userName={tweet.userName} />
      );
    }
    if(tweet.medias.length === 1) {
    // if(true) {
      return (<OneMediaTweet message={tweet.message} userImage={tweet.userImage} userName={tweet.userName} media={tweet.medias[0]}/>);
    }

    if (tweet.medias.length === 2) {
      return (<TwoMediaTweet message={tweet.message} userImage={tweet.userImage} userName={tweet.userName} medias={tweet.medias}></TwoMediaTweet>)
    }

    if (tweet.medias.length === 3) {
      return (<ThreeMediaTweet message={tweet.message} userImage={tweet.userImage} userName={tweet.userName} medias={tweet.medias}></ThreeMediaTweet>)
    }

    if (tweet.medias.length === 4) {
      return (<FourMediaTweet message={tweet.message} userImage={tweet.userImage} userName={tweet.userName} medias={tweet.medias}></FourMediaTweet>)
    }
    return (
      <>
        <Container className="d-flex justify-content-around p-6">
          <img
            style={imgStyle}
            alt="ig"
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            className="mr-10"
          />
          <img
            style={imgStyle}
            alt="ig"
            src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
          />
        </Container>
        <div className="w-100 text-center">
          <span className="text-light">Oieee</span>
          <span style={{ marginLeft: '24px' }} className="text-light">- Demente</span>
        </div>
        <Container className="d-flex justify-content-around p-6">
          <img
            style={imgStyle}
            alt="ig"
            src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg"
          />
          <img
            style={imgStyle}
            alt="ig"
            src="https://thumbs.dreamstime.com/b/imagination-girl-kiss-lion-love-nature-abstract-concept-young-steals-male-wildlife-children-like-to-imagine-play-129595579.jpg"
          />
        </Container>
      </>
    )
  }
}

export default ImagesMainPage;
