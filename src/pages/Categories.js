import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../store/actions";
import ItemList from '../components/itemList'


class Categories extends Component {
  constructor() {
    super();
       this.state = {}
    }
  componentDidMount() {
    this.props.getCategoryList()
  }

  getBrandsSkus = (code) =>{
     return  this.props.history.push(`/Catalogue/${code}`)
  }

  render() {
    let {categoryList, brands} = this.props; 
    return (
      <>
      <ul>
          {categoryList ? 
            categoryList.map((category,index)=>{
              return <ItemList index={index} text={category.label} classItem="cardItem">
                      <ul>
                        {category.brands.map((brand, i)=>{
                          return <ItemList index={i} text={brand.title} classItem="miniCardItem" goTo={()=>this.getBrandsSkus(brand.code)}/>
                        })}
                      </ul>
                      </ItemList>
            }) : null}
        </ul>
      </> 
    )
  }

}

export const mapStateToProps = state => {
    return {            
        categoryList:state.navList.categoryList,
    }
  };
    
  const mapDispatchToProps = dispatch => {
    return {
        getCategoryList: () => dispatch(actions.getCategoryList()),
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps) (Categories);