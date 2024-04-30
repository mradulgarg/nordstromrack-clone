import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { Carousel } from "antd";
import { Button, Modal } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        right: 0,
        zIndex: 1,
        width: "41px",
        height: "60px",
      }}
      onClick={onClick}
    >
      <RightOutlined
        style={{
          fontSize: "41px",
          width: "41px",
          height: "60px",
          color: "#186adc",
        }}
      />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        left: 0,
        zIndex: 1,
        width: "41px",
        height: "60px",
      }}
      onClick={onClick}
    >
      <LeftOutlined
        style={{
          fontSize: "41px",
          width: "41px",
          height: "60px",
          color: "#186adc",
        }}
      />
    </div>
  );
};

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const ProductCard = ({ src, alt, text, subText }) => (
  <div style={{ width: "33.33%", float: "left" }}>
     <img className="img-fluid w-100" src={src} alt={alt} />
     <div className="mt-2">
       <div className="">
         <p className="mb-0">
           <strong>{text}</strong>
         </p>
       </div>
       <div className="">
         {subText}
       </div>
     </div>
  </div>
 );  

const Home = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [signedIn, setSignedIn] = useState(false); // State to track sign-in status

  useEffect(() => {
    // Check if user is already signed in from local storage
    const isSignedIn = localStorage.getItem("signedIn");
    if (isSignedIn === "true") {
      setSignedIn(true);
    }
  }, []);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      setSignedIn(true); // Update sign-in status
      localStorage.setItem("signedIn", "true"); // Store sign-in status in local storage
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const handleSignOut = () => {
    setSignedIn(false); // Update sign-in status
    localStorage.removeItem("signedIn"); // Remove sign-in status from local storage
  };

  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);

  const products = [
    { src: "/images/home-page/category-4.webp", alt: "category 1", text: "New Handbags & More Up to 55% Off Feat. AllSaints", subText: "Event ends in 5 days and 19 minutes" },
    { src: "/images/home-page/category-5.webp", alt: "category 2", text: "Maggy London & London Times Up to 65% Off", subText: "Event ends in 5 days and 19 minutes" },
    { src: "/images/home-page/category-6.webp", alt: "category 3", text: "Show Me Your Mumu Up to 50% Off", subText: "Event ends in 5 days and 19 minutes" },
    { src: "/images/home-page/category-7.webp", alt: "category 4", text: "TravisMathew Up to 50% Off", subText: "Event ends in 5 days and 4 minutes" },
    { src: "/images/home-page/category-8.webp", alt: "category 5", text: "New-In Savvy Cie Jewels Up to 70% Off", subText: "Event ends in 5 days and 4 minutes" },
    { src: "/images/home-page/category-9.webp", alt: "category 6", text: "Stuart Weitzman Shoes Up to 60% Off", subText: "Event ends in 5 days and 4 minutes" },
  ];

  const groupedProducts = [];
  for (let i = 0; i < products.length; i += 3) {
    groupedProducts.push(products.slice(i, i + 3));
  }

  return (
    <div className="main">
      <Container>
        {/* Sign In Button */}
        {!signedIn && (
          <div className="d-flex flex-column align-items-center log-in mb-5">
            <div className="heading">
              <h4>
                <strong>More to Rack, easier and faster.</strong>
              </h4>
            </div>
            <div className="">
              <Button
                type="primary"
                className="sign-in-btn rounded-0 mt-3"
                onClick={showModal}
              >
                Sign In or Create an Account
              </Button>
              <Modal
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={null}
              >
                <h3><b>Sign in</b></h3>
                <p>New to Nordstrom Rack?<a href="/signin"> Create an account.</a></p>
                <form>
                  <div className="form__controls mt-4">
                    <label htmlFor="username"><b>Email</b></label>
                    <input
                      type="text"
                      id="username"
                      className="rounded-0"
                    />
                  </div>
                  <div className="form__controls mt-2 position-relative">
                    <label htmlFor="password"><b>Password</b>
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="rounded-0"
                    />
                  </div>
                  <div className="form__controls mt-2 d-flex align-items-center">
                    <input
                      type="checkbox"
                      id="keepSignedIn"
                      className="rounded-0 me-2"
                    />
                    <label className="fw-normal mb-0" htmlFor="keepSignedIn">
                      Keep me signed in <a href="/"> Details</a>
                    </label>
                  </div>
                  <span className="tc-span mt-4" alt="account check message">
                    By creating an account, you agree to our <a href="/"> Privacy Policy</a>  and <a href="/"> Terms &
                    Conditions.</a>
                  </span>
                  <div className="form__controls">
                    <button className="button w-100 rounded-0 mt-4" type="submit">Sign In</button>
                  </div>
                </form> 
              </Modal>
            </div>
          </div>
        )}

        {/* Sign Out Button */}
        {signedIn && (
          <div className="d-flex justify-content-end mb-3">
            <Button type="primary" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        )}

        <div className="gif-div mb-5 pt-3">
          <a href="/">
            <img
              className="img-fluid w-100"
              src={"/images/home-page/gif-1.gif"}
              alt=""
            />
          </a>
        </div>
        <div className="mb-5 pt-3">
          <Carousel autoplay effect="fade" dots="false" arrows {...settings}>
            <div>
              <img
                className="img-fluid w-100"
                src="/images/home-page/carousel-img-1.gif"
                alt=""
              />
            </div>
            <div>
              <img
                className="img-fluid w-100"
                src="/images/home-page/carousel-img-2.webp"
                alt=""
              />
            </div>
            <div>
              <img
                className="img-fluid w-100"
                src="/images/home-page/carousel-img-3.webp"
                alt=""
              />
            </div>
          </Carousel>
        </div>
        <div className="gif-div mb-5 pt-3">
          <a href="/">
            <video ref={vidRef} muted autoPlay loop className="w-100">
              <source src="/images/home-page/video.mp4" type="video/mp4" />
            </video>
          </a>
        </div>
        <div className="mothers-day-div mb-5 pt-3 position-relative">
          <a href="/">
            <img
              className="img-fluid w-100"
              src={"/images/home-page/mother's-day.webp"}
              alt=""
            />
          </a>
          <a
            className="mothers-day-link position-absolute top-0 bottom-0"
            title="Mother's Day Looks"
            aria-label="Mother's Day Looks"
            href="/"
          >
            <span className="">Mother's Day Looks</span>
          </a>
        </div>
        <div className="three-categories mb-5 pt-3 position-relative">
          <div className="col-12">
            <div className="row">
              <div className="col-3 position-relative">
                <div
                  className="position-absolute"
                  style={{ left: "12.94%", top: "32.46%", width: "52.24%" }}
                >
                  <h4 className="">
                    <p>
                      <strong>These, Please</strong>
                    </p>
                  </h4>
                  <div className="">
                    <p>
                      The pieces you can't stop thinking about—all in one place.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <a href="/">
                  <img
                    className="img-fluid w-100 mb-2"
                    src={"/images/home-page/category-1.webp"}
                    alt=""
                  />
                </a>
                <a title="Straw Handbags" aria-label="Straw Handbags" href="/">
                  <span className="">Straw Handbags</span>
                </a>
              </div>
              <div className="col-3">
                <a href="/">
                  <img
                    className="img-fluid w-100 mb-2"
                    src={"/images/home-page/category-2.webp"}
                    alt=""
                  />
                </a>
                <a
                  title="Designer Sunglasses"
                  aria-label="Designer Sunglasses"
                  href="/"
                >
                  <span className="">Designer Sunglasses</span>
                </a>
              </div>
              <div className="col-3">
                <a href="/">
                  <img
                    className="img-fluid w-100 mb-2"
                    src={"/images/home-page/category-3.webp"}
                    alt=""
                  />
                </a>
                <a
                  title="Tailored & Work Dresses"
                  aria-label="Tailored & Work Dresses"
                  href="/"
                >
                  <span className="">Tailored & Work Dresses</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-div mb-5 pt-3">
          <a href="/">
            <img
              className="img-fluid w-100"
              src={"/images/home-page/banner.webp"}
              alt=""
            />
          </a>
        </div>
        <div className="mb-5 pt-3">
          <Carousel
            effect="scrollx"
            speed={700}
            dots={false}
            arrows
            {...settings}
          >
            {groupedProducts.map((group, index) => (
              <div
                key={index}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {group.map((product, idx) => (
                  <ProductCard key={idx} src={product.src} alt={product.alt} text={product.text} subText={product.subText} />
                ))}
              </div>
            ))}
          </Carousel>
        </div>
        <div className="banner-div-1 mb-5 pt-3 position-relative">
          <a href="/">
            <img
              className="img-fluid w-100"
              src={"/images/home-page/banner1.webp"}
              alt=""
            />
          </a>
          <a
            className="banner-div-1-link position-absolute"
            title="Find Your New Rack Store"
            aria-label="Find Your New Rack Store"
            href="/"
          >
            <span>Find Your New Rack Store</span>
          </a>
        </div>
        <div className="kurt-geiger-div mb-5 pt-3 position-relative">
          <a href="/">
            <img
              className="img-fluid w-100"
              src={"/images/home-page/kurt-geiger.webp"}
              alt=""
            />
          </a>
          <a
            className="kurt-geiger-div-link position-absolute"
            title="Mother's Day Looks"
            aria-label="Mother's Day Looks"
            href="/"
          >
            <span className="">All Kurt Geiger London</span>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Home;