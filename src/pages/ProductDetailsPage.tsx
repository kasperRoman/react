import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/dummyApi.servece";
import { IProduct } from "../models/IProductModel";

const ProductDetailsPage = () => {
  let { id } = useParams();

  const [product, setProduct] = useState<IProduct | null>(null);
  useEffect(() => {
    if (id) {
      getProduct(id).then((response) => setProduct(response));
    }
  }, [id]);

  return (
    <div>
      <ul>
        <li>title:{product?.title}</li>
        <li>price:{product?.price}</li>
        <li>rating:{product?.rating}</li>
      </ul>
      <img src={product?.thumbnail} alt={product?.title} />
    </div>
  );
};

export default ProductDetailsPage;
