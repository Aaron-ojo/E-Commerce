const Footer = () => {
  return (
    <div className="bg-gray-900 text-white mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between gap-8 flex-wrap">
          <div className="w-auto">
            <h1 className="font-bold text-xl mb-4">BN-Store</h1>
            <p className="text-gray-300 mb-4">
              Your one-stop shop for quality products at great prices
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition"
                aria-label="Facebook"
              >
                X
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition"
                aria-label="Facebook"
              >
                IG
              </a>
            </div>
          </div>
          <div className="w-auto">
            <h1 className="font-bold text-xl ">QUICK LINKS</h1>
            <ul>
              <li>
                <a
                  href=""
                  className="text-gray-300 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-gray-300 hover:text-white transition"
                >
                  All Products
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-gray-300 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-gray-300 hover:text-white transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-auto">
            <h1 className="font-bold text-xl mb-4">CUSTOMER SERVICE</h1>
            <ul className="space-y-2">
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms Of Service</a>
              </li>
            </ul>
          </div>
          <div className="w-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
