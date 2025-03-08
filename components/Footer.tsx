// import Image from 'next/image';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-black text-white">
//       {/* Top Section */}
//       <div className="py-10 px-6 md:px-12 flex flex-col items-center justify-center space-y-4">
//         <h2 className="text-3xl font-bold">Get Started</h2>
//         <p className="text-center max-w-md">
//           Holds no opinions on what's and how's. Build whatever makes sense to you.
//         </p>
//         <div className="flex space-x-4">
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Try it now
//           </button>
//           <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
//             Book your demo
//           </button>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="border-t border-gray-700 py-6 px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6">
//         {/* Logo and Contact Info */}
//         <div>
//           <div className="flex items-center mb-4">
//             <Image src="/logo.png" alt="Animify Logo" width={40} height={40} />
//             <span className="ml-2 text-xl font-bold">Animify</span>
//           </div>
//           <p>1234 Innovation Blvd., Suite 567, Tech City, TX 98765, United States.</p>
//           <p>(666) 123-4567</p>
//           <p>contact@animify.com</p>
//         </div>

//         {/* Home Links */}
//         <div>
//           <h3 className="text-lg font-bold mb-2">Home</h3>
//           <ul>
//             <li><a href="#" className="hover:text-blue-500">About</a></li>
//             <li><a href="#" className="hover:text-blue-500">Blog</a></li>
//             <li><a href="#" className="hover:text-blue-500">Contact</a></li>
//             <li><a href="#" className="hover:text-blue-500">404</a></li>
//           </ul>
//         </div>

//         {/* Other Pages Links */}
//         <div>
//           <h3 className="text-lg font-bold mb-2">Other Pages</h3>
//           <ul>
//             <li><a href="#" className="hover:text-blue-500">Log In</a></li>
//             <li><a href="#" className="hover:text-blue-500">Forgot Password</a></li>
//             <li><a href="#" className="hover:text-blue-500">Terms & Services</a></li>
//             <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
//           </ul>
//         </div>

//         {/* My Work Links */}
//         <div>
//           <h3 className="text-lg font-bold mb-2">My Work</h3>
//           <ul>
//             <li><a href="#" className="hover:text-blue-500">Dribbble</a></li>
//             <li><a href="#" className="hover:text-blue-500">Upwork</a></li>
//             <li><a href="#" className="hover:text-blue-500">Awwwards</a></li>
//             <li><a href="#" className="hover:text-blue-500">X</a></li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="py-10 px-6 md:px-12 flex flex-col items-center justify-center space-y-4">
        <h2 className="text-3xl font-bold">Get Started</h2>
        <p className="text-center max-w-md">
          Holds no opinions on what's and how's. Build whatever makes sense to you.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Try it now
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Book your demo
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-6 px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo and Contact Info */}
        <div>
          <div className="flex items-center mb-4">
            <Image src="/logo.png" alt="Animify Logo" width={40} height={40} />
            <span className="ml-2 text-xl font-bold">Animify</span>
          </div>
          <p>1234 Innovation Blvd., Suite 567, Tech City, TX 98765, United States.</p>
          <p>(666) 123-4567</p>
          <p>contact@animify.com</p>
        </div>

        {/* Home Links */}
        <div>
          <h3 className="text-lg font-bold mb-2">Home</h3>
          <ul>
            <li><a href="#" className="hover:text-blue-500">About</a></li>
            <li><a href="#" className="hover:text-blue-500">Blog</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact</a></li>
            <li><a href="#" className="hover:text-blue-500">404</a></li>
          </ul>
        </div>

        {/* Other Pages Links */}
        <div>
          <h3 className="text-lg font-bold mb-2">Other Pages</h3>
          <ul>
            <li><a href="#" className="hover:text-blue-500">Log In</a></li>
            <li><a href="#" className="hover:text-blue-500">Forgot Password</a></li>
            <li><a href="#" className="hover:text-blue-500">Terms & Services</a></li>
            <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
          </ul>
        </div>

        {/* My Work Links */}
        <div>
          <h3 className="text-lg font-bold mb-2">My Work</h3>
          <ul>
            <li><a href="#" className="hover:text-blue-500">Dribbble</a></li>
            <li><a href="#" className="hover:text-blue-500">Upwork</a></li>
            <li><a href="#" className="hover:text-blue-500">Awwwards</a></li>
            <li><a href="#" className="hover:text-blue-500">X</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
