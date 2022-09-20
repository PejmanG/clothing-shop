import { Item } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface IProductCard {
  product: Item;
}

const ProductCard = ({ product }: IProductCard) => {
  return (
    <div>
      <Link href={"/product/" + product.id}>
        <a>
          <div className="relative h-72 w-full overflow-hidden rounded-md bg-gray-200 hover:opacity-75">
            <Image
              src={product.images[0]}
              alt={product.name}
              layout="fill"
              quality={100}
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm">
                <span aria-hidden="true" />
                {product.name}
              </h3>
            </div>
            <p className="text-sm font-medium">
              <span
                className={
                  product.offer ? "line-through" : ""
                }
              >
                ${product.price}
              </span>
              {product.offer && (
                <span className="text-red-700 dark:text-red-400">
                  {" "}
                  ${product.dsicountedPrice}
                </span>
              )}
            </p>
          </div>
        </a>
      </Link>
      <button className="mt-6 bg-slate-100 hover:bg-slate-200 text-sm font-medium tracking-tight h-9 w-full rounded-md">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
