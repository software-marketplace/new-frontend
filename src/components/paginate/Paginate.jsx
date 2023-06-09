import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import HorizontalPost from "../post/HorizontalPost";
import "./paginate.css";

function Items({
  currentItems,
  handleProductRemove,
  handleProductSelect,
  isProductSelected,
    contactDeveloper,
}) {
  return (
    <div className="itemsContainer">
      {currentItems &&
        currentItems.map((product, i) => { 
            console.log(product)

          return <HorizontalPost
            key={i}
            image={product.display_image}
            name={product.product_name}
            description={product.product_description}
            builtBy={product.built_by}
            price={product.price}
            rating={product.rating}
            contactDeveloper={contactDeveloper}
            email={product.email}
            techStack={[
              ...product.compare.frontend,
              ...product.compare.backend,
            ]}
            _id={product._id}
            handleProductSelect={handleProductSelect}
            handleProductRemove={handleProductRemove}
            isProductSelected={isProductSelected}
            product={product}
          />
        })}
    </div>
  );
}

function PaginatedItems({
  itemsPerPage,
  items,
  handleProductRemove,
  handleProductSelect,
  isProductSelected,
    contactDeveloper,
}) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div style={{ width: "100%" }}>
      <Items
        currentItems={currentItems}
      contactDeveloper={contactDeveloper}
        handleProductSelect={handleProductSelect}
        handleProductRemove={handleProductRemove}
        isProductSelected={isProductSelected}
      />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="paginate"
      />
    </div>
  );
}

export default PaginatedItems;
