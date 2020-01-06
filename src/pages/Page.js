import React, {Component} from 'react';
import *  as actions from '../store/actions';
import Loader from "../components/Loader";
import Layout from "../components/Layout";
import Body from "../components/Body";

import { connect } from 'react-redux';



class Page extends Component{
    constructor() {
      super();
         this.state = {
            isLoading:false,
         }
      }

    componentDidMount() {
      this.props.setPageSettings(this.props.paramPage)
    }
    render() {
      let {isLoading,layout} = this.props; 
      return (
      <div className="" style={this.props.layoutGrid}>
        {!isLoading ? <>
          <Layout layout={layout}> 
            <Body/>
          </Layout>
        </> : <Loader/> }
      </div>
      )
    }
}

const mapStateToProps = state => {
	return {
    layout:state.page.layout,
	}
};

const mapDispatchToProps = dispatch => {
  return {
    setPageSettings: (paramPage) => dispatch(actions.setPageSettings(paramPage)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);