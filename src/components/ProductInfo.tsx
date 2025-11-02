type ProductInfoProps = {
  id: string;
  title: string;
  company: string;
  description: string;
  price: number;
  discountPercentage: number;
};

export default function ProductInfo({
  id,
  title,
  company,
  description,
  price,
  discountPercentage,
}: ProductInfoProps) {
  return (
    <article id={id} className="flex flex-col gap-8 text-dark-grayish-blue">
      <div className="space-y-4">
        <h2 className="text-sm font-bold tracking-widest">{company}</h2>
        <h1 className="text-3xl font-bold text-black md:text-4xl">{title}</h1>
      </div>
      <p className="tracking-tight xs:tracking-normal">{description}</p>
      <div className="flex justify-between font-bold md:flex-col">
        <div className="flex items-center gap-x-4">
          <p className="text-2xl text-black">
            ${(price * (discountPercentage / 100)).toFixed(2)}
          </p>
          <span className="rounded-md bg-black px-3 py-1 text-white">
            {discountPercentage}%
          </span>
        </div>
        <p className="line-through">${price.toFixed(2)}</p>
      </div>
    </article>
  );
}
