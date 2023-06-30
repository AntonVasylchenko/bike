import React from 'react'
import "./listproduct.css"
import { fetchData, fetchProduct } from '../../api/data'
import { useDispatch, useSelector } from 'react-redux'
import { CardProduct } from '../cardProduct/CardProduct'
import { Button, Preloader } from '../../ui'
import { getCollectionAction } from '../../store/action/dataAction'
import { allUserFetch } from '../../api/user'




const ListProduct = () => {
    const dispath = useDispatch();
    const data = useSelector(state => state.data);
    React.useEffect(() => {
        dispath(fetchData())
        dispath(allUserFetch())
    }, [])

    const { isLoaded, data: type, collection } = data;
    const getQueryPara = (name) => {
        dispath(getCollectionAction(name))
    }
    const showProductItems = () => {
        dispath(fetchProduct(collection))
    }

    return (
        <section className='list-collection'>
            <div className="page-width">
                <h2 className='list-collection_title captions'>Type of bicycle</h2>
                <div className='list-collection_container'>

                    {
                        isLoaded
                            ?
                            type.map(el => {
                                return (
                                    <CardProduct
                                        activePlus={collection === el.name ? true : false}
                                        getSerch={getQueryPara}
                                        key={el.id}
                                        name={el.name}
                                        description={el.description}
                                    />
                                )
                            })
                            :
                            <Preloader />
                    }
                </div>
                {collection.length !== 0
                    ? <Button onClick={showProductItems} className="list-collection_button">Search</Button>
                    : <Button disabled={true} onClick={showProductItems} className="list-collection_button">Search</Button>
                }
            </div>
        </section>
    )
}

export default ListProduct