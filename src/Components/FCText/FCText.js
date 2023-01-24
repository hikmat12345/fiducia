import React from 'react';
import './FCText.scss';

function FCText({
    heading,
    subHeading,
    children,
    primary,
    secondary,
    tertiary,
    bold = "",
    paragraph,
    className = "",
    important,
    light,
    ...rest
  }) {
    const textType = heading
    ? "heading"
    : subHeading
    ? "sub-heading"
    : paragraph
    ? "paragraph"
    : "";
  const textColor = primary
    ? "primary-text-color"
    : secondary
    ? "secondar-text-color"
    : tertiary
    ? "tertiary-text-color"
    : "";
  return (
    <>
      <p
        className={`fc--text ${className} ${textType} ${textColor} ${
          bold && "bold"
        } ${light && "light"}`}
        {...rest}
      >
        {children} {important && <span className="error">*</span>}
      </p>
    </>
  )
}

export default FCText
