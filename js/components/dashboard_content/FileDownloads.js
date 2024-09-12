import React from "react";
import PropTypes from "prop-types";

import DownloadFileExtensionChart from "./DownloadFileExtensionChart";
import UsersWithFileDownloads from "./UsersWithFileDownloads";
import TotalFileDownloads from "./TotalFileDownloads";

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
        id="file-extension-downloads"
        className="desktop:grid-col-6 bar-chart-component"
      >
        <h4>Downloads by File Extension</h4>
        <DownloadFileExtensionChart dataHrefBase={dataHrefBase} maxItems={10} />
      </section>
      <section
        id="file-download-counts"
        className="desktop:grid-col-6 section__rate"
      >
        <section>
          <div className="grid-row">
            <h4 className="grid-col-12">Total File Downloads</h4>
          </div>
          <div className="grid-row">
            <span className="data grid-col-12">
              <TotalFileDownloads dataHrefBase={dataHrefBase} />
            </span>
          </div>
        </section>
        <section>
          <div className="grid-row">
            <h4 className="grid-col-12">Total Users with File Downloads</h4>
          </div>
          <div className="grid-row">
            <span className="data grid-col-12">
              <UsersWithFileDownloads dataHrefBase={dataHrefBase} />
            </span>
          </div>
        </section>
      </section>
    </>
  );
}

FileDownloads.propTypes = {
  dataHrefBase: PropTypes.string.isRequired,
};

export default FileDownloads;
