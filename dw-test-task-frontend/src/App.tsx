import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
background-color: #05054a;
`;

const Section = styled.button`
background-color: transparent;
border: none;
text-transform: capitalize;
padding: 15px;
color: white;
font-size: 15px;
`;

const Products = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`;

const Product = styled.div`
display: flex;
flex-direction: column;
margin: 20px;
`;

const Image = styled.img`
width: 300px;
background-color: #d7d7d4;
`;

const ProductText = styled.div`
padding-top: 5px;
`;

const App = () => {
  const [productsWithImages, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://qvhadykodf.execute-api.eu-west-1.amazonaws.com/dev';
      const response = await fetch(url);
      const info = await response.json();
      setProducts(info);
    };
    fetchData();
  }, []);

  const products = productsWithImages.map((product) => (
            <Product>
                <Image src={product.image}/>
                <ProductText>{product.name}</ProductText>
                <ProductText>{product.color}</ProductText>
                <ProductText>{product.price.symbol} {product.price.amount}</ProductText>
            </Product>));

  return (
    <Container>
        <Header>
            <Section>Valentine's gift</Section>
            <Section>Watches</Section>
            <Section>Jewelry</Section>
            <Section>Watch bands</Section>
            <Section>Collections</Section>
            <Section>Shop Instagram</Section>
        </Header>
        <Products>
            {products}
        </Products>
    </Container>
  );
};

export default App;
