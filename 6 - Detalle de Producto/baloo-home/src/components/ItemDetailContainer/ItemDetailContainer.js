import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import products from '../../products'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        prom();
        console.log('useEffect')
    }, []);

    const prom = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
                setLoading(false)
            },
                2000);

        });
    }
    return (
        <>
            {loading
                ? (<CircularProgress disableShrink />) //TODO: create a modal for this spinner
                : (<ItemDetail products={products} />)
            }
        </>

    )
}

export default ItemDetailContainer