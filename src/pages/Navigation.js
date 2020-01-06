import React, {Component} from 'react';
import *  as actions from '../store/actions';
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import ItemList from '../components/itemList'

class Navigation extends Component{
    constructor() {
      super();
         this.state = {
            pageList:null,
         }
      }
    componentDidMount() {
      this.props.navSettings()
    }

    render() {
      let {pageList} = this.props; 
      return (
        <>
        {
          pageList ? <ul>
              {pageList.map((page,index)=>{
                return <Link to={page.Title} key={index}>
                          <ItemList text={page.Title} classItem= "navigationItem"/>
                      </Link>
              })}
          </ul> : null
        }
        </>
      )
    }
}

const mapStateToProps = state => {
	return {
    pageList: state.navList.pageList
	}
};

const mapDispatchToProps = dispatch => {
  return {
    navSettings: () => dispatch(actions.navSettings()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);