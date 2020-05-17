import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BestMembersService from "./../../services/members.service";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Loading from "shared/loading";
// import LazyImage from "shared/lazy-image";
import placeholder from "assets/images/placeholder.png";

export class BestMembers extends Component {
  state = {
    bestMembers: null,
  };

  constructor(props) {
    super(props);
    this._bestMembersService = new BestMembersService();
  }

  componentDidMount() {
    this._bestMembersService.list().then((response) => {
      this.setState({
        bestMembers: response,
      });
    });
  }

  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    return (
      <section className={`${styles["best-members_section"]}`}>
        <h2 className="section_heading">our best members</h2>
        {this.state.bestMembers ? (
          <Carousel
            responsive={responsive}
            infinite={true}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
          >
            {this.state.bestMembers.map((member) => {
              return (
                <figure className={styles["best-members"]} key={member._id}>
                  <img
                    width="200"
                    height="200"
                    alt={`One of ${member.committee} committee best members`}
                    src={member.image || placeholder}
                  />
                  <figcaption>
                    <h3 className={styles["best-members_name"]}>
                      {member.name}
                    </h3>
                    <p className={styles["best-members_committee"]}>
                      {member.committee}
                    </p>
                  </figcaption>
                </figure>
              );
            })}
          </Carousel>
        ) : (
          <div className="container w-50 text-center">
            <Loading title="Loading Best Members ..." />
          </div>
        )}
      </section>
    );
  }
}

const CustomRightArrow = ({ onClick, ...rest }) => {
  return (
    <button
      className={`${styles["best-members-arrow"]} ${styles["best-members-arrow_right"]}`}
      onClick={() => onClick()}
    >
      <FontAwesomeIcon icon={faChevronRight} />
      <span className="sr-only"> Slide right controller </span>
    </button>
  );
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  return (
    <button
      className={`${styles["best-members-arrow"]} ${styles["best-members-arrow_left"]}`}
      onClick={() => onClick()}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
      <span className="sr-only"> Slide left controller </span>
    </button>
  );
};

export default BestMembers;
