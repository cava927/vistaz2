import React, {Component} from 'react';
import *  as actions from '../store/actions';
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

class Products extends Component{
    constructor() {
      super();
         this.state = {
            pageList:null,
         }
      }
    componentDidMount() {
      this.props.getProductList()
    }

    render() {
      let {productList} = this.props; 
      return (
        <>
        {
          productList ? <ul>
              {productList.map((page,index)=>{
                return <Link to={page.Title} key={index}><li >
                        <span>{page.Title}</span>
                      </li> </Link>
              })}
          </ul> : null
        }
        </>
      )
    }
}

const mapStateToProps = state => {
	return {
    productList: state.navList.productList
	}
};

const mapDispatchToProps = dispatch => {
  debugger
  return {
    getProductList: () => dispatch(actions.getProductList()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);