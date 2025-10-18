const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">BN-Store</h1>
      <div className="flex items-center gap-4">
        <span className="text-lg font-medium">Cart: {cartCount}</span>
      </div>
    </nav>
  );
};

export default Navbar;
