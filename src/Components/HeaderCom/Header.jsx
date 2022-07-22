import React from "react";


import style from "./Header.module.css";
import { LocationIcon } from "./LocationIcon";
import { SearchIcon } from "./SearchIcon";
import { UserIcon } from "./UserIcon";
import { WishlistIcon } from "./WishlistIcon";

const Header = () => {
  return (
    <div className={style.mainDiv}>

      <div className={style.icons} id={style.headericons}>
        <div>
          <LocationIcon />
        </div>
        <div className={style.icon}>
          <WishlistIcon style={{marginRight: "10px", border: "1px solid black"}} />
          <SearchIcon />
          <UserIcon />
        </div>

      <div className={style.icons}>

      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
 
      {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}

      </div>
      <img
        src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182"
        className={style.logo}
        alt="bluemercury-logo"
      />

      <div className={style.navTitle}>
        <header className={style.header}>
          <ul className={style.headings}>
           
            <li className={style.drop_one} style={{marginLeft: "40px"}}>
              <span>SHOP</span>
              <div className={style.menu_experiment}>
              {" "}
              {/* Visible on hover */}
              <div className={style.menu_one}>
                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>
                    SKIN CARE
                  </h4>
                  <li>MAKEUP</li>
                  <li>HAIR</li>
                  <li>BATH & BODY</li>
                  <li>FRAGRANCE</li>
                  <li>TOOLS & ACCESSORIES</li>
                  <li>HOME & LIFESTYLE</li>
                  <li>SUN CARE</li>
                  <li>MEN</li>
                  <li>GIFTS</li>
                  <li>BEST SELLERS</li>
                  <li>WELLNESS</li>
                  <li>FREE GIFTS</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>
                    BY CATEGORY
                  </h4>
                  <li>Shop All</li>
                  <li>Cleansers</li>
                  <li>Exfoliators & Peels</li>
                  <li>Eye Care</li>
                  <li>Lip Care</li>
                  <li>Masks</li>
                  <li>Moisturizers</li>
                  <li>Sun Care</li>
                  <li>Tools & Devices</li>
                  <li>Treatment & Serums</li>
                  <li>Vitamin & Supplements</li>
                  <li>Value & Gift Sets</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>BY BRAND</h4>
                  <li>111Skin</li>
                  <li>Augustinus Bader</li>
                  <li>Dr. barbara Strum</li>
                  <li>EltaMD</li>
                  <li>IS Clinical</li>
                  <li>Kiehl's</li>
                  <li>La Mer</li>
                  <li>M-61</li>
                  <li>OSEA</li>
                  <li>Revive</li>
                  <li>SkinCeuticals</li>
                  <li>Tata Harper</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/pgp_nav_303x303.jpg?v=1656522596"
                    alt="m-61 peel pac"
                  />
                  <h4 style={{ color: "black", fontWeight: "600" }}>
                    Best Seller: M-61 PowerGlow® Peel
                  </h4>
                  <p>
                    The 1-step exfoliating glowpeel that resurfaces, clarifies
                    and firms
                  </p>
                </ul>
              </div>
            </div>

            </li>
            
            <li className={style.drop_two}>
            <span>NEW!</span>
            <div className={style.menu_experiment}>
              {" "}
              {/* Visible on hover */}
              <div className={style.menu_two}>

                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>
                    BY CATEGORY
                  </h4>
                  <li>Shop All</li>
                  <li>SkinCare</li>
                  <li>Makeup</li>
                  <li>Hair</li>
                  <li>Bath & Body</li>
                  <li>Fragrance</li>
                  <li>Tools & Accessories</li>
                  <li>Wellness</li>
                  <li>Gifts</li>
                  <li>Wedding Essentials</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/elta_303x303.jpg?v=1657286475" alt="" />
                  <h4 style={{ color: "black", fontWeight: "600" }}>
                    New Brand Alert!
                  </h4>
                  <p>
                    EltaMD UV Sheer Broad-Spectrum SPF 50+
                  </p>
                </ul>

                <ul className={style.menu1_ul}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/vaction_edit_303x303.jpg?v=1655303891"
                    alt="m-61 peel pac"
                  />
                  <h4 style={{ color: "black", fontWeight: "600" }}>
                    The Vacation Edit
                  </h4>
                  <p>
                    $350+ worth of summer essentials for $99! 
                  </p>
                </ul>
              </div>
            </div>
            </li>

            <li className={style.drop_three}>
            <span>BRANDS</span>
            <div className={style.menu_experiment}>
              {" "}
              {/* Visible on hover */}
              <div className={style.menu_three}>
                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>
                    SKIN CARE
                  </h4>
                  <li>MAKEUP</li>
                  <li>HAIR</li>
                  <li>BATH & BODY</li>
                  <li>FRAGRANCE</li>
                  <li>TOOLS & ACCESSORIES</li>
                  <li>HOME & LIFESTYLE</li>
                  <li>SUN CARE</li>
                  <li>MEN</li>
                  <li>GIFTS</li>
                  <li>BEST SELLERS</li>
                  <li>WELLNESS</li>
                  <li>FREE GIFTS</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>
                    BY CATEGORY
                  </h4>
                  <li>Shop All</li>
                  <li>Cleansers</li>
                  <li>Exfoliators & Peels</li>
                  <li>Eye Care</li>
                  <li>Lip Care</li>
                  <li>Masks</li>
                  <li>Moisturizers</li>
                  <li>Sun Care</li>
                  <li>Tools & Devices</li>
                  <li>Treatment & Serums</li>
                  <li>Vitamin & Supplements</li>
                  <li>Value & Gift Sets</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>BY BRAND</h4>
                  <li>111Skin</li>
                  <li>Augustinus Bader</li>
                  <li>Dr. barbara Strum</li>
                  <li>EltaMD</li>
                  <li>IS Clinical</li>
                  <li>Kiehl's</li>
                  <li>La Mer</li>
                  <li>M-61</li>
                  <li>OSEA</li>
                  <li>Revive</li>
                  <li>SkinCeuticals</li>
                  <li>Tata Harper</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/pgp_nav_303x303.jpg?v=1656522596"
                    alt="m-61 peel pac"
                  />
                  <h4 style={{ color: "black", fontWeight: "600" }}>
                    Best Seller: M-61 PowerGlow® Peel
                  </h4>
                  <p>
                    The 1-step exfoliating glowpeel that resurfaces, clarifies
                    and firms
                  </p>
                </ul>
              </div>
            </div>
            </li>

            <li className={style.drop_four}>
            <span>EXPLORE</span>
            <div className={style.menu_experiment}>
              {" "}
              {/* Visible on hover */}
              <div className={style.menu_four}>
                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>
                    SKIN CARE
                  </h4>
                  <li>MAKEUP</li>
                  <li>HAIR</li>
                  <li>BATH & BODY</li>
                  <li>FRAGRANCE</li>
                  <li>TOOLS & ACCESSORIES</li>
                  <li>HOME & LIFESTYLE</li>
                  <li>SUN CARE</li>
                  <li>MEN</li>
                  <li>GIFTS</li>
                  <li>BEST SELLERS</li>
                  <li>WELLNESS</li>
                  <li>FREE GIFTS</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>
                    BY CATEGORY
                  </h4>
                  <li>Shop All</li>
                  <li>Cleansers</li>
                  <li>Exfoliators & Peels</li>
                  <li>Eye Care</li>
                  <li>Lip Care</li>
                  <li>Masks</li>
                  <li>Moisturizers</li>
                  <li>Sun Care</li>
                  <li>Tools & Devices</li>
                  <li>Treatment & Serums</li>
                  <li>Vitamin & Supplements</li>
                  <li>Value & Gift Sets</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>BY BRAND</h4>
                  <li>111Skin</li>
                  <li>Augustinus Bader</li>
                  <li>Dr. barbara Strum</li>
                  <li>EltaMD</li>
                  <li>IS Clinical</li>
                  <li>Kiehl's</li>
                  <li>La Mer</li>
                  <li>M-61</li>
                  <li>OSEA</li>
                  <li>Revive</li>
                  <li>SkinCeuticals</li>
                  <li>Tata Harper</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/pgp_nav_303x303.jpg?v=1656522596"
                    alt="m-61 peel pac"
                  />
                  <h4 style={{ color: "black", fontWeight: "600" }}>
                    Best Seller: M-61 PowerGlow® Peel
                  </h4>
                  <p>
                    The 1-step exfoliating glowpeel that resurfaces, clarifies
                    and firms
                  </p>
                </ul>
              </div>
            </div>
            </li>

            <li className={style.drop_five}>
            <span>EVENTS</span>
            <div className={style.menu_experiment}>
              {" "}
              {/* Visible on hover */}
              <div className={style.menu_five}>
                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>
                    SKIN CARE
                  </h4>
                  <li>MAKEUP</li>
                  <li>HAIR</li>
                  <li>BATH & BODY</li>
                  <li>FRAGRANCE</li>
                  <li>TOOLS & ACCESSORIES</li>
                  <li>HOME & LIFESTYLE</li>
                  <li>SUN CARE</li>
                  <li>MEN</li>
                  <li>GIFTS</li>
                  <li>BEST SELLERS</li>
                  <li>WELLNESS</li>
                  <li>FREE GIFTS</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>
                    BY CATEGORY
                  </h4>
                  <li>Shop All</li>
                  <li>Cleansers</li>
                  <li>Exfoliators & Peels</li>
                  <li>Eye Care</li>
                  <li>Lip Care</li>
                  <li>Masks</li>
                  <li>Moisturizers</li>
                  <li>Sun Care</li>
                  <li>Tools & Devices</li>
                  <li>Treatment & Serums</li>
                  <li>Vitamin & Supplements</li>
                  <li>Value & Gift Sets</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>BY BRAND</h4>
                  <li>111Skin</li>
                  <li>Augustinus Bader</li>
                  <li>Dr. barbara Strum</li>
                  <li>EltaMD</li>
                  <li>IS Clinical</li>
                  <li>Kiehl's</li>
                  <li>La Mer</li>
                  <li>M-61</li>
                  <li>OSEA</li>
                  <li>Revive</li>
                  <li>SkinCeuticals</li>
                  <li>Tata Harper</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/pgp_nav_303x303.jpg?v=1656522596"
                    alt="m-61 peel pac"
                  />
                  <h4 style={{ color: "black", fontWeight: "600" }}>
                    Best Seller: M-61 PowerGlow® Peel
                  </h4>
                  <p>
                    The 1-step exfoliating glowpeel that resurfaces, clarifies
                    and firms
                  </p>
                </ul>
              </div>
            </div>
            </li>

            <li className={style.drop_six}>
            <span>BLUEREWARDS</span>
            <div className={style.menu_experiment}>
              {" "}
              {/* Visible on hover */}
              <div className={style.menu_six}>
                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>
                    SKIN CARE
                  </h4>
                  <li>MAKEUP</li>
                  <li>HAIR</li>
                  <li>BATH & BODY</li>
                  <li>FRAGRANCE</li>
                  <li>TOOLS & ACCESSORIES</li>
                  <li>HOME & LIFESTYLE</li>
                  <li>SUN CARE</li>
                  <li>MEN</li>
                  <li>GIFTS</li>
                  <li>BEST SELLERS</li>
                  <li>WELLNESS</li>
                  <li>FREE GIFTS</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>
                    BY CATEGORY
                  </h4>
                  <li>Shop All</li>
                  <li>Cleansers</li>
                  <li>Exfoliators & Peels</li>
                  <li>Eye Care</li>
                  <li>Lip Care</li>
                  <li>Masks</li>
                  <li>Moisturizers</li>
                  <li>Sun Care</li>
                  <li>Tools & Devices</li>
                  <li>Treatment & Serums</li>
                  <li>Vitamin & Supplements</li>
                  <li>Value & Gift Sets</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>BY BRAND</h4>
                  <li>111Skin</li>
                  <li>Augustinus Bader</li>
                  <li>Dr. barbara Strum</li>
                  <li>EltaMD</li>
                  <li>IS Clinical</li>
                  <li>Kiehl's</li>
                  <li>La Mer</li>
                  <li>M-61</li>
                  <li>OSEA</li>
                  <li>Revive</li>
                  <li>SkinCeuticals</li>
                  <li>Tata Harper</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/pgp_nav_303x303.jpg?v=1656522596"
                    alt="m-61 peel pac"
                  />
                  <h4 style={{ color: "black", fontWeight: "600" }}>
                    Best Seller: M-61 PowerGlow® Peel
                  </h4>
                  <p>
                    The 1-step exfoliating glowpeel that resurfaces, clarifies
                    and firms
                  </p>
                </ul>
              </div>
            </div>
            </li>

            <li className={style.drop_seven} style={{marginRight: "0px"}}>
            <span>BEAUTY ALFRESCO</span>
            <div className={style.menu_experiment}>
              {" "}
              {/* Visible on hover */}
              <div className={style.menu_seven}>
                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>
                    SKIN CARE
                  </h4>
                  <li>MAKEUP</li>
                  <li>HAIR</li>
                  <li>BATH & BODY</li>
                  <li>FRAGRANCE</li>
                  <li>TOOLS & ACCESSORIES</li>
                  <li>HOME & LIFESTYLE</li>
                  <li>SUN CARE</li>
                  <li>MEN</li>
                  <li>GIFTS</li>
                  <li>BEST SELLERS</li>
                  <li>WELLNESS</li>
                  <li>FREE GIFTS</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>
                    BY CATEGORY
                  </h4>
                  <li>Shop All</li>
                  <li>Cleansers</li>
                  <li>Exfoliators & Peels</li>
                  <li>Eye Care</li>
                  <li>Lip Care</li>
                  <li>Masks</li>
                  <li>Moisturizers</li>
                  <li>Sun Care</li>
                  <li>Tools & Devices</li>
                  <li>Treatment & Serums</li>
                  <li>Vitamin & Supplements</li>
                  <li>Value & Gift Sets</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>BY BRAND</h4>
                  <li>111Skin</li>
                  <li>Augustinus Bader</li>
                  <li>Dr. barbara Strum</li>
                  <li>EltaMD</li>
                  <li>IS Clinical</li>
                  <li>Kiehl's</li>
                  <li>La Mer</li>
                  <li>M-61</li>
                  <li>OSEA</li>
                  <li>Revive</li>
                  <li>SkinCeuticals</li>
                  <li>Tata Harper</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/pgp_nav_303x303.jpg?v=1656522596"
                    alt="m-61 peel pac"
                  />
                  <h4 style={{ color: "black", fontWeight: "600" }}>
                    Best Seller: M-61 PowerGlow® Peel
                  </h4>
                  <p>
                    The 1-step exfoliating glowpeel that resurfaces, clarifies
                    and firms
                  </p>
                </ul>
              </div>
            </div>
            </li>
            
          </ul>
        </header>
      </div>
    </div>
    </div>

  );
};

  


export default Header;
