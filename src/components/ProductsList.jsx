import React, { useState } from "react";
import AddProducts from "./AddProducts";
import { useSelector } from "react-redux";

const ProductsList = () => {
  const [showAddProducts, setShowAddProducts] = useState(false);
  const allProducts = useSelector((state) => state.products.products);

  return (
    <>
      <div className="w-full h-full min-h-screen p-4 bg-gray-100 relative">
        <div className="flex flex-col gap-4 w-full">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-4">
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm hover:bg-blue-700 transition duration-300"
              onClick={() => setShowAddProducts(true)}
            >
              + Add Products
            </button>
            <div className="text-sm py-2 px-4 bg-white rounded-full shadow-md">
              <strong>280/400</strong> <span>Products</span>
            </div>
          </div>

          {/* Search Bar Section */}
          <div className="max-w-md w-full flex rounded-lg shadow-md bg-white">
            <input
              type="text"
              className="w-full h-full rounded-l-lg px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search Products Here..."
            />
            <button className="bg-blue-600 text-white py-2 px-4 rounded-r-lg text-sm hover:bg-blue-700 transition duration-300">
              Search
            </button>
          </div>
        </div>

        {/* Add Product Modal */}
        {showAddProducts && (
          <AddProducts setShowAddProducts={setShowAddProducts} />
        )}

        {/* Product List Section */}
        <div className="mt-4 w-full h-full grid bg-red-500">
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                  <span>Products</span>
                </th>
                <th>Action</th>
                <th>Product Details</th>
                <th>Price in Unit</th>
              </tr>
            </thead>
            <tbody>
              {allProducts &&
                allProducts.map(
                  (product, index) =>
                    product.grades.length > 1
                      ? product.grades.map((grade, i) => (
                          <tr>
                            <td>
                              {product.material} {grade} {product.productName}
                            </td>
                            <td>
                              <p>Quick Edit</p>
                              <p>Add Product Details</p>
                            </td>
                            <td>
                              <p>Material: {product?.material}</p>
                              <p>Unit Length: {product.details?.length}</p>
                              <p>Shape: {product.details?.shape}</p>
                          </td>
                          <td></td>
                          </tr>
                        ))
                      : ""
                  // <tr key={product._id + index} className="w-full bg-white">
                  //   {product.grades.length > 1 ? (
                  //     product.grades.map((grade) => (
                  //       <td>
                  //         {product.material} {grade} {product.productName}
                  //       </td>
                  //     ))
                  //   ) : (
                  //     <td>
                  //       {product.material} {product.grades[0]}{" "}
                  //       {product.productName}
                  //     </td>
                  //   )}
                  // </tr>
                )}
            </tbody>
          </table>

          {/* {allProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
              <p className="text-gray-600">Material: {product.material}</p>
              <p className="text-gray-600">Grades: {product.grades.join(", ")}</p>
              <p className="text-gray-600">Price: ${product.price}</p>
              <div className="text-sm text-gray-500 mt-2">
                {product.details.shape} - {product.details.thickness}
              </div>
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default ProductsList;
