import products from "../../data/products";

// Components
import ProductItem from "../product-item/index";

// Styles
import * as Styles from "./styles";

const Products = () => {
  return (
    <Styles.Container>
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </Styles.Container>
  );
};

export default Products;

//Este componente pega os produtos que estao no arquivo data/products.js e renderiza eles na tela.
//Este componente é o primeiro componente a pegar os produtos e compartilha com outro componente, neste caso o ProductItem.
//Dentro do ProductItem, é renderizado o nome do produto, o preço e a imagem. E feito o dispatch do produto para o reducer assim que o botao eh apertado, mandando os dados do produto como action para o reducer.