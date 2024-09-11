import React from "react";
import PropTypes from "prop-types";

import DownloadFileExtensionChart from "./DownloadFileExtensionChart";

/**
 * Contains charts and other data visualizations for the file downloads
 * section of the site. This component is mainly laying out the structure for
 * the section and passes props necessary for getting data and displaying
 * visualizations to child components.
 *
 * @param {object} props the properties for the component
 * @param {string} props.dataHrefBase the URL of the base location of the data
 * to be downloaded including the agency path. In production this is proxied and
 * redirected to the S3 bucket URL.
 * @returns {import('react').ReactElement} The rendered element
 */
function FileDownloads({ dataHrefBase }) {
  return (
    <>
      <section
        id="file_extension_downloads"
        className="desktop:grid-col-6 bar-chart-component"
      >
        <h4>Downloads by File Extension</h4>
        <DownloadFileExtensionChart dataHrefBase={dataHrefBase} maxItems={10} />
      </section>
    </>
  );
}

FileDownloads.propTypes = {
  dataHrefBase: PropTypes.string.isRequired,
};

export default FileDownloads;
