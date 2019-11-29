import React from 'react';
import './index.css';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

class Index extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
          image: this.props.imageList[0],
          searchData: ''
        };
    }
   
    componentDidMount() {
      // this.timer = setInterval(function () {
      //   var opacity = this.state.opacity;
      //   opacity -= .05;
      //   if (opacity < 0.1) {
      //     opacity = 1.0;
      //   }
      //   this.setState({
      //     opacity: opacity
      //   });
      // }.bind(this), 100);
    }

    changeBanner (index) {
      this.setState({
        image: this.props.imageList[index]
      })
    }

    searchEvent(){
      console.log(this.state.searchData)
    }
   
    render () {
      return (
        <Box style={{opacity: this.state.opacity}}>
          <h1>
            Hello {this.props.name}
          </h1>
          <div className="banner" style={{backgroundImage: "url('" + this.state.image + "')"}}>
            <div className="search">
              <Input id="search-input" onChange={(e) => {
                this.setState({
                    searchData: e.target.value.toUpperCase(),
                });
              }}/>
              <Button variant="contained" color="primary" onClick={(e) => this.searchEvent(e)}>
                搜索
              </Button>
            </div>
            <div className="banner-tab">
              {this.props.imageList.map((v, i) => (
                <span key={"list-"+i} className="banner-tab-inner" onClick={this.changeBanner.bind(this, i)}>{i}</span>
              ))}
            </div>
          </div>
        </Box>
      );
    }
}

export default Index;