import React from 'react'
// import ComponentGrid from './ComponentGrid'
// import Navigation from './NavigationComponent'

const Layout = (props) => {
    const {layout} = props;
    return (
        <>
            { !!layout && layout.hasHeader ?
                <header></header> :null
            }
            { !!layout && layout.hasSidebar ?
                <aside></aside> :null
            }
            { props.children }
            { !!layout && layout.hasFooter ?
                <footer></footer> :null
            }
        </>
        );
    };
export default Layout;