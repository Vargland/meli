import './Description.scss';

import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';

import  BuyBox from "../../component/BuyBox/BuyBox";
import  DescriptionBox from "../../component/DescriptionBox/DescriptionBox";
import  Thumbnail from "../../component/Thumbnail/Thumbnail";

function Description({ itemDetail, itemDescription }) {
    const [ item, setItem ] = useState({});
    const [ description, setDescription ] = useState('');

    useEffect(() => {
        if (!isEmpty(itemDescription)) {
            setDescription(itemDescription.plain_text);
        }

        if (!isEmpty(itemDetail)) {
            setItem(itemDetail);
        }
    },[ itemDetail, itemDescription ]);
    return (
        <div className="description">
            <div className="description__container">
                <div className="description__left">
                    <div>
                        <Thumbnail size="big" source={ item && item.pictures ? item.pictures.at(0).url : item.thumbnail } />
                    </div>
                    <div>
                        <DescriptionBox description={ description }/>
                    </div>
                </div>
            <div className="description__buybox">
                <BuyBox item={ item } />
            </div>
            </div>
        </div>
    )
}

export default Description;
