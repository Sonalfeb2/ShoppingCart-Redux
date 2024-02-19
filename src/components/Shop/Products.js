import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const product = [{
    id : 1,
    title : 'test1',
    price : 6,
    description: 'This is a first product - amazing'

  },{
    id : 2,
    title : 'test2',
    price : 6,
    description: 'This is a first product - amazing'

  },{
    id : 3,
    title : 'test3',
    price : 6,
    description: 'This is a first product - amazing'

  },{
    id : 4,
    title : 'test4',
    price : 6,
    description: 'This is a first product - amazing'

  },{
    id : 5,
    title : 'test5',
    price : 6,
    description: 'This is a first product - amazing'

  }]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {product.map((item)=> <ProductItem
        key= {item.id}
          id= {item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
