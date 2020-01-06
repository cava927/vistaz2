import React from 'react'

const ItemList = props => {
    let {text,index,classItem, goTo} = props;
    return (
        <>
        <li key={index} className={classItem} onClick={goTo}>
            <span>
                {text}
            </span>
            {props.children}
        </li>
        </>
    )
};

export  default  ItemList;