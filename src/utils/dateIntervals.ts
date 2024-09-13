/** @format */

import { momentId } from "./momentIndonesia";

const createDateIntervals = (startDaysAgo: number, endDaysAhead: number) => {
  const startDate = momentId().subtract(startDaysAgo, "days").toDate();
  const endDate = momentId().add(endDaysAhead, "days").toDate();

  return [{ start: startDate, end: endDate }];
};

export default createDateIntervals;
