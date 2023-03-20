import type { NextPage } from "next";
import { useState, useCallback } from "react";
import {
  Autocomplete,
  TextField,
  Icon,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useRouter } from "next/router";
import styles from "./results-page.module.css";

const ResultsPage: NextPage = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState<string | null>(null);
  const router = useRouter();

  const onFickleflightLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onExploreTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onHotelsTextClick = useCallback(() => {
    router.push("/hotels-page");
  }, [router]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.resultsPage}>
        <header className={styles.topHeader}>
          <div className={styles.topContainer}>
            <button
              className={styles.fickleflightLogo}
              onClick={onFickleflightLogoClick}
            >
              <img className={styles.symbolsIcon} alt="" src="/symbols1.svg" />
            </button>
            <div className={styles.navigationRight}>
              <div className={styles.navigationMenu}>
                <div className={styles.explore} onClick={onExploreTextClick}>
                  Explore
                </div>
                <button className={styles.search}>Search</button>
                <div className={styles.explore} onClick={onHotelsTextClick}>
                  Hotels
                </div>
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
                  src="/notification1.svg"
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
        <div className={styles.searchFormSection}>
          <div className={styles.searchContainer}>
            <div className={styles.bannerGradient} />
            <img
              className={styles.bannerBackgroundIcon}
              alt=""
              src="/banner-background1@2x.png"
            />
            <div className={styles.searchSection}>
              <div className={styles.title}>
                <div className={styles.whereAreYou}>Where are you off too?</div>
              </div>
              <div className={styles.searchForm}>
                <div className={styles.inputsRow}>
                  <div className={styles.inputGroup}>
                    <Autocomplete
                      className={styles.departureField}
                      disablePortal
                      options={[
                        "Singapore (SIN)",
                        "Sydney (SYD)",
                        "Siem Reap (REP)",
                        "Shanghai (PVG)Sanya (SYX)",
                      ]}
                      renderInput={(params: any) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="Departure"
                          variant="outlined"
                          placeholder=""
                          helperText=""
                        />
                      )}
                      defaultValue="Singapore -  Changi (SIN)"
                      size="medium"
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <Autocomplete
                      className={styles.departureField}
                      sx={{ width: "100%" }}
                      disablePortal
                      options={[
                        "Clark (CRK)",
                        "Launceston (LST)",
                        "Kalibo (KLO)",
                        "Colombo CMB",
                        "Melbourne (AVV)",
                        "Los Angeles (LA)",
                      ]}
                      renderInput={(params: any) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="Arrival"
                          variant="outlined"
                          placeholder=""
                          helperText=""
                        />
                      )}
                      defaultValue="Los Angeles (LA)"
                      size="medium"
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <div className={styles.departureField}>
                      <DatePicker
                        label="Date"
                        value={dateFieldDateTimePickerValue}
                        onChange={(newValue: any) => {
                          setDateFieldDateTimePickerValue(newValue);
                        }}
                        renderInput={(params: any) => (
                          <TextField
                            {...params}
                            color="primary"
                            variant="outlined"
                            size="medium"
                            renderInput={{ placeholder: "01/05/2022" }}
                            helperText=""
                            fullWidth
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.buttonGroup}>
                  <button className={styles.searchFlightsButton}>
                    <div className={styles.button}>Search flights</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.searchResults}>
          <div className={styles.searchFilters}>
            <div className={styles.resultsSummary}>
              <div className={styles.resultsParent}>
                <div className={styles.results}>10 out of 177 Results</div>
                <img className={styles.frameChild} alt="" src="/vector-2.svg" />
              </div>
            </div>
            <div className={styles.stops}>
              <b className={styles.results1}>Stops</b>
              <FormControlLabel
                className={styles.component1formcheckbox}
                label="1 Stop"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
              <FormControlLabel
                className={styles.component1formcheckbox1}
                label="2 Stops"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
            </div>
            <div className={styles.bookingOptions}>
              <b className={styles.results2}>Booking Options</b>
              <FormControlLabel
                className={styles.component1formcheckbox}
                label="Book on Fickleflight"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
              <FormControlLabel
                className={styles.component1formcheckbox1}
                label="Official Airline Websites"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
            </div>
            <div className={styles.flightExperience}>
              <b className={styles.results3}>Flight Experience</b>
              <FormControlLabel
                className={styles.component1formcheckbox}
                label="No overnight flights"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className={styles.component1formcheckbox1}
                label="No long stop-overs"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
            </div>
            <img className={styles.frameChild} alt="" src="/vector-2.svg" />
            <div className={styles.airlines}>
              <b className={styles.results4}>Airlines</b>
              <FormControlLabel
                className={styles.component1formcheckbox}
                label="Singapore Airlines"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className={styles.component1formcheckbox1}
                label="Qatar Airways"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
            </div>
          </div>
          <div className={styles.resultsSection}>
            <div className={styles.flightCards}>
              <div className={styles.results5}>10 out of 177 Results</div>
              <div className={styles.flightCard}>
                <div className={styles.airlineSection}>
                  <img
                    className={styles.turkishIcon}
                    alt=""
                    src="/turkish.svg"
                  />
                  <div className={styles.singaporeAirlines}>
                    Turkish Airlines
                  </div>
                </div>
                <div className={styles.flightDetailsSection}>
                  <div className={styles.departureDetails}>
                    <div className={styles.am}>11:35 PM</div>
                    <div className={styles.sin}>SIN</div>
                  </div>
                  <div className={styles.flightduration}>
                    <img
                      className={styles.flighticon}
                      alt=""
                      src="/flighticon.svg"
                    />
                    <div className={styles.h55mNonStop}>33H 10M, 1-stop</div>
                  </div>
                  <div className={styles.arrivalDetails}>
                    <div className={styles.am}>4:45 PM</div>
                    <div className={styles.sin1}>LAX</div>
                  </div>
                </div>
                <div className={styles.priceSection}>
                  <img
                    className={styles.priceSectionChild}
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className={styles.s730}>S$ 723</b>
                </div>
              </div>
              <div className={styles.flightCard}>
                <div className={styles.airlineSection}>
                  <img className={styles.turkishIcon} alt="" src="/sia.svg" />
                  <div className={styles.singaporeAirlines}>
                    Singapore Airlines
                  </div>
                </div>
                <div className={styles.flightDetailsSection}>
                  <div className={styles.departureDetails}>
                    <div className={styles.am}>8:45 PM</div>
                    <div className={styles.sin}>SIN</div>
                  </div>
                  <div className={styles.flightduration1}>
                    <img
                      className={styles.flighticon1}
                      alt=""
                      src="/flighticon.svg"
                    />
                    <div className={styles.h55mNonStop}>15H 10M, 2-stops</div>
                  </div>
                  <div className={styles.arrivalDetails}>
                    <div className={styles.am}>7:55 PM</div>
                    <div className={styles.sin1}>LAX</div>
                  </div>
                </div>
                <div className={styles.priceSection}>
                  <img
                    className={styles.priceSectionChild}
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className={styles.s730}>S$ 900</b>
                </div>
              </div>
              <div className={styles.flightCard}>
                <div className={styles.airlineSection}>
                  <img className={styles.japanIcon} alt="" src="/japan.svg" />
                  <div className={styles.singaporeAirlines}>Japan Airlines</div>
                </div>
                <div className={styles.flightDetailsSection}>
                  <div className={styles.departureDetails}>
                    <div className={styles.am}>8:20 PM</div>
                    <div className={styles.sin}>SIN</div>
                  </div>
                  <div className={styles.flightduration}>
                    <img
                      className={styles.flighticon}
                      alt=""
                      src="/flighticon.svg"
                    />
                    <div className={styles.h55mNonStop}>17H 30M, 1-stop</div>
                  </div>
                  <div className={styles.arrivalDetails}>
                    <div className={styles.am}>9:50 PM</div>
                    <div className={styles.sin1}>LAX</div>
                  </div>
                </div>
                <div className={styles.priceSection}>
                  <img
                    className={styles.priceSectionChild}
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className={styles.s730}>S$ 859</b>
                </div>
              </div>
              <div className={styles.flightCard}>
                <div className={styles.airlineSection}>
                  <img className={styles.japanIcon} alt="" src="/ana.svg" />
                  <div className={styles.singaporeAirlines}>ANA</div>
                </div>
                <div className={styles.flightDetailsSection}>
                  <div className={styles.departureDetails}>
                    <div className={styles.am}>6:35 PM</div>
                    <div className={styles.sin}>SIN</div>
                  </div>
                  <div className={styles.flightduration}>
                    <img
                      className={styles.flighticon}
                      alt=""
                      src="/flighticon.svg"
                    />
                    <div className={styles.h55mNonStop}>19H 15M, 1-stop</div>
                  </div>
                  <div className={styles.arrivalDetails}>
                    <div className={styles.am}>9:50 PM</div>
                    <div className={styles.sin1}>LAX</div>
                  </div>
                </div>
                <div className={styles.priceSection}>
                  <img
                    className={styles.priceSectionChild}
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className={styles.s730}>S$ 936</b>
                </div>
              </div>
              <div className={styles.flightCard}>
                <div className={styles.airlineSection}>
                  <img
                    className={styles.americanAirlinesIcon}
                    alt=""
                    src="/americanairlines.svg"
                  />
                  <div className={styles.singaporeAirlines}>
                    American Airlines
                  </div>
                </div>
                <div className={styles.flightDetailsSection}>
                  <div className={styles.departureDetails}>
                    <div className={styles.am}>8:20 PM</div>
                    <div className={styles.sin}>SIN</div>
                  </div>
                  <div className={styles.flightduration}>
                    <img
                      className={styles.flighticon}
                      alt=""
                      src="/flighticon.svg"
                    />
                    <div className={styles.h55mNonStop}>17H 30M, 1-stop</div>
                  </div>
                  <div className={styles.arrivalDetails}>
                    <div className={styles.am}>9:50 PM</div>
                    <div className={styles.sin1}>LAX</div>
                  </div>
                </div>
                <div className={styles.priceSection}>
                  <img
                    className={styles.priceSectionChild}
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className={styles.s730}>S$ 936</b>
                </div>
              </div>
              <div className={styles.flightCard}>
                <div className={styles.airlineSection}>
                  <img
                    className={styles.turkishIcon}
                    alt=""
                    src="/turkish.svg"
                  />
                  <div className={styles.singaporeAirlines}>
                    Turkish Airlines
                  </div>
                </div>
                <div className={styles.flightDetailsSection}>
                  <div className={styles.departureDetails}>
                    <div className={styles.am}>11:35 PM</div>
                    <div className={styles.sin}>SIN</div>
                  </div>
                  <div className={styles.flightduration}>
                    <img
                      className={styles.flighticon}
                      alt=""
                      src="/flighticon.svg"
                    />
                    <div className={styles.h55mNonStop}>33H 10M, 1-stop</div>
                  </div>
                  <div className={styles.arrivalDetails}>
                    <div className={styles.am}>4:45 PM</div>
                    <div className={styles.sin1}>LAX</div>
                  </div>
                </div>
                <div className={styles.priceSection}>
                  <img
                    className={styles.priceSectionChild}
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className={styles.s730}>S$ 673</b>
                </div>
              </div>
              <div className={styles.flightCard}>
                <div className={styles.airlineSection}>
                  <img className={styles.japanIcon} alt="" src="/japan1.svg" />
                  <div className={styles.singaporeAirlines}>Japan Airlines</div>
                </div>
                <div className={styles.flightDetailsSection}>
                  <div className={styles.departureDetails}>
                    <div className={styles.am}>10:25 PM</div>
                    <div className={styles.sin}>SIN</div>
                  </div>
                  <div className={styles.flightduration}>
                    <img
                      className={styles.flighticon}
                      alt=""
                      src="/flighticon.svg"
                    />
                    <div className={styles.h55mNonStop}>26H 45M, 1-stop</div>
                  </div>
                  <div className={styles.arrivalDetails}>
                    <div className={styles.am}>9:10 AM</div>
                    <div className={styles.sin1}>LAX</div>
                  </div>
                </div>
                <div className={styles.priceSection}>
                  <img
                    className={styles.priceSectionChild}
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className={styles.s730}>S$ 859</b>
                </div>
              </div>
              <button className={styles.primaryButton}>
                <div className={styles.primaryButtonChild} />
                <div className={styles.searchFlights}>Show more results</div>
              </button>
            </div>
            <div className={styles.recentlyBooked}>
              <div className={styles.recentlyBookedTitle}>
                <b className={styles.formTitleSubtext}>Recently booked</b>
                <img
                  className={styles.recentlyBookedTitleChild}
                  alt=""
                  src="/vector-21.svg"
                />
              </div>
              <div className={styles.bookingCards}>
                <div className={styles.bookingCard}>
                  <div className={styles.airlinePrice}>
                    <div className={styles.airline}>
                      <img
                        className={styles.airlinelogoIcon}
                        alt=""
                        src="/icon.svg"
                      />
                      <div className={styles.flightclass}>
                        Singapore Airlines
                      </div>
                    </div>
                    <div className={styles.price}>$1128</div>
                  </div>
                  <div className={styles.locations}>
                    <div className={styles.departure}>
                      <div className={styles.depcode}>SIN</div>
                      <div className={styles.depname}>Singapore</div>
                    </div>
                    <img
                      className={styles.flightIcon}
                      alt=""
                      src="/flight-icon.svg"
                    />
                    <div className={styles.arrival}>
                      <div className={styles.depcode}>LAX</div>
                      <div className={styles.arrname}>Los Angeles</div>
                    </div>
                  </div>
                  <div className={styles.details}>
                    <div className={styles.class}>
                      <img
                        className={styles.classIcon}
                        alt=""
                        src="/class-icon.svg"
                      />
                      <div className={styles.flightclass}>Economy</div>
                    </div>
                    <div className={styles.class}>
                      <img
                        className={styles.classIcon}
                        alt=""
                        src="/calender.svg"
                      />
                      <div className={styles.flightclass}>2 Adults</div>
                    </div>
                  </div>
                  <div className={styles.provider}>
                    <div className={styles.flightclass}>
                      <span>{`Booked on `}</span>
                      <span className={styles.expedia}>Expedia</span>
                    </div>
                    <div className={styles.timeago}>1s ago!</div>
                  </div>
                </div>
                <div className={styles.bookingCard}>
                  <div className={styles.airlinePrice}>
                    <div className={styles.airline}>
                      <img
                        className={styles.airlinelogoIcon}
                        alt=""
                        src="/icon1.svg"
                      />
                      <div className={styles.flightclass}>
                        American Airlines
                      </div>
                    </div>
                    <div className={styles.price}>$1024</div>
                  </div>
                  <div className={styles.locations}>
                    <div className={styles.departure}>
                      <div className={styles.depcode}>SFO</div>
                      <div className={styles.depname}>San Francisco</div>
                    </div>
                    <img
                      className={styles.flightIcon}
                      alt=""
                      src="/flight-icon.svg"
                    />
                    <div className={styles.arrival}>
                      <div className={styles.depcode}>SIN</div>
                      <div className={styles.arrname}>Singapore</div>
                    </div>
                  </div>
                  <div className={styles.details}>
                    <div className={styles.class}>
                      <img
                        className={styles.classIcon}
                        alt=""
                        src="/class-icon.svg"
                      />
                      <div className={styles.flightclass}>First Class</div>
                    </div>
                    <div className={styles.class}>
                      <img
                        className={styles.classIcon}
                        alt=""
                        src="/calender1.svg"
                      />
                      <div className={styles.flightclass}>1 Adults</div>
                    </div>
                  </div>
                  <div className={styles.provider}>
                    <div className={styles.flightclass}>
                      <span>{`Booked on `}</span>
                      <span className={styles.expedia}>Kayak</span>
                    </div>
                    <div className={styles.timeago}>2s ago!</div>
                  </div>
                </div>
                <div className={styles.bookingCard}>
                  <div className={styles.airlinePrice}>
                    <div className={styles.airline}>
                      <img
                        className={styles.airlinelogoIcon}
                        alt=""
                        src="/icon2.svg"
                      />
                      <div className={styles.flightclass}>Japan Airlines</div>
                    </div>
                    <div className={styles.price}>$2996</div>
                  </div>
                  <div className={styles.locations}>
                    <div className={styles.departure}>
                      <div className={styles.depcode}>PHX</div>
                      <div className={styles.depname}>Phoenix</div>
                    </div>
                    <img
                      className={styles.flightIcon}
                      alt=""
                      src="/flight-icon.svg"
                    />
                    <div className={styles.arrival}>
                      <div className={styles.depcode}>DXB</div>
                      <div className={styles.depname}>Dubai</div>
                    </div>
                  </div>
                  <div className={styles.details}>
                    <div className={styles.class}>
                      <img
                        className={styles.classIcon}
                        alt=""
                        src="/class-icon.svg"
                      />
                      <div className={styles.flightclass}>Economy</div>
                    </div>
                    <div className={styles.class}>
                      <img
                        className={styles.classIcon}
                        alt=""
                        src="/calender2.svg"
                      />
                      <div className={styles.flightclass}>3 Adults</div>
                    </div>
                  </div>
                  <div className={styles.provider}>
                    <div className={styles.flightclass}>
                      <span>{`Booked on `}</span>
                      <span className={styles.expedia}>Skyscanner</span>
                    </div>
                    <div className={styles.timeago}>3s ago!</div>
                  </div>
                </div>
                <div className={styles.showMore}>
                  <div className={styles.flightclass}>Show more</div>
                  <img
                    className={styles.classIcon}
                    alt=""
                    src="/icon--back.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.formText}>
            <div className={styles.newsletterFormSection}>
              <img
                className={styles.newsletterSectionBackground}
                alt=""
                src="/newsletter-section-background1@2x.png"
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
                  <button className={styles.button1}>
                    <div className={styles.unstyledbutton}>
                      <div className={styles.button2}>submit</div>
                    </div>
                  </button>
                </form>
              </div>
            </div>
            <footer className={styles.footer}>
              <div className={styles.fickleflightBio}>
                <img className={styles.logoIcon} alt="" src="/logo2.svg" />
                <div className={styles.fickleFlightIs}>
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <img
                  className={styles.socialIcons}
                  alt=""
                  src="/social-icons2.svg"
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
      </div>
    </LocalizationProvider>
  );
};

export default ResultsPage;
