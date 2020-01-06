import React, {Component} from 'react';
import *  as actions from '../store/actions';
import { connect } from 'react-redux';

class Catalogue extends Component{
    constructor() {
      super();
         this.state = {}
      }
    componentDidMount() {
        const { match: { params } } = this.props;
        const brand = params.category;
        this.props.getSkuList(brand)
    }

    render() {
      return (
        <>
        </>
      )
    }
}

const mapStateToProps = state => {
	return {
        skuList: state.navList.skuList
	}
};

const mapDispatchToProps = dispatch => {
  return {
    getSkuList: (brand) => dispatch(actions.getSkuList(brand)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);