import React from 'react';
import Card from './UI/Card';

interface Idata {
    id: Number,
    title: string,
    comment: string
}

const ListItem: React.FC<any> = (props: any) => {

    const deleteItem = () => {
        props.deleteHandler(props.podaci.id)
    }

    return (
        <Card key={props.podaci.id} bg="bg-lightGray">
            <span className="text-green-300 text-2xl py-2">{props.podaci.title}</span>
            <span className="text-green-300">{props.podaci.comment}</span>
            <div className="flex justify-end">
                {/* <span 
                    className="button bg-lightBlue"
                    onClick={editItem}
                >Edit</span> */}
                <span 
                    className="button bg-darkRed ml-3"
                    onClick={deleteItem}
                >Delete</span>
            </div>
        </Card>
    );
}

export default ListItem;