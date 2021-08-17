import React from 'react';
import { useMutation, useQuery } from 'react-query';
import Scroll from './UI/Scroll';
import ListItem from './ListItem';
import InitItems from '../data.json';

const fetchTodoList = async () => {
    const res = InitItems;
    return res;
}

const List: any = () => {

    const { data, status } = useQuery('todos', fetchTodoList, {
        cacheTime: 1000,
    });

    //const mutation = useMutation(deleteTodo => { });

    if (!data) {
        return null;
    }

    const deleteHandler = (item: number) => {
        console.log(item);
    }

    if (status === 'success') {
        console.log(data);


        return (
            <div className="relative flex flex-grow">
                <Scroll>
                    <div>
                        {
                            data.map((item: { id: any }) => (
                                <ListItem
                                    key={item.id}
                                    podaci={item}
                                    deleteHandler={deleteHandler}
                                />
                                // editHandler={editHandler}
                            ))
                        }
                    </div>
                </Scroll>
            </div>
        );
    }
}

export default List;