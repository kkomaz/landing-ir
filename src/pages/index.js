import React from "react"
import SEO from "../components/seo"
import logo from '../images/logo.png'
import fileImg from '../images/file-img.jpg'
import dataImg from '../images/data.jpg'
import heightWidthImg from '../images/height-width.jpg'
import privacyImg from '../images/privacy.jpg'

const IndexPage = () => (
  <div className="is-preload">
    <SEO title="EZResize" />
    <section id="header">
      <div className="inner">
        <img src={logo} alt="logo" />
        <h1>
          Welcome to <strong>EZResize</strong>
        </h1>
        <p>
          A simple, easy, resize tool for your images
          <br />
          Privacy focused, end-to-end encrypted, and easy to use
        </p>
        <ul className="actions special">
          <li>
            <a
              className="button scrolly"
              href="https://app.ezresize.tech"
              rel="noopener noreferrer"
              target="_blank"
            >
              Start Now
            </a>
          </li>
          <li>
            <a href="#one" className="button scrolly">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section id="one" className="main style1">
      <div className="container">
        <div className="row gtr-150">
          <div className="col-6 col-12-medium">
            <header className="major">
              <h2>
                Do you know where your files are saved?
              </h2>
            </header>
            <p>
              An abundant number of resize tools are readily available online.  But do you really know where your file goes once you upload it?
            </p>
            <p>
              With EZResize, you get to resize your image and have the option to save it locally on your hard drive OR save your <strong>encrypted</strong> data to your EZResize storage.
            </p>
          </div>
          <div className="col-6 col-12-medium imp-medium">
            <span className="image fit">
              <img src={fileImg} alt="" />
            </span>
          </div>
        </div>
      </div>
    </section>

    <section id="two" className="main style2">
      <div className="container">
        <div className="row gtr-150">
          <div className="col-6 col-12-medium">
            <ul className="major-icons">
              <li>
                <span className="icon solid style1 major fa-code"></span>
              </li>
              <li>
                <span className="icon solid style2 major fa-bolt"></span>
              </li>
              <li>
                <span className="icon solid style3 major fa-camera-retro"></span>
              </li>
              <li>
                <span className="icon solid style4 major fa-cog"></span>
              </li>
              <li>
                <span className="icon solid style5 major fa-desktop"></span>
              </li>
              <li>
                <span className="icon solid style6 major fa-calendar"></span>
              </li>
            </ul>
          </div>
          <div className="col-6 col-12-medium">
            <header className="major">
              <h2>
                How does this all work?
              </h2>
            </header>
            <p>
              Under the hood, EZResize is powered by <strong>Blockstack</strong>, a new internet for decentralized apps.
            </p>
            <p>
              The Blockstack team has developed a decentralized high-performance storage system to allow users to store their data wherever they please.
              Include but not limited to S3, Azure, etc. They have also created the foundation to allow users to encrypt and decrypt their data.
            </p>
            <p>
              EZResize will <strong>never</strong> have access to your images and all files uploaded will be 100% encrypted.
            </p>

            <p>
              To learn more about Blockstack click <a href="https://blockstack.org/about/" rel="noopener noreferrer" target="_blank">here</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="three" className="main style1 special">
      <div className="container">
        <header className="major">
          <h2>Features</h2>
        </header>
        <div className="row gtr-150">
          <div className="col-4 col-12-medium">
            <span className="image fit">
              <img src={heightWidthImg} alt="height-width" />
            </span>
            <h3>Height and Width Control</h3>
            <p>
              EZResize will choose the best dimensions to ensure you get the best aspect ratio while trying to preserve your desired dimensions
            </p>
          </div>
          <div className="col-4 col-12-medium">
            <span className="image fit">
              <img src={privacyImg} alt="privacy" />
            </span>
            <h3>Privacy</h3>
            <p>
              All files saved in EZResize Storage is 100% encrypted
            </p>
          </div>
          <div className="col-4 col-12-medium">
            <span className="image fit">
              <img src={dataImg} alt="data" />
            </span>
            <h3>Data Ownership</h3>
            <p>
              Take control of your data.  Images will never be lost for someone else to find.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="footer">
      <ul className="icons">
        <li>
          <a href="https://twitter.com/EZResize" rel="noopener noreferrer" target="_blank" className="icon brands alt fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        {/*
          <li>
            <a href="#" className="icon brands alt fa-product-hunt">
              <span className="label">Product Hunt</span>
            </a>
          </li>
        */}
        <li>
          <a href="https://github.com/kkomaz/landing-ir" rel="noopener noreferrer" target="_blank" className="icon brands alt fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li onClick={() => {
          window.location.href = "mailto:EZResize@protonmail.com"
        }}>
          <a href="#" className="icon solid alt fa-envelope">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Tech Rally</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </section>
  </div>
)

export default IndexPage
