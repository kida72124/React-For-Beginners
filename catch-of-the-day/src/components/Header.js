import React from "react";

const Header = ({ tagline, cost, sexual }) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{tagline}</span>
      <div>{cost}</div>
    </h3>
    <div>{sexual}</div>
  </header>
);
export default Header;

// class Header extends React.Component {
//     render() {
//         return (
//             <header className="top">
//                 <h1>
//                 Catch
//                 <span className="ofThe">
//                     <span className="of">of</span>
//                     <span className="the">The</span>
//                 </span>
//                 Day
//                 </h1>
//                 <h3 className="tagline">
//                     <span>{this.props.tagline}</span>
//                 </h3>
//             </header>
//         )
//     }
// }
// export default Header;
