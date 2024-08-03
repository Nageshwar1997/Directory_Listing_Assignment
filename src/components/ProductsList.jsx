import React, { useState } from "react";
import AddProducts from "./AddProducts";

const ProductsList = () => {
  const [showAddProducts, setShowAddProducts] = useState(true);

  return (
    <div className="w-full h-full p-4 relative">
      <div className="flex flex-col gap-4 w-full h-full">
        <div className="flex justify-start gap-4 items-center">
          <button
            className="bg-blue-700 text-white py-2 px-4 rounded-full text-sm"
            onClick={() => setShowAddProducts(true)}
          >
            + Add Products
          </button>
          <div className="text-sm py-2 px-4 bg-white rounded-full">
            <strong>280/400</strong> <span>Products</span>
          </div>
        </div>
        <div className="max-w-md w-full flex rounded-lg focus-within:shadow-md">
          <div className="w-full h-full">
            <input
              type="text"
              className="w-full h-full rounded-l-lg focus:outline-none px-3"
              placeholder="Search Products Here..."
            />
          </div>
          <button className="bg-blue-700 text-white py-2 px-4 rounded-r-lg text-sm">
            Search
          </button>
        </div>
      </div>
      {showAddProducts && (
        <AddProducts setShowAddProducts={setShowAddProducts} />
      )}
    </div>
  );
};

export default ProductsList;
