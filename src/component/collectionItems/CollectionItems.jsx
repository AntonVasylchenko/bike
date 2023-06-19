import React from 'react'
import "./collectionitems.css"
import CollectionItem from '../collectionItem/CollectionItem';
import { useDispatch, useSelector } from 'react-redux';
import { Select } from '../../ui/Select';


const filtersArrBrand = ["All", "SCHWINN", "GIANT", "CANNONDALE",];
const filtersArrSize = ["All", "20", "22", "24"];


const CollectionItems = () => {
    const collectionItems = useSelector(state => state.data.products);
    const [para, setPara] = React.useState(
        {
            brand: "",
            size: ""
        })

    const handleChangeBrand = (event) => {
        setPara(prev => {
            return {
                ...prev, brand: event.target.value
            }
        })
    }
    const handleChangeSize = (event) => {
        setPara(prev => {
            return {
                ...prev, size: event.target.value
            }
        })
    }


    const sortCollectionItems = () => {
        if (para.brand === "" && para.size === "") return collectionItems;
        if (para.brand === "" && para.size !== "") {
            return (
                collectionItems.filter(el => +el.size === +para.size)
            )
        }
        if (para.brand !== "" && para.size === "") {
            return (
                collectionItems.filter(el => el.brand === para.brand)
            )
        }
        if (para.brand !== "" && para.size !== "") {
            return (
                collectionItems.filter(el => {
                    return el.brand === para.brand && +el.size === +para.size
                })
            )
        }
    }

    return (
        <>
            {
                collectionItems.length !== 0 &&
                <section className='collection-items'>
                    <div className="collection-items_container page-width">
                        <div className="collection-items_filter">
                            <Select
                                className="item-filter_brand"
                                name="brand"
                                array={filtersArrBrand}
                                changePara={handleChangeBrand}
                            />
                            <Select
                                className="item-filter_size"
                                name="size"
                                array={filtersArrSize}
                                changePara={handleChangeSize}
                            />
                        </div>
                        <div className="collection-items_wrapper">
                            <>
                                {
                                    sortCollectionItems().length !== 0
                                        ?
                                        sortCollectionItems().map(el => {
                                            return (
                                                <CollectionItem
                                                    key={el.id}
                                                    booked={el.booked}
                                                    size={el.size}
                                                    brand={el.brand}
                                                    title={el.name}
                                                    price={+el.price / 100}
                                                />
                                            )
                                        })
                                        : <h2 className='h2'>Not found bike</h2>
                                }
                            </>
                        </div>
                    </div>
                </section>
            }
        </>

    )
}

export default CollectionItems