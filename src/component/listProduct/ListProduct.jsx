import React from 'react'
import "./listproduct.css"
import { fetchData, fetchProduct } from '../../api/data'
import { useDispatch, useSelector } from 'react-redux'
import { CardProduct } from '../cardProduct/CardProduct'
import { Button, Preloader } from '../../ui'
import { getCollectionAction } from '../../store/action/dataAction'




const ListProduct = () => {
    const dispath = useDispatch();
    React.useEffect(() => {
        dispath(fetchData())
    }, [])

    const data = useSelector(state => state.data);
    const { isLoaded, data: products } = data;
    const getQueryPara = (name) => {
        dispath(getCollectionAction(name))
        dispath(fetchProduct(name))
    }


    return (
        <section className='list-collection'>
            <div className="page-width">
                <h2 className='list-collection_title captions'>Type of bicycle</h2>
                <div className='list-collection_container'>

                {
                        isLoaded
                            ?
                            products.map(el => {
                                return (
                                    <CardProduct
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
                <Button className="list-collection_button">Search</Button>
            </div>
        </section>
    )
}

export default ListProduct