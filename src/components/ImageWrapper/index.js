import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageWrapper.module.scss";

const ImageWrapper = (props) => {
  const {
    children,
    width,
    height,
    borderRadius,
    onClick,
    title,
    tabIndex,
    style,
  } = props;
  const imageWrapperStyles = {
    ...style,
    width: width,
    height: height,
    borderRadius: borderRadius,
  };
  return (
    <div
      className={styles.image__container}
      style={imageWrapperStyles}
      onClick={onClick}
      title={title}
      tabIndex={tabIndex}
    >
      {children}
    </div>
  );
};

ImageWrapper.defaultProps = {
  width: "200px",
  height: "200px",
  borderRadius: "50%",
};

ImageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  borderRadius: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string,
  tabIndex: PropTypes.number,
};

export default ImageWrapper;
