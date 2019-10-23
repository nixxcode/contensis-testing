/* eslint-disable no-unused-expressions */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// * Make Parameters URL friendly
const serialize = params => {
  let query =
    "?" +
    Object.keys(params)
      .filter(val => !!params[val])
      .map(function(prop) {
        return [prop, params[prop]].join("=");
      })
      .join("&");
  return query;
};

// * Build srcset of images based on multiplication
const srcResolution = (source, params, resolutions) => {
  if (Array.isArray(resolutions)) {
    let srcSet = [`${source}${serialize(params)} `];
    resolutions.map(size => {
      const newParams = params;
      newParams.h ? (newParams.h = newParams.h * size) : null;
      newParams.w ? (newParams.w = newParams.w * size) : null;
      srcSet.push(source + serialize(newParams) + " " + size + "x");
    });
    return srcSet.join(",");
  } else {
    return null;
  }
};

const normalizeParams = params => {
  return {
    fit: params.fit,
    bg: params.bg || params.background,
    r: params.r || params.rotate,
    q: params.q || params.quality,
    w: params.w || params.width,
    h: params.h || params.height,
    crop: params.c || params.crop,
    flip: params.flip,
    e: params.e || params.effect,
    b: params.b || params.blur,
    f: params.f || params.format
  };
};

const sourceParams = source => {
  if (source && source.includes("?")) {
    const urlArr = source.split("?");
    const urlPath = urlArr[0];
    const paramsArr = urlArr[1].split("&");

    let params = {};

    paramsArr.forEach(query => {
      const q = query.split("=");
      params[q[0]] = q[1];
    });

    return [urlPath, normalizeParams(params)];
  }
  return [source];
};

const cleanObj = obj => {
  let newObj = obj;
  Object.keys(newObj).forEach(
    key => newObj[key] === undefined && delete newObj[key]
  );
  return newObj;
};

const getUrl = props => {
  const sourceArr = sourceParams(props.source);
  const url = sourceArr[0];
  const sourceParamsObj = sourceArr[1] ? sourceArr[1] : {};

  const propsParamsObj = {
    fit: props.fit, //Fit type - contain | crop-l | crop-r | crop-t | crop-b | stretch | fill [requires bg]
    bg: props.background,
    r: props.rotation, //Rotation [Number] 0-360 degrees
    q: props.quality, //Quality [Number] 1-100
    w: props.width, //Width [Number] px
    h: props.height, //Heigh [Number] px
    crop: props.crop, // Crop size [Number] and location [Region] or [Coordinates x,y] - tl | t | tr | l | c | r | bl | b | br
    flip: props.flip, // Flip direction - vertical/v | horizontal/h | both/b
    e: props.effect, // Effect - grayscale
    b: props.blur, // Blur - [Number 0-100]
    f: props.format // Format - png | jpg | webp |
  };

  const params = Object.assign({}, propsParamsObj, cleanObj(sourceParamsObj));

  return { url: url, params: params };
};

const ImageApi = styled(props => {
  const sourceData = getUrl(props);
  const imgUrl = sourceData.url;
  const params = sourceData.params;
  const widthOveride = props.widthOveride ? "&w=" + props.widthOveride : "";

  return (
    <>
      {props.isBackground ? (
        <div
          className={props.className}
          style={{
            backgroundImage: `url(${imgUrl + serialize(params) + widthOveride})`
          }}
        >
          {props.children}
        </div>
      ) : (
        <img
          alt={props.altText}
          src={imgUrl + serialize(params)}
          srcSet={
            props.resolution && srcResolution(imgUrl, params, props.resolution)
          }
          className={props.className}
        />
      )}
    </>
  );
})`
  ${({ isBackground }) =>
    isBackground &&
    `
		background-size: cover;
		background-position: center center;
		background-repeat: no-repeat;
  `};
`;

ImageApi.propTypes = {
  source: PropTypes.string.isRequired,
  altText: PropTypes.string,
  resolution: PropTypes.array,
  className: PropTypes.string,
  width: PropTypes.number, //Width [Number] px
  height: PropTypes.number, //Heigh [Number] px
  fit: PropTypes.string, //Fit type - contain | crop-l | crop-r | crop-t | crop-b | stretch | fill [requires bg]
  background: PropTypes.string,
  rotation: PropTypes.number, //Rotation [Number] 0-360 degrees
  quality: PropTypes.number, //Quality [Number] 1-100
  crop: PropTypes.string, // Crop size [Number] and location [Region] or [Coordinates x,y] - tl | t | tr | l | c | r | bl | b | br
  flip: PropTypes.string, // Flip direction - vertical/v | horizontal/h | both/b
  effect: PropTypes.string, // Effect - grayscale
  blur: PropTypes.number, // Blur - [Number 0-100]
  format: PropTypes.string,
  widthOveride: PropTypes.number
};

ImageApi.defaultProps = {
  quality: 70, //Reduce global size
  format: "webp" //Set base format
};

export default ImageApi;
