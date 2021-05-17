import fetch from 'node-fetch';

export const handler = async (event) => {
  const productsUrl = 'https://assignment.dwbt.tech/products';
  const productsResponse = await fetch(productsUrl);
  const productsData = await productsResponse.json();

  const imagesUrl = 'https://assignment.dwbt.tech/images';
  const imagesResponse = await fetch(imagesUrl);
  const imagesData = await imagesResponse.json();

  const productsWithImages = productsData.products.map((product) => ({
    name: product.name,
    price: product.price,
    image: imagesData.images[product.sku][0].src,
    color: product.color.id,
  }));

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(
      productsWithImages,
      null,
      2,
    ),
  };
};
