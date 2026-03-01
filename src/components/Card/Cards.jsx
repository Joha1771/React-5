import React from "react";

const Card = ({ product }) => {
  return (
    <div className="relative flex flex-col h-full p-6 transition-all duration-300 bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-xl">
      {/* Иконка сердца (избранное) */}
      <button className="absolute z-10 p-2 transition-colors bg-white rounded-full top-4 right-4 hover:bg-gray-100">
        {/* Вставь SVG иконку сердца */}
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>

      {/* Картинка товара */}
      <div className="flex items-center justify-center mb-6 h-44">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Название и рейтинг */}
      <div className="mb-4">
        <h3 className="mb-2 text-base font-semibold text-gray-800">
          {product.title}
        </h3>

        {/* Рейтинг */}
        <div className="flex items-center gap-1">
          <span className="text-yellow-400">★</span>
          <span className="text-sm font-medium text-gray-600">
            {product.rating}
          </span>
        </div>
      </div>

      {/* Цена */}
      <div className="flex items-center justify-between mt-auto">
        <div className="flex flex-col">
          <span className="text-xl font-bold text-orange-500">
            $
            {(product.price * (1 - product.discountPercentage / 100)).toFixed(
              0,
            )}{" "}
            ₸
          </span>
          {product.discountPercentage > 0 && (
            <span className="text-sm text-gray-400 line-through">
              ${product.price} ₸
            </span>
          )}
        </div>

        {/* Скидка */}
        {product.discountPercentage > 0 && (
          <span className="text-sm font-medium text-red-500">
            -{product.discountPercentage.toFixed(0)}%
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
