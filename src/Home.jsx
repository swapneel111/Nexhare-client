import { ThirdwebProvider, Web3Button } from "@thirdweb-dev/react";
import home from './images/home.png'
import about from './images/about.jpg'
import img1 from './images/portfolio1.jpg'
import img2 from './images/portfolio2.jpg'
import img3 from './images/portfolio3.jpg'
import img4 from './images/portfolio4.jpg'
import img5 from './images/portfolio5.jpg'
import img6 from './images/portfolio6.jpg'
import './style.css'
import { ConnectWallet } from "@thirdweb-dev/react";
import { ThirdwebNftMedia } from "@thirdweb-dev/react";
import {Link} from "react-router-dom"



const App = () => {
// const { contract: marketplace, isLoading: loadingContract } = useContract(
//         MARKETPLACE_ADDRESS,
//         "marketplace-v3"
//       );
    
//       // 1. Load if the NFT is for direct listing
//       const { data: directListing, isLoading: loadingDirect } =
//         useValidDirectListings(marketplace, {
//           tokenContract: NFT_COLLECTION_ADDRESS,
//           tokenId: nft.metadata.id,
//         });
    
//       // 2. Load if the NFT is for auction
//       const { data: auctionListing, isLoading: loadingAuction } =
//         useValidEnglishAuctions(marketplace, {
//           tokenContract: NFT_COLLECTION_ADDRESS,
//           tokenId: nft.metadata.id,
//         });
    
  return (


    <ThirdwebProvider activeChain="ethereum" clientId="4392ac7d521f709079afb64654495f6c">

    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>


  
    <header class="header">
        <a href="#" class="logo">Nexhare</a>

        <i class='bx bx-menu' id="menu-icon"></i>

        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="https://drive.google.com/file/d/1AhbVUPeSSM-WebxClKgQI1yq2yBm7Pm3/view?usp=share_link">Whitepaper</a>
            <a href="#contact">Contact</a>
            <ConnectWallet
  theme="dark"
  btnTitle="Connect Wallet"
  className  ="wallet"
/>
        </nav>
    </header>

    <section class="home" id="home">
        <div class="home-content">
            <h3>The Ultimate</h3>
            <h1>Web3 Marketplace</h1>
            <h3>For <span class="multiple-text">Physical Assets</span></h3>
            <p>A step forward to alternative investments via Nexhare platform</p>
            <div class="social-media">
                <a href="#"><i class='bx bxl-facebook'></i></a>
                <a href="#"><i class='bx bxl-twitter'></i></a>
                <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                <a href="#"><i class='bx bxl-linkedin'></i></a>
            </div>
            <a href="#" class="btn">Explore</a>
        </div>

        <div class="home-img">
            <img src={home} />
        </div>

    </section>

    
    <section class="about" id="about">
        <div class="about-img">
            <img src={about} />
        </div>

        <div class="about-content">
            <h2 class="heading">How It <span>Works</span></h2>
            <h3>Find out to get started</h3>
            <p>We harness the power of blockchain technology to instill trust and transparency into every transaction.
                Through smart contracts and decentralized ledgers, we ensure that the history, authenticity, and
                ownership of each physical asset are immutable and verifiable. No more second-guessing the provenance of
                a valuable collectible or artwork.</p>
                
                <p>Our Web3 marketplace transcends geographical limitations, enabling users from all corners of the world
                to participate in a global marketplace. Whether you're a collector in Tokyo, an investor in New York, or
                an artist in Berlin, our platform opens doors to a vast network of opportunities.</p>
            <a href="#" class="btn">Coming Soon !</a>
        </div>
    </section>


    <section class="services" id="services">
        <h2 class="heading">Browse <span>Categories</span></h2>

        <div class="services-container">
            <div class="services-box">
                <i class='bx bxs-home'></i>
                <h3>Real Estate</h3>
                <p>Discover diverse real estate assets listed on our website, featuring properties, land,
                     and buildings for investment, rental, or ownership opportunities</p>
                <a href="#" class="btn">Coming Soon !</a>
            </div>

            <div class="services-box">
                <i class='bx bxs-car'></i>
                <h3>Vintage Cars</h3>
                <p>Explore our curated collection of vintage cars, showcasing classic automobiles with timeless appeal 
                    and historical significance for the enthusiasts and collectors</p>
                <a href="#" class="btn">Coming Soon !</a>
            </div>

            <div class="services-box">
                <i class='bx bxs-diamond'></i>
                <h3>High Valued Jewels</h3>
                <p>Explore our exquisite collection of high-value jewels, featuring stunning gemstones and 
                    luxury jewelry pieces for our collectors and connoisseurs</p>
                <a href="#" class="btn">Coming Soon !</a>
            </div>

        </div>
    </section>


    <section class="portfolio" id="portfolio">
        <h2 class="heading">Trending <span>Collection</span></h2>

        <div class="portfolio-container">

        <div class="portfolio-box">
                <img src={img6}  />
                <div class="portfolio-layer">
                    <h4>Jordan 1 OG</h4>
                    <p>Exclusive, collectible footwear showcasing style and sophistication</p>
                    {/* <a href="#"><i class='bx bx-link-external'></i></a> */}
                    <Link to="/jordan" className="btn"><i class='bx bx-link-external'></i></Link>
                </div>
        </div>

            <div class="portfolio-box">
                <img src={img1} />
                <div class="portfolio-layer">
                    <h4>NXY Towers</h4>
                    <p>Iconic skyscraper offering premium luxury living in prime location</p>
                    <Link to="/tower" className="btn"><i class='bx bx-link-external'></i></Link>
                </div>
            </div>

            <div class="portfolio-box">
                <img src={img2}  />
                <div class="portfolio-layer">
                    <h4>Vintage Cars</h4>
                    <p>Rare classic, restored to perfection, for collectors and enthusiasts</p>
                    <Link to="/car" className="btn"><i class='bx bx-link-external'></i></Link>
                </div>
            </div>

            <div class="portfolio-box">
                <img src={img3}  />
                <div class="portfolio-layer">
                    <h4>Art Sea</h4>
                    <p>Will be listed soon....</p>
                    <a href="#"><i class='bx bx-link-external'></i></a>
                </div>
            </div>

            <div class="portfolio-box">
                <img src={img4}  />
                <div class="portfolio-layer">
                    <h4>GX Estate</h4>
                    <p>Will be listed soon....</p>
                    <a href="#"><i class='bx bx-link-external'></i></a>
                </div>
            </div>

            <div class="portfolio-box">
                <img src= {img5} />
                <div class="portfolio-layer">
                    <h4>GM Chime</h4>
                    <p>Will be listed soon....</p>
                    <a href="#"><i class='bx bx-link-external'></i></a>
                </div>
            </div>

            

        </div>
    </section>

  
    <section class="contact" id="contact">
        <h2 class="heading">Upload Your <span>NFT</span></h2>

        <form action="#">
            <a href="#" class="button">Choose image file</a>
            <br/>
            <br/>
            <div class="input-box">
                <input type="text" placeholder="NFT Name"/>
                <input type="number" placeholder="Price INR"/>
            </div>
            <div class="input-box">
                <input type="text" placeholder="Wallet Address"/>
                <input type="email" placeholder="Email Address"/>
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder="NFT Description"></textarea>
            <br/>
            <input type="submit" value="List NFT" class="btn"/>
        </form>
    </section>

  
    <footer class="footer">
        <div class="footer-text">
            <p>Cpoyright &copy; 2023 by Nexhare | All Rights Reserved.</p>
        </div>

        <div class="footer-iconTop">
            <a href="#home"><i class='bx bx-up-arrow-alt'></i></a>
        </div>
    </footer>

      <script src="https://unpkg.com/scrollreveal"></script>


    <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>

    
    </ThirdwebProvider>
  );
};
export default App;