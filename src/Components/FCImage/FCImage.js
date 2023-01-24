import React, {useState} from 'react';
import {FCText} from '../FCText/FCText';

import './FCImage.scss';

function FCImage({
    src,
    alt,
    placeholder,
    width = "100%",
    textPosition = "bottom-right",
    textOnImage = "",
    textProps,
    ...rest
  }) {
  return (
    <div className="fc--service-card-image-container">
        {!loaded && (
          <img
            width={width}
            height="100%"
            src={placeholder}
            alt="placeholder"
            onError={(event) => {
              event.target.src = placeholder;
              event.onerror = null;
            }}
            {...rest}
          />
        )}
        <img
          width={width}
          height="100%"
          src={src}
          alt={alt}
          onError={(event) => {
            event.target.src = placeholder;
            event.onerror = null;
          }}
          style={!loaded ? { display: "none" } : {}}
          onLoad={() => setLoaded(true)}
          {...rest}
        />
        {textOnImage && (
          <FCText
            primary
            {...textProps}
            className={`fae--image-text ${textPosition}`}
            bold
          >
            {textOnImage}
          </FCText>
        )}
      </div>
  )
}

export default FCImage
