import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
          <h2 className="font-bold text-xl mb-6">About MarketSavvy</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet velit eu nunc blandit, ac
            blandit nunc malesuada.
          </p>
          <p className="mb-4">
            Nullam in magna quis felis pharetra tempus. Vivamus quis risus a lectus vestibulum iaculis sed
            eu nulla.
          </p>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
          <h2 className="font-bold text-xl mb-6">Contact Us</h2>
          <p className="mb-4">
            123 Main St.
            <br />
            Suite 100
            <br />
            Anytown, USA 12345
          </p>
          <p className="mb-4">
            Phone: (123) 456-7890
            <br />
            Email: info@marketsavvy.com
          </p>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
          <h2 className="font-bold text-xl mb-6">Follow Us</h2>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#facebook" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-square fa-lg mr-2"></i>
                Facebook
              </a>
            </li>
            <li className="mb-2">
              <a href="#twitter" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter-square fa-lg mr-2"></i>
                Twitter
              </a>
            </li>
            <li className="mb-2">
              <a href="#instagram" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram-square fa-lg mr-2"></i>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center">
        <p className="text-gray-400">&copy; 2023 MarketSavvy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
