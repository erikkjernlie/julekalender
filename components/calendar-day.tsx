"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Gift } from "lucide-react";
import { useState } from "react";
import { isDateBeforeToday } from "../utils/calendar-utils";

interface CalendarDayProps {
  date: Date;
  giftGiver: string;
  giftReceiver: string;
}

export function CalendarDay({
  date,
  giftGiver,
  giftReceiver,
}: CalendarDayProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isPast = isDateBeforeToday(date);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={`w-full h-24 sm:h-32 flex flex-col items-center justify-center
                      ${
                        isPast
                          ? "opacity-50 cursor-not-allowed bg-gray-200"
                          : "bg-red-100 hover:bg-green-100"
                      }
                      border-2 border-red-500 rounded-lg shadow-md transition-all duration-300 ease-in-out
                      transform hover:scale-105`}
          disabled={isPast}
        >
          <span className="text-2xl font-bold text-red-700">
            {date.getDate()}
          </span>
          <Gift
            className={`mt-2 ${isPast ? "text-gray-400" : "text-green-600"}`}
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-red-50 border-2 border-red-500">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl text-red-700">
            {date.toLocaleDateString("no-NO", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </DialogTitle>
        </DialogHeader>
        <p className="text-center text-lg">
          I dag gir{" "}
          <span className="font-bold text-green-700">{giftGiver}</span> en gave
          til <span className="font-bold text-red-700">{giftReceiver}</span>!
        </p>
      </DialogContent>
    </Dialog>
  );
}
