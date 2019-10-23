import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ImageApi from "./ImageApi";

const Image = styled(({ data, className }) => {
  console.log(data);
  if (data.asset) {
    return (
      <figure className={className}>
        <ImageApi
          source={data.asset.sys && data.asset.sys.uri}
          altText={data.altText}
          width={600}
        />
        {data.caption && <figcaption>{data.caption}</figcaption>}
      </figure>
    );
  }
})`
  margin: 0;
  position: relative;
  img {
    width: 100%;
  }
  figcaption {
    font-size: 14px;
    width: 100%;
    padding: 10px 0;
  }
`;

Image.propTypes = {
  data: PropTypes.shape({
    asset: PropTypes.shape({
      sys: PropTypes.shape({
        uri: PropTypes.string
      })
    }),
    caption: PropTypes.string,
    altText: PropTypes.string
  }),
  className: PropTypes.string
};

export default Image;
