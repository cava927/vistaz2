export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state'); 
        if(serializedState === null) {
            return undefined;
        }
        
        let parsedState = JSON.parse(serializedState),
            dateString = parsedState.timestamp,
            now = new Date().getTime().toString();
          
        let isValid = compareTime(dateString, now);      
        if(isValid) 
            return parsedState.state;
        else 
            return undefined;
        
    } catch (err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try{
        let now = new Date().getTime();
        let objWithTime = {state: state, timestamp: now}
        const serializedState = JSON.stringify(objWithTime);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        console.log(err);
    }
}

const compareTime = (state, now) => {    
    let dateNow = new Date(parseInt(now));
    let dateState  = new Date(parseInt(state));
    if((dateNow - dateState) < (6 * 60 * 60 * 1000)) { //6 ore  
        console.log('valid')
        return true
    } else {
        console.log('not valid')
        return false
    }
}