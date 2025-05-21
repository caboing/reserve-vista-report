
import { useState } from "react";
import { Check, ChevronDown, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

interface ReportHeaderProps {
  companyName: string;
  reserveRatio: string;
  reportDate: string;
}

export function ReportHeader({ companyName, reserveRatio, reportDate }: ReportHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(reportDate);
  
  const datesOptions = [
    "May 06, 2025",
    "April 06, 2025",
    "March 06, 2025",
    "February 06, 2025",
    "January 06, 2025",
  ];

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
      
      <Card className="border border-gray-200 dark:border-gray-700 shadow-sm p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
          <div className="flex flex-col md:flex-row items-center text-left gap-4 mb-4 md:mb-0">
            <div className="relative">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://www.scenium.io/_image?href=%2F_astro%2Fscenium.wuHdhx7C.png&w=162&h=43&f=webp" alt={companyName} />
                <AvatarFallback className="bg-gray-100 dark:bg-gray-700 text-xl font-bold">
                  {companyName.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 bg-green-100 dark:bg-green-900 rounded-full p-0.5">
                <Check size={16} className="text-green-600 dark:text-green-300" />
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2">
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{companyName}</p>
                <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs px-2 py-0.5 rounded-full">Verified</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{reserveRatio}</h2>
              <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                <Check size={16} />
                <p className="text-sm font-medium">100% Reserve Compliance</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Fact Finance Proof of Reserves Service
              </p>
            </div>
          </div>
          
          <Tabs defaultValue="balanco" className="w-auto">
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
      </Card>
    </div>
  );
}
