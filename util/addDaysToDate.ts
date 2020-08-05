export function addDaysToDate(date: string, days: number): Date {
  let newDate = new Date(date);
  newDate.setTime(newDate.getTime() + days * 86400000);

  return newDate;
}
