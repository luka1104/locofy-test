import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import MatterhornPopup from "../components/matterhorn-popup";
import PortalPopup from "../components/portal-popup";
import styles from "./hotels-page.module.css";

const HotelsPage: NextPage = () => {
  const router = useRouter();
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup2Open, setMatterhornPopup2Open] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);

  const onFickleflightLogoContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onWebScreenClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onExploreTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onSearchTextClick = useCallback(() => {
    router.push("/results-page");
  }, [router]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const openMatterhornPopup2 = useCallback(() => {
    setMatterhornPopup2Open(true);
  }, []);

  const closeMatterhornPopup2 = useCallback(() => {
    setMatterhornPopup2Open(false);
  }, []);

  const openMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(true);
  }, []);

  const closeMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(false);
  }, []);

  return (
    <>
      <div className={styles.hotelsPage}>
        <header className={styles.topHeader}>
          <div className={styles.topContainer}>
            <div
              className={styles.fickleflightLogo}
              onClick={onFickleflightLogoContainerClick}
            >
              <div className={styles.symbols}>
                <img
                  className={styles.webScreenIcon}
                  alt=""
                  src="/webscreen.svg"
                  onClick={onWebScreenClick}
                />
              </div>
            </div>
            <div className={styles.navigationRight}>
              <div className={styles.navigationMenu}>
                <div className={styles.explore} onClick={onExploreTextClick}>
                  Explore
                </div>
                <div className={styles.explore} onClick={onSearchTextClick}>
                  Search
                </div>
                <button className={styles.hotels}>Hotels</button>
                <button className={styles.offers}>Offers</button>
              </div>
              <div className={styles.accountSection}>
                <img
                  className={styles.hamburgerMenuIcon}
                  alt=""
                  src="/notification.svg"
                />
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="/notification2.svg"
                />
                <img
                  className={styles.unsplashd1upkifd04aIcon}
                  alt=""
                  src="/top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className={styles.header}>
          <div className={styles.banner}>
            <img
              className={styles.bannerBackground}
              alt=""
              src="/banner-background@2x.png"
            />
            <div className={styles.title}>
              <div className={styles.staysInLos}>Stays in Los Angeles</div>
              <div className={styles.options}>
                <button className={styles.pilldefault}>
                  <div className={styles.beds}>Recommended</div>
                </button>
                <button className={styles.pilldefault1}>
                  <div className={styles.beds1}>Price</div>
                </button>
                <button className={styles.pilldefault1}>
                  <div className={styles.beds1}>Rating</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hotelResults}>
          <div className={styles.resultsSumamry}>
            <div className={styles.results}>200+ results</div>
            <div className={styles.filters}>
              <img className={styles.filtersIcon} alt="" src="/filters.svg" />
              <div className={styles.filters1}>Filters</div>
            </div>
          </div>
          <div className={styles.resultsSection}>
            <div className={styles.resultCardsCol}>
              <div className={styles.resultsCard}>
                <img
                  className={styles.resultsImageIcon}
                  alt=""
                  src="/unsplashs6ch7n3eoqy@2x.png"
                />
                <div className={styles.resultsDetails}>
                  <div className={styles.resultsSumamry}>
                    <div className={styles.resultAndVideo}>
                      <div className={styles.kingBedStandard}>
                        1 king bed standard
                      </div>
                      <b className={styles.holidayInnExpre}>
                        Holiday Inn Expre...
                      </b>
                      <div className={styles.review}>
                        <div className={styles.reviews}>(1,136 reviews)</div>
                        <div className={styles.stars}>
                          <div className={styles.div}>4.7</div>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector7.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.notificationBellIcon}>
                      <button
                        className={styles.group}
                        onClick={openMatterhornPopup}
                      >
                        <img
                          className={styles.vectorIcon1}
                          alt=""
                          src="/vector8.svg"
                        />
                        <img
                          className={styles.vectorIcon2}
                          alt=""
                          src="/vector9.svg"
                        />
                      </button>
                    </div>
                  </div>
                  <div className={styles.priceAndCta}>
                    <div className={styles.pricing}>
                      <b className={styles.s286}>$S 286</b>
                      <div className={styles.night}>/night</div>
                    </div>
                    <button className={styles.viewDetailsButton}>
                      <div className={styles.viewDetailsButtonChild} />
                      <div className={styles.searchFlights}>View Details</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.resultsCard1}>
                <img
                  className={styles.resultsImageIcon}
                  alt=""
                  src="/unsplashs6ch7n3eoqy1@2x.png"
                />
                <div className={styles.resultsDetails1}>
                  <div className={styles.resultsSumamry}>
                    <div className={styles.result}>
                      <b className={styles.freehandLosAngeles}>
                        Freehand Los Angeles
                      </b>
                      <div className={styles.bedInQuad}>Bed in Quad</div>
                      <div className={styles.review1}>
                        <div className={styles.reviews1}>(1,941 reviews)</div>
                        <div className={styles.stars1}>
                          <div className={styles.div1}>4.2</div>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector10.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.priceAndCta1}>
                    <div className={styles.pricing}>
                      <b className={styles.s286}>$S 198</b>
                      <div className={styles.night}>/night</div>
                    </div>
                    <button className={styles.viewDetailsButton}>
                      <div className={styles.viewDetailsButtonChild} />
                      <div className={styles.searchFlights}>View Details</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.resultsCard1}>
                <img
                  className={styles.resultsImageIcon}
                  alt=""
                  src="/unsplashs6ch7n3eoqy2@2x.png"
                />
                <div className={styles.resultsDetails1}>
                  <div className={styles.resultsSumamry}>
                    <div className={styles.result}>
                      <b className={styles.freehandLosAngeles}>
                        The Westin Bonavent...
                      </b>
                      <div className={styles.bedInQuad}>1 King, City view</div>
                      <div className={styles.review1}>
                        <div className={styles.reviews1}>(1,002 reviews)</div>
                        <div className={styles.stars1}>
                          <div className={styles.div1}>4.1</div>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector11.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.priceAndCta1}>
                    <div className={styles.pricing}>
                      <b className={styles.s286}>$S 289</b>
                      <div className={styles.night}>/night</div>
                    </div>
                    <button className={styles.viewDetailsButton}>
                      <div className={styles.viewDetailsButtonChild} />
                      <div className={styles.searchFlights}>View Details</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.resultsCard}>
                <img
                  className={styles.resultsImageIcon}
                  alt=""
                  src="/unsplashs6ch7n3eoqy3@2x.png"
                />
                <div className={styles.resultsDetails}>
                  <div className={styles.resultsSumamry}>
                    <div className={styles.resultAndVideo}>
                      <div className={styles.kingBedStandard}>Deluxe King</div>
                      <b className={styles.holidayInnExpre}>
                        The Ritz-Carlton, L...
                      </b>
                      <div className={styles.review}>
                        <div className={styles.reviews}>(1,136 reviews)</div>
                        <div className={styles.stars}>
                          <div className={styles.div}>4.7</div>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector12.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.featureVideo}
                      onClick={openMatterhornPopup2}
                    >
                      <button
                        className={styles.group}
                        onClick={openMatterhornPopup1}
                      >
                        <img
                          className={styles.vectorIcon1}
                          alt=""
                          src="/vector13.svg"
                        />
                        <img
                          className={styles.vectorIcon2}
                          alt=""
                          src="/vector14.svg"
                        />
                      </button>
                    </div>
                  </div>
                  <div className={styles.priceAndCta}>
                    <div className={styles.pricing}>
                      <b className={styles.s286}>$S 286</b>
                      <div className={styles.night}>/night</div>
                    </div>
                    <button className={styles.viewDetailsButton}>
                      <div className={styles.viewDetailsButtonChild} />
                      <div className={styles.searchFlights}>View Details</div>
                    </button>
                  </div>
                </div>
              </div>
              <iframe
                className={styles.map}
                src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
              />
            </div>
            <iframe
              className={styles.map1}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
            />
          </div>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.newsletterFormSection}>
            <img
              className={styles.newsletterSectionBackground}
              alt=""
              src="/newsletter-section-background@2x.png"
            />
            <div className={styles.subscribeForm}>
              <div className={styles.formHeader}>
                <b className={styles.formTitleSubtext}>
                  subscribe to our newsletter
                </b>
                <b className={styles.formTitle}>Get weekly updates</b>
              </div>
              <form className={styles.form}>
                <div className={styles.formText}>
                  <div className={styles.fillInYour}>
                    Fill in your details to join the party!
                  </div>
                </div>
                <div className={styles.formFields}>
                  <div className={styles.formText}>
                    <TextField
                      className={styles.input}
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Your name"
                      size="medium"
                      margin="none"
                    />
                  </div>
                  <div className={styles.formText}>
                    <TextField
                      className={styles.input}
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Email address"
                      size="medium"
                      margin="none"
                    />
                  </div>
                </div>
                <button className={styles.button}>
                  <div className={styles.unstyledbutton}>
                    <div className={styles.button1}>submit</div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <footer className={styles.footer}>
            <div className={styles.fickleflightBio}>
              <img className={styles.logoIcon} alt="" src="/logo1.svg" />
              <div className={styles.fickleFlightIs}>
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </div>
              <img
                className={styles.socialIcons}
                alt=""
                src="/social-icons1.svg"
              />
            </div>
            <div className={styles.seperator} />
            <div className={styles.footerLinks}>
              <div className={styles.company}>
                <div className={styles.aboutUs}>About Us</div>
                <div className={styles.company1}>Company</div>
                <div className={styles.news}>News</div>
                <div className={styles.careers}>Careers</div>
                <div className={styles.howWeWork}>How we work</div>
              </div>
              <div className={styles.company}>
                <div className={styles.account}>Account</div>
                <div className={styles.support1}>Support</div>
                <div className={styles.supportCenter}>Support Center</div>
                <div className={styles.faq}>FAQ</div>
                <div className={styles.accessibility}>Accessibility</div>
              </div>
              <div className={styles.more}>
                <div className={styles.covidAdvisory}>Covid Advisory</div>
                <div className={styles.more1}>More</div>
                <div className={styles.airlineFees}>Airline Fees</div>
                <div className={styles.tips}>Tips</div>
                <div className={styles.howWeWork}>Quarantine Rules</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
      {isMatterhornPopup2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup2}
        >
          <MatterhornPopup onClose={closeMatterhornPopup2} />
        </PortalPopup>
      )}
      {isMatterhornPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup1}
        >
          <MatterhornPopup onClose={closeMatterhornPopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default HotelsPage;
