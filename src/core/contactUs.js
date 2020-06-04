import React from 'react'
import Menu from './Menu';

const contactUs = ({
    title = "Contact Us Session",
    description = "Feel Free to Reach Us!!!",
    className = "bg-dark text-white p-4",
    children
  }) => (
    <div>
      <Menu />
      <div className="container-fluid">
        <div className="jumbotron bg-dark text-white text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>

        <div className={className}>{children}</div>
      </div>

     <div className="text-center text-light">
   <p>Mohammed Shebin KK</p>
   <p>Email:shebinkkabeer@gmail.com</p>
   <p>Instagram:shebin_dilz</p>
   <p>Mobile:+918606938687</p>

   </div>



   </div>
     
  );

  export default contactUs




