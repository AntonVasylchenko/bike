import React from 'react'
import "./collectionitems.css"
import CollectionItem from '../collectionItem/CollectionItem';
import { useDispatch, useSelector } from 'react-redux';
import { Select } from '../../ui/Select';
import { setUserToCartAction } from '../../store/action/userAction';


const filtersArrBrand = ["All", "SCHWINN", "GIANT", "CANNONDALE",];
const filtersArrSize = ["All", "20", "22", "24"];
const initialTime = {
    day: 0,
    hour: 0,
    minute: 0
}

const CollectionItems = () => {
    const dispatch = useDispatch();
    const collectionItems = useSelector(state => state.data.products);
    const typeRent = useSelector(state => state.data.typeRent);
    const typeDelivety = useSelector(state => state.data.typeDelivery);
    const timeRent = useSelector(state => state.data.timeRent);
    const isLogin = useSelector(state => state.user.isLogin);
    const [item,setItems] = React.useState([]);
    const addToCart = (obj) => {
        setItems(prev => [...prev,obj]);
        if (!localStorage.getItem("user")) return
        const {id} = JSON.parse(localStorage.getItem("user"))[0];
        if(id === undefined && id === null) return;
        dispatch(setUserToCartAction([id,item]));
        localStorage.setItem("localItem",JSON.stringify(item))
    
    }

    React.useEffect(()=> {
        if (localStorage.getItem("localItem")) {
            setItems(JSON.parse(localStorage.getItem("localItem")));
        }
    },[])
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
                                                    isLogin={isLogin}
                                                    timeRent={timeRent.hasOwnProperty("day") ? timeRent : initialTime}
                                                    typeRent={typeRent}
                                                    typeDelivety={typeDelivety}
                                                    key={el.id}
                                                    booked={el.booked}
                                                    size={el.size}
                                                    brand={el.brand}
                                                    title={el.name}
                                                    price={+el.price / 100}
                                                    addToCart={addToCart}
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