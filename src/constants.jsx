import React from 'react';

// Defaults
export const SIZE_PER_PAGE = 10;
export const NO_DATA_INDICATOR = 'There is no data to display';
export const REQUEST_HEADERS = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
};
export const DEFAULT_ERROR = () => (
  <div className="status_message offline">
    <p>The table failed to initialise. Please check you are connected to the internet and try again.</p>
  </div>
);

// Dates
export const DISPLAY_DATE_FORMAT = 'DD/MM/YYYY';
export const ISO_8601_DATE_FORMAT = 'YYYY-MM-DD';
export const ISO_8601_DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

// Sorting
const SORT_ASC = 'asc';
const SORT_DESC = 'desc';
export const SORT_TYPES = [SORT_ASC, SORT_DESC];
