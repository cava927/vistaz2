export function getFullContainers(containers, contents) {
    let newContainersArray = [];
    containers.map(container => {
        const fullContainer = {
            ...container,
            contentlets: contents[container.containerId]
        };
        newContainersArray.push(fullContainer)
    });
    containers = [...newContainersArray]
    return containers
};

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export function sortByPriority (containers){
   return containers.sort((a, b) => (a.priority > b.priority) ? 1 : -1)
}

export function createContentMap (contentsMap, contents){
    let map = contentsMap
    contents.map(content => {
        map[content.uuid] = content;
    })
    console.log(map,'map')
    return map;
 }


// export function createMainGrid(main){
//     let mainRows = main.rowNumber;
//     let gridTemplateAreas = "";
//     let asideLeftStyle= "";
//     let asideRightStyle= "";
//     let mainStyle= "";
//     let articleStyle= "";
//     if(main.asideLeft){
//         asideLeftStyle = `span ${main.asideLeftSpan}`;
//         let z = 0;
//         while (z <= main.asideLeftSpan){
//             gridTemplateAreas = gridTemplateAreas + "'asideLeftSpan'";
//             z++;
//         }
//     };
//     if(main.numberMainContainer > 0 ){
//         mainStyle = `span ${main.mainSpan}`;
//         let k = 0;
//         while( k <= main.mainSpan){
//             gridTemplateAreas = gridTemplateAreas + "'asideLeftSpan'";
//             k++;
//         }
//     };
//     if(main.asideRight){
//         asideRightStyle = `span ${main.asideRightSpan}`;
//         let j = 0;
//         while( j <= main.asideRightSpan){
//             gridTemplateAreas = gridTemplateAreas + "'asideLeftSpan'";
//             j++;
//         }
//     };
//     if(main.article){
//         articleStyle = `span ${main.articleSpan}`;
//         let i = 0;
//         while (i <= main.articleSpan){
//             gridTemplateAreas = gridTemplateAreas + "'asideLeftSpan'";
//             i++;
//         }
//     };
//     const mainLayout = {
//         "gridTemplateColumns":`repeat(${mainRows}), auto)`,
//         'gridTemplateAreas': `${gridTemplateAreas}`
//     }
//     console.log(mainLayout);
// }

//  const Catalogue = ({ match }) => {
//   const category = match.params.category;
//   switch(category){
//     case "occhiali": console.log('1');
//     break;
//     case "accessori": console.log('2');
//     break;
//     case "configurator": console.log(category);
//     break;
//     case "processorx": console.log(category);
//     break;
//   };
//   return null
// }

export function createLayoutGrid(data){
    let gridTemplate = "";
    if(data.hasHeader){
        gridTemplate = "'header header header header' "
    };
    if(data.body){
        gridTemplate = gridTemplate +"'main main main"
    };
    if(data.hasSidebar){
        gridTemplate = gridTemplate + " sidebar'"
    }else {
        gridTemplate = gridTemplate + " main'"
    }
    if(data.hasFooter){
        gridTemplate = gridTemplate + "'footer footer footer footer'"
    };

    let layout = {
        // "gridTemplateColumns":`repeat(${templateColumns}), 1fr)`,
        "gridTemplateAreas":`${gridTemplate}`,
    }
    // let contentMap = {}
    // createMainGrid(data.layout.main);
    // createFooterHeaderGrid(data.layout.header, data.headerContainer);
    // createFooterHeaderGrid(data.layout.footer, data.footerContainer);
    // createContent(data.footerContent);
    // createContent(data.headerContent);
    // createrContent(data.mainContent);
    return layout;
}
