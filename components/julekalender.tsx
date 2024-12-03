import { getWeekdaysInDecember, getGiftGiver, getGiftReceiver } from '../utils/calendar-utils';
import { CalendarDay } from './calendar-day';

export function Julekalender() {
  const weekdays = getWeekdaysInDecember(2024);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Julekalender 2024</h1>
      <div className="grid grid-cols-5 gap-4">
        {weekdays.map((date, index) => (
          <CalendarDay 
            key={date.toISOString()} 
            date={date} 
            giftGiver={getGiftGiver(Math.floor(index / 5) + 1)}
            giftReceiver={getGiftReceiver(index)}
          />
        ))}
      </div>
    </div>
  );
}

