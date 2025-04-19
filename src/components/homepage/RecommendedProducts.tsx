import ProductCard from "./ProductCard";

type TRecommendedProductsProps = {
  products: {
    type: string;
    imgSrc: string;
    name: string;
    price: string;
    priceType: string;
  }[];
};

const RecommendedProducts = ({ products }: TRecommendedProductsProps) => {
  return (
    <div className="mt-20 flex flex-col items-start mx-auto w-fit">
      <h2 className="headline-40-regular mb-10">Polecane produkty</h2>
      <div className="flex justify-center gap-x-6">
        {products.map((product, i) => {
          return <ProductCard key={i} {...product} />;
        })}
      </div>
    </div>
  );
};

export default RecommendedProducts;
