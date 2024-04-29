import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";
import { Container } from "react-bootstrap";

const Footer = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  return (
    <footer>
      <section>
        <Container>
          <a href="">
            <img
              className="img-fluid w-100"
              src={"/images/footer/footer-img.webp"}
              alt=""
            />
          </a>
        </Container>
      </section>
      <div className="updates mt-5 mb-4">
        <Container className="d-flex justify-content-end">
          <Form
            layout="inline"
            form={form}
            initialValues={{
              layout: formLayout,
            }}
            onValuesChange={onFormLayoutChange}
            style={{
              maxWidth: formLayout === "inline" ? "none" : 800,
              justifyContent: "end",
              alignItems: "center",
              width: "60%",
            }}
          >
            <Form.Item
              label="Get Email Updates:"
              className="fw-bolder form-label"
              style={{ width: "60%" }}
            >
              <Input
                className="updates-input mb-0"
                placeholder="Email Address"
              />
            </Form.Item>
            <Form.Item className="me-0" style={{ width: "37%" }}>
              <Button type="primary" className="rounded-0">
                Sign up
              </Button>
            </Form.Item>
          </Form>
        </Container>
      </div>
      <div className="footer-links pt-4">
        <Container>
          <div className="d-flex w-100">
            <div className="d-flex justify-content-between links pe-5">
              <div className="footer-page-links">
                <h3>Customer Service</h3>
                <ul>
                  <li>
                    <a
                      aria-label="Order Status"
                      href="https://www.nordstromrack.com/signin/order-lookup"
                      className=""
                    >
                      Order Status
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Guest Returns"
                      href="https://www.nordstromrack.com/my-account/blank-return"
                      className=""
                    >
                      Guest Returns
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Shipping &amp; Return Policy"
                      href="https://www.nordstromrack.com/ship-return-policy"
                      className=""
                    >
                      Shipping &amp; Return Policy
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Gift Cards"
                      href="https://rack.giftcard.nordstrom.com/store/recipient?locale=en-us"
                      className=""
                    >
                      Gift Cards
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Product Recalls"
                      href="https://www.nordstrom.com/browse/customer-service/product-recalls"
                      className=""
                    >
                      Product Recalls
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="FAQ"
                      href="https://www.nordstromrack.com/faq"
                      className=""
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Contact Us"
                      href="https://www.nordstromrack.com/faq#anchor-link-customer-care"
                      className=""
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-page-links">
                <h3>About Us</h3>
                <ul>
                  <li>
                    <a
                      aria-label="About Our Brand"
                      href="https://www.nordstromrack.com/about"
                      className=""
                    >
                      About Our Brand
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="The Nordy Club"
                      href="https://www.nordstromrack.com/nordyclub"
                      className=""
                    >
                      The Nordy Club
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Store Locator"
                      href="https://stores.nordstromrack.com/search"
                      className=""
                    >
                      Store Locator
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="All Brands"
                      href="https://www.nordstromrack.com/brands"
                      className=""
                    >
                      All Brands
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Careers"
                      href="https://careers.nordstrom.com/#/home/rack"
                      className=""
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Get Email Updates"
                      href="https://www.nordstromrack.com/my-account/marketing-email-opt-in/"
                      className=""
                    >
                      Get Email Updates
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Nordstrom Blog"
                      href="https://www.nordstrom.com/browse/content/style-guides?origin=footer"
                      target="_popup"
                      className=""
                    >
                      Nordstrom Blog
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Nordy Podcast"
                      href="https://www.nordstromrack.com/promo/nordy-podcast?origin=footer"
                      className=""
                    >
                      Nordy Podcast
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Store Openings"
                      href="https://www.nordstromrack.com/promo/new-store-openings"
                      className=""
                    >
                      Store Openings
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-page-links">
                <h3>Nordstrom Rack &amp; the Community</h3>
                <ul>
                  <li>
                    <a
                      aria-label="Corporate Social Responsibility"
                      href="https://www.nordstromrack.com/promo/nordstrom-cares"
                      className=""
                    >
                      Corporate Social Responsibility
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Diversity, Equity, Inclusion &amp; Belonging"
                      href="https://www.nordstromrack.com/promo/diversity-at-nordstrom"
                      className=""
                    >
                      Diversity, Equity, Inclusion &amp; Belonging
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Big Brothers Big Sisters"
                      href="https://www.nordstromrack.com/bbbs"
                      className=""
                    >
                      Big Brothers Big Sisters
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Donate Clothes"
                      href="https://www.nordstromrack.com/promo/donateclothes"
                      className=""
                    >
                      Donate Clothes
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-page-links">
                <h3>Nordstrom Card</h3>
                <ul>
                  <li>
                    <a
                      aria-label="Apply for a Nordstrom Card"
                      href="https://www.nordstromrack.com/creditcard/entry?cc=RA1001"
                      className=""
                    >
                      Apply for a Nordstrom Card
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Pay My Bill"
                      href="https://www.nordstromcard.com/auth/payments/pay-bill-now/edit"
                      className=""
                    >
                      Pay My Bill
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Manage my Nordstrom Card"
                      href="https://www.nordstromcard.com/?origin=footer"
                      className=""
                    >
                      Manage my Nordstrom Card
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-page-links">
                <h3>Nordstrom, Inc.</h3>
                <ul>
                  <li>
                    <a
                      aria-label="Nordstrom"
                      href="https://www.nordstrom.com/"
                      target="_blank"
                      className="lcFyR tuUGG RTmqg"
                    >
                      Nordstrom
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="HauteLook"
                      href="https://www.nordstromrack.com/promo/hautelook"
                      className=""
                    >
                      HauteLook
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Investor Relations"
                      href="https://press.nordstrom.com/investor-relations"
                      className=""
                    >
                      Investor Relations
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Press Releases"
                      href="http://press.nordstrom.com/phoenix.zhtml?c=211996&amp;p=irol-overview&amp;origin=footer"
                      className=""
                    >
                      Press Releases
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Nordstrom Media Network"
                      href="https://www.nordstromrack.com/promo/nordstrom-media-network?origin=footer"
                      className=""
                    >
                      Nordstrom Media Network
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex justify-content-between download">
              <div className="d-flex flex-column">
                <section>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-testid="svg_IconPhoneArrow"
                  >
                    <path
                      d="M12 9C12.5523 9 13 9.44771 13 10V16.5858L15.2929 14.2929C15.6834 13.9024 16.3166 13.9024 16.7071 14.2929C17.0976 14.6834 17.0976 15.3166 16.7071 15.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L7.29289 15.7071C6.90237 15.3166 6.90237 14.6834 7.29289 14.2929C7.68342 13.9024 8.31658 13.9024 8.70711 14.2929L11 16.5858V10C11 9.44771 11.4477 9 12 9Z"
                      fill="#191A1B"
                    ></path>
                    <path
                      d="M10 3C9.44772 3 9 3.44772 9 4C9 4.55228 9.44772 5 10 5H14C14.5523 5 15 4.55228 15 4C15 3.44772 14.5523 3 14 3H10Z"
                      fill="#191A1B"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 3C3 1.34314 4.34315 0 6 0H18C19.6569 0 21 1.34315 21 3V21C21 22.6569 19.6569 24 18 24H6C4.34315 24 3 22.6569 3 21V3ZM6 2C5.44771 2 5 2.44772 5 3V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V3C19 2.44772 18.5523 2 18 2H6Z"
                      fill="#191A1B"
                    ></path>
                  </svg>
                  <a
                    aria-label="Download Our Apps"
                    href="https://www.nordstromrack.com/promo/NordstromRackApp"
                    className="download-link ps-2"
                  >
                    Download Our Apps
                  </a>
                </section>
                <section className="social-links" id="social-links">
                  <ul className="d-flex mt-4">
                    <li>
                      <a
                        aria-label="Facebook"
                        href="https://facebook.com/NordstromRack"
                        target="_blank"
                        className="facebook"
                      >
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          data-testid="svg_IconFacebook"
                        >
                          <g clipPath="url(#clip0_916_4290)">
                            <path
                              d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.38823 22.954 10.125 23.8542V15.4688H7.07813V12H10.125V9.35625C10.125 6.34875 11.9165 4.6875 14.6576 4.6875C15.9705 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.3399 7.875 13.875 8.80001 13.875 9.74899V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                              fill="#191A1B"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_916_4290">
                              <rect width="24" height="24" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        aria-label="Twitter"
                        href="https://twitter.com/nordstromrack"
                        target="_blank"
                        className="twitter"
                      >
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          data-testid="svg_IconX"
                        >
                          <path
                            d="M13.8468 10.4686L21.1321 2H19.4057L13.0799 9.3532L8.02742 2H2.20001L9.84032 13.1193L2.20001 22H3.92651L10.6068 14.2348L15.9426 22H21.77L13.8464 10.4686H13.8468ZM11.4821 13.2173L10.708 12.1101L4.54859 3.29968H7.20038L12.1711 10.4099L12.9452 11.5172L19.4066 20.7594H16.7548L11.4821 13.2177V13.2173Z"
                            fill="#191A1B"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        aria-label="Pinterest"
                        href="https://pinterest.com/nordstromrack"
                        target="_blank"
                        className="pinterest"
                      >
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          data-testid="svg_IconPinterest"
                        >
                          <g clipPath="url(#clip0_916_4227)">
                            <path
                              d="M11.9951 0C5.36076 0 0 5.37062 0 11.9951C0 17.0794 3.15919 21.4233 7.62156 23.1707C7.51296 22.2229 7.42411 20.7618 7.66104 19.7252C7.87824 18.7873 9.06293 13.7622 9.06293 13.7622C9.06293 13.7622 8.70754 13.0416 8.70754 11.9852C8.70754 10.3167 9.67502 9.07281 10.8795 9.07281C11.9062 9.07281 12.3998 9.84286 12.3998 10.761C12.3998 11.7877 11.7482 13.3278 11.4027 14.7594C11.1164 15.9539 12.0049 16.9313 13.1798 16.9313C15.3122 16.9313 16.9511 14.6804 16.9511 11.4422C16.9511 8.56932 14.8877 6.5652 11.9358 6.5652C8.51995 6.5652 6.51583 9.12216 6.51583 11.768C6.51583 12.7947 6.91073 13.9004 7.40436 14.5027C7.5031 14.6211 7.51296 14.7297 7.48334 14.8482C7.3945 15.2234 7.18716 16.0428 7.14768 16.2106C7.09831 16.4278 6.96996 16.4772 6.7429 16.3686C5.26202 15.6577 4.33402 13.4661 4.33402 11.7088C4.33402 7.92761 7.07856 4.45248 12.2616 4.45248C16.4179 4.45248 19.6561 7.41422 19.6561 11.383C19.6561 15.5195 17.0498 18.8466 13.4364 18.8466C12.2221 18.8466 11.0769 18.2147 10.6919 17.4644C10.6919 17.4644 10.0897 19.7548 9.94159 20.3176C9.67502 21.3641 8.94446 22.6672 8.45083 23.4669C9.57631 23.8124 10.761 24 12.0049 24C18.6294 24 24 18.6294 24 12.0049C23.9901 5.37062 18.6195 0 11.9951 0Z"
                              fill="#191A1B"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_916_4227">
                              <rect width="24" height="24" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        aria-label="Instagram"
                        href="https://instagram.com/nordstromrack"
                        target="_blank"
                        className="instagram"
                      >
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          data-testid="svg_IconInstagram"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z"
                            fill="#191A1B"
                          ></path>
                          <path
                            d="M17.25 8C17.9404 8 18.5 7.44036 18.5 6.75C18.5 6.05964 17.9404 5.5 17.25 5.5C16.5596 5.5 16 6.05964 16 6.75C16 7.44036 16.5596 8 17.25 8Z"
                            fill="#191A1B"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.85848 2.06994C6.79447 2.12014 6.06786 2.28994 5.43265 2.53954C4.77524 2.79574 4.21804 3.13954 3.66363 3.69594C3.10923 4.25235 2.76782 4.80995 2.51342 5.46835C2.26722 6.10495 2.10042 6.83215 2.05342 7.89676C2.00642 8.96136 1.99602 9.30356 2.00122 12.0192C2.00642 14.7348 2.01842 15.0752 2.07002 16.142C2.12082 17.2058 2.29002 17.9322 2.53962 18.5676C2.79622 19.225 3.13963 19.782 3.69623 20.3366C4.25284 20.8912 4.81004 21.2318 5.47005 21.4866C6.10606 21.7324 6.83347 21.9 7.89788 21.9466C8.96229 21.9932 9.30489 22.004 12.0197 21.9988C14.7345 21.9936 15.0763 21.9816 16.143 21.931C17.6954 21.8574 19.2158 21.4311 20.3368 20.3048C21.4582 19.1782 21.8789 17.6578 21.9464 16.1042C21.993 15.0368 22.004 14.696 21.9988 11.9808C21.9936 9.26556 21.9814 8.92516 21.9308 7.85876C21.8571 6.30466 21.4311 4.78658 20.305 3.66334C19.1798 2.54101 17.6566 2.12084 16.1038 2.05374C15.0393 2.00774 14.6967 1.99594 11.9809 2.00114C9.26509 2.00634 8.92509 2.01794 7.85848 2.06994ZM7.95587 4.06757L7.95273 4.06772C7.07742 4.10901 6.56983 4.24156 6.1641 4.40099L6.15888 4.40304C5.7435 4.56492 5.42601 4.76075 5.08039 5.10761C4.73463 5.45461 4.54006 5.77236 4.379 6.1892C4.221 6.59773 4.09019 7.108 4.05147 7.98497C4.00653 9.00294 3.99603 9.30863 4.00121 12.0153C4.00639 14.7216 4.01834 15.0253 4.06768 16.0454L4.06774 16.0466C4.10961 16.9233 4.24188 17.4309 4.40114 17.8363L4.40273 17.8404C4.5653 18.2569 4.76111 18.5743 5.10789 18.9198C5.45429 19.265 5.77118 19.459 6.19035 19.6208C6.59953 19.779 7.1103 19.9102 7.98535 19.9485C9.00391 19.9931 9.31064 20.004 12.0159 19.9988C14.7212 19.9936 15.0273 19.9817 16.0482 19.9333C17.329 19.8725 18.2833 19.5328 18.9193 18.8939C19.5568 18.2534 19.8927 17.298 19.9483 16.0174C19.9929 14.9955 20.004 14.6898 19.9988 11.9846C19.9936 9.27925 19.9815 8.97444 19.9331 7.95355C19.8723 6.67192 19.5332 5.7183 18.8926 5.07934C18.2549 4.44326 17.2988 4.10725 16.0174 4.05187C14.9973 4.00779 14.6894 3.99596 11.9847 4.00113C9.27761 4.00632 8.9749 4.01788 7.95587 4.06757Z"
                            fill="#191A1B"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        aria-label="YouTube"
                        href="https://youtube.com/channel/UCVnercf1hMdHu6rz8xhuUDA"
                        target="_blank"
                        className="youtube"
                      ></a>
                    </li>
                  </ul>
                </section>
              </div>
              <button href="#back-to-top" className="back-to-top">
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-testid="svg_IconChevronUp"
                >
                  <path
                    d="M20.7071 15.7071C20.3166 16.0976 19.6834 16.0976 19.2929 15.7071L12 8.41421L4.70711 15.7071C4.31658 16.0976 3.68342 16.0976 3.29289 15.7071C2.90237 15.3166 2.90237 14.6834 3.29289 14.2929L11.2929 6.29289C11.4804 6.10536 11.7348 6 12 6C12.2652 6 12.5196 6.10536 12.7071 6.29289L20.7071 14.2929C21.0976 14.6834 21.0976 15.3166 20.7071 15.7071Z"
                    fill="#191A1B"
                  ></path>
                </svg>
                Top
              </button>
            </div>
          </div>
          <div className="important-links mt-3">
            <ul className="d-flex mb-0 pb-3">
              <li>
                <a
                  aria-label="Privacy"
                  href="https://nordstrom.com/browse/customer-service/policy/privacy"
                  className=""
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  aria-label="Your Privacy Rights"
                  href="https://www.nordstrom.com/browse/customer-service/policy/privacy#anchor-link-your-options"
                  className=""
                >
                  Your Privacy Rights
                </a>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 30 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-testid="svg_LogoCcpa"
                  alt="California Consumer Privacy Act (CCPA) Opt-Out Icon"
                  className="privacy-rights-icon"
                >
                  <g clip-path="url(#clip0_2369_1030)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.39998 12.8H14.2L17.3 1.19995H7.39998C4.19998 1.19995 1.59998 3.79995 1.59998 6.99995C1.59998 10.2 4.19998 12.8 7.39998 12.8Z"
                      fill="white"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.6 0H7.40002C3.50002 0 0.400024 3.1 0.400024 7C0.400024 10.9 3.50002 14 7.40002 14H22.6C26.5 14 29.6 10.9 29.6 7C29.6 3.1 26.4 0 22.6 0ZM1.60002 7C1.60002 3.8 4.20002 1.2 7.40002 1.2H17.3L14.2 12.8H7.40002C4.20002 12.8 1.60002 10.2 1.60002 7Z"
                      fill="#0066FF"
                    ></path>
                    <path
                      d="M24.6 3.99998C24.8 4.19998 24.8 4.59998 24.6 4.79998L22.5 6.99998L24.7 9.19998C24.9 9.39998 24.9 9.79998 24.7 9.99998C24.5 10.2 24.1 10.2 23.9 9.99998L21.7 7.79998L19.5 9.99998C19.3 10.2 18.9 10.2 18.7 9.99998C18.5 9.79998 18.5 9.39998 18.7 9.19998L20.8 6.99998L18.6 4.79998C18.4 4.59998 18.4 4.19998 18.6 3.99998C18.8 3.79998 19.2 3.79998 19.4 3.99998L21.6 6.19998L23.8 3.99998C24 3.79998 24.4 3.79998 24.6 3.99998Z"
                      fill="white"
                    ></path>
                    <path
                      d="M12.7 4.09995C12.9 4.29995 13 4.69995 12.8 4.89995L8.6 9.79995C8.5 9.89995 8.4 9.99995 8.3 9.99995C8.1 10.1 7.8 10.1 7.6 9.89995L5.4 7.69995C5.2 7.49995 5.2 7.09995 5.4 6.89995C5.6 6.69995 6 6.69995 6.2 6.89995L8 8.59995L11.8 4.09995C12 3.89995 12.4 3.89995 12.7 4.09995Z"
                      fill="#0066FF"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_2369_1030">
                      <rect width="30" height="14" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </li>
              <li>
                <a
                  aria-label="Terms &amp; Conditions"
                  href="https://www.nordstromrack.com/terms"
                  className=""
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  aria-label="California Supply Chain Act"
                  href="https://www.nordstrom.com/browse/nordstrom-cares"
                  className=""
                >
                  California Supply Chain Act
                </a>
              </li>
              <li> ©2024 Nordstrom Rack </li>
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
