import React from 'react';

const List: React.FC = () => {

    return (
        <div className="relative flex flex-grow">
            List
            {/* <Scroll>
                <div>
                    {
                    collection.map(item => (
                        <ItemList
                            key={item.id}
                            data={item}
                            deleteHandler={deleteHandler}
                            editHandler={editHandler}
                        />
                    ))
                    }
                </div>
            </Scroll> */}
        </div>
    );
}

export default List;