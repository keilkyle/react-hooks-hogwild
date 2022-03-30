import React from 'react';

function Sort({nameSortHandler, weightSortHandler}) {
    return(
        <div>
            <button onClick={nameSortHandler}>Sort by Name</button>
            <button onClick={weightSortHandler}>Sort by Weight</button>
        </div>
    )
}

export default Sort;
