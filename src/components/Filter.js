import React from 'react';

function Filter({greaseHandler, greasyWords}) {
    return(
        <button onClick={greaseHandler}>{greasyWords}</button>
    )
}

export default Filter;