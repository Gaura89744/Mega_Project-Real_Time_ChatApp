// const AuthImagePattern = ({ title, Subtitle }) => {
//   return (
//     <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
//       <div className="max-w-md text-center">
//         <div className="grid grid-cols-3 gap-3 mb-8">
//           {[...Array(9)].map((_, i) => (
//             <div
//               key={i}
//               className={`aspect-square rounded-2xl bg-primary/10 ${
//                 i % 2 === 0 ? "animate-pulse" : ""
//               }`}
//             />
//           ))}
//         </div>
//         <div>
//           <h2 className="text-2xl font-bold mb-4">{title}</h2>
//           <p className="text-base-content/60">{Subtitle}</p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AuthImagePattern;
const AuthImagePattern = ({ title, Subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        {/* Ripple Circles */}
        <div className="relative w-64 h-64 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping"></div>
          <div className="absolute inset-4 rounded-full bg-primary/20 animate-pulse"></div>
          <div className="absolute inset-8 rounded-full bg-primary/30"></div>
        </div>

        {/* Title and Subtitle */}
        <div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-base-content/60">{Subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthImagePattern;
