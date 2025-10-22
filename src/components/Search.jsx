const Search = ({
  searchTerm,
  setSearchTerm,
  priceRange,
  setPriceRange,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="md:w-full container mx-auto md:flex p-4 md:justify-around mt-24 md:bg-gray-900 rounded-lg w-2/3 bg-gray-900 space-y-4 text-blue-600 font-bold">
      <input
        className="border rounded-lg md:w-1/2 p-2"
        value={searchTerm}
        type="text"
        placeholder="search products"
        name="search"
        id="search"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <select
        name=""
        value={selectedCategory}
        className="border ml-6 rounded-lg"
        id=""
        onChange={(e) => {
          selectedCategory(e.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="electronics" className="text-gray-600">
          Electronics
        </option>
        <option value="jewelery" className="text-gray-600">
          Jewelery
        </option>
        <option value="men's clothing" className="text-gray-600">
          Men's Clothing
        </option>
        <option value="women's clothing" className="text-gray-600">
          Women's Clothing
        </option>
      </select>
      <button
        className="text-red-600 bg-white p-2 rounded-lg"
        onClick={() => {
          setPriceRange({ min: 0, max: 1000 });
          setSelectedCategory("all");
          setSearchTerm(" ");
        }}
      >
        {" "}
        RESET
      </button>

      <div className="flex gap-4">
        <div>
          <label className="block text-sm font-medium">Min Price</label>
          <input
            type="number"
            value={priceRange.min}
            onChange={(e) =>
              setPriceRange((prev) => ({
                ...prev,
                min: Number(e.target.value),
              }))
            }
            placeholder="0"
            className="border p-2 rounded w-24"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Max Price</label>
          <input
            type="number"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange((prev) => ({
                ...prev,
                max: Number(e.target.value),
              }))
            }
            placeholder="1000"
            className="border p-2 rounded w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
