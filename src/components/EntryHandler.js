import React, { useEffect } from "react";
import { connect } from "react-redux";

import { loadEntry } from "../actions";
import NotFound from "./NotFound";
import ContentPage from "./ContentPage";

const EntryHandler = ({ entry, contentLoaded, loadEntry }) => {
  let path = window.location.pathname;
  path = path[0] === "/" ? path.substr(1) : path;

  useEffect(() => {
    //console.log(path);
    loadEntry(path);
  }, []);

  if (!contentLoaded) return <div>Please wait...</div>;

  //console.log(entry);
  if (Object.keys(entry).length === 0 && entry.constructor === Object)
    return <NotFound />;

  let entryJSX = null;
  switch (entry.sys.contentTypeId) {
    case "contentPage":
      entryJSX = <ContentPage entry={entry} />;
      break;
    default:
      entryJSX = <NotFound message="Wrong Content Type" />;
  }

  return entryJSX;
};

const mapStateToProps = state => {
  return {
    entry: state.entry,
    contentLoaded: state.entry != null
  };
};

export default connect(
  mapStateToProps,
  { loadEntry }
)(EntryHandler);
