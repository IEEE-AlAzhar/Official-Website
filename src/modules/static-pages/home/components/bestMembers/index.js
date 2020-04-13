import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getBestMembers } from "./../../services/members.service";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export class BestMembers extends Component {
  state = {
    bestMembers: null,
  };

  componentDidMount() {
    getBestMembers().then((response) => {
      this.setState({
        bestMembers: response.data,
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
      <section className={styles["best-members_section"]}>
        <h2 className={styles["best-members-section_heading"]}>BEST MEMBERS</h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {this.state.bestMembers ? (
            this.state.bestMembers.map((member) => {
              return (
                <div className={styles["best-members"]}>
                  <img alt="Best members IEEE" src={member.image} />
                  <p className={styles["best-members_name"]}>{member.name}</p>
                  <p className={styles["best-members_committee"]}>
                    {member.committee}
                  </p>
                </div>
              );
            })
          ) : (
            <p>Loading ...</p>
          )}
        </Carousel>
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
      {" "}
      <FontAwesomeIcon icon={faChevronRight} />
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
    </button>
  );
};

export default BestMembers;
