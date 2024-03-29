import '../../assets/css/Table.css'
const Table = ({columns, products}) => {

    return(
        <div className='table'>
            <div className='columns'>
                {columns.map((column, i) => <span key={column + "" + i}>{column}</span>)}
            </div>
                {products.map((product, i)=>{
                    return(
                        <div key={i} className='rows'>
                            <span>{product.product_id}</span>
                            <span>{product.product_name}</span>
                            <span>{product.category_product}</span>
                            <span>{product.desc_product}</span>
                        </div>
                    )
                })}
        </div>
    )
}


export default Table