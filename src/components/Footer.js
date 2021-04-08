import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container" style={{backgroundColor: '#1B1A1D'}}>
                <div className="row">
                <div className="navbar_left col-lg-6 col-xs-12">
                    <h2>Heading</h2>
                    <p className="pr-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
                </div>
                <div className="foot-mid navbar_right col-lg-6 col-xs-12">
                    <h2>Location</h2>
                    <p> 4521 EA, Bethesda, MD, 20814</p>
                    <p>(202) 802-4818</p>
                    <p>jackmol3@gmail.com</p>
                </div>
                </div>
                <div className="navbar_right row mt-5">
                <div className="col copyright">
                    <p className><small className="text-white-50">© 2021. All Rights Reserved.</small></p>
                </div>
                </div>
      </div>
      </footer>
    );
  }


export default Footer;
