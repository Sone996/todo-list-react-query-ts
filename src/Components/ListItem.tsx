import React from 'react';

interface props {
    items: []
}

const ListItem: React.FC<props> = (props) => {

    return (
        <div>List item</div>
        // <Card key={data.id} bg="bg-lightGray">
        //     <span className="text-green-300 text-2xl py-2">{data.title}</span>
        //     <span className="text-green-300">{data.comment}</span>
        //     <div className="flex justify-end">
        //         <span 
        //             className="button bg-lightBlue"
        //             onClick={editItem}
        //         >Edit</span>
        //         <span 
        //             className="button bg-darkRed ml-3"
        //             onClick={deleteItem}
        //         >Delete</span>
        //     </div>
        // </Card>
    );
}

export default ListItem;