import React from "react";
import { useRouter } from "next/router";
import data from "../../utils/data";

function ProductDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);

  if (!product) {
    return <div>Product Not FOund</div>;
  }
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}

export default ProductDetail;
