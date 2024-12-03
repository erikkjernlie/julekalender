export function isWeekday(date: Date): boolean {
  const day = date.getDay();
  return day !== 0 && day !== 6;
}

export function getWeekdaysInDecember(year: number = 2024): Date[] {
  const december = new Date(year, 11, 2); // Start from December 2nd
  const weekdays = [];
  while (december.getMonth() === 11 && december.getDate() <= 20) {
    if (isWeekday(december)) {
      weekdays.push(new Date(december));
    }
    december.setDate(december.getDate() + 1);
  }
  return weekdays;
}

const giftGivers = ["Erik", "Fredrik", "Markus"];
const giftReceivers = ["Fredrik", "Erik", "Markus", "Oliver", "Jørgen"];

export function getGiftGiver(weekNumber: number): string {
  return giftGivers[(weekNumber - 1) % giftGivers.length];
}

export function getGiftReceiver(dayIndex: number): string {
  return giftReceivers[dayIndex % giftReceivers.length];
}

export function isDateBeforeToday(date: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
}

