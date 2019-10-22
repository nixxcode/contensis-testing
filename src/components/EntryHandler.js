import React, { useEffect } from "react";
import { connect } from "react-redux";

import { loadEntries } from "../actions";
import NotFound from "./NotFound";
import ContentPage from "./ContentPage";

const EntryHandler = ({ entries, contentLoaded, loadEntries }) => {
  let path = window.location.pathname;
  path = path[0] === "/" ? path.substr(1) : path;

  useEffect(() => {
    loadEntries();
  }, []);

  if (!contentLoaded) return <div>Please wait...</div>;

  //console.log(entries);

  // Search for correct entry based on slug
  const entry = entries.filter(ent => ent.sys.slug === path)[0];
  if (entry == null) return <NotFound />;

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
    entries: state.entries,
    contentLoaded: state.entries != null
  };
};

export default connect(
  mapStateToProps,
  { loadEntries }
)(EntryHandler);
