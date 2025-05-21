
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ReportHeaderProps {
  companyName: string;
  reserveRatio: string;
  reportDate: string;
  onTabChange?: (tab: string) => void;
}

export function ReportHeader({ companyName, reserveRatio, reportDate, onTabChange }: ReportHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(reportDate);
  
  const datesOptions = [
    "May 06, 2025",
    "April 06, 2025",
    "March 06, 2025",
    "February 06, 2025",
    "January 06, 2025",
  ];

  const handleTabChange = (value: string) => {
    if (onTabChange) {
      onTabChange(value);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Proof of Reserves</h1>
        
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-4 py-2 text-sm bg-secondary rounded-md"
          >
            {selectedDate} <ChevronDown size={16} className="ml-2" />
          </button>
          
          {isOpen && (
            <div className="absolute right-0 mt-1 bg-card border rounded-md shadow-lg z-10 w-44">
              {datesOptions.map((date) => (
                <button
                  key={date}
                  className="block w-full text-left px-4 py-2 hover:bg-secondary text-sm"
                  onClick={() => {
                    setSelectedDate(date);
                    setIsOpen(false);
                  }}
                >
                  {date}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6 bg-gradient-to-b from-background to-secondary/30">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4 md:mb-0">
            <Avatar className="w-16 h-16 rounded-full overflow-hidden">
              <AvatarImage 
                src="https://www.scenium.io/_image?href=%2F_astro%2Fscenium.wuHdhx7C.png&w=162&h=43&f=webp" 
                alt={companyName}
                className="object-contain" 
              />
              <AvatarFallback className="bg-gray-100 dark:bg-gray-700 text-xl font-bold">
                {companyName.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            
            <div className="text-center md:text-left">
              <p className="text-xl font-medium text-gray-700 dark:text-gray-300">{companyName}</p>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{reserveRatio}</h2>
              <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                <p className="text-sm font-medium">100% Reserve Compliance</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-4">
              Fact Finance Proof of Reserves Service
            </p>
            <Tabs defaultValue="balanco" className="w-auto" onValueChange={handleTabChange}>
              <TabsList className="bg-secondary/80">
                <TabsTrigger value="balanco" className="text-sm">
                  Balanço
                </TabsTrigger>
                <TabsTrigger value="reserves" className="text-sm">
                  Reserves
                </TabsTrigger>
                <TabsTrigger value="circulation" className="text-sm">
                  Circulation
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
