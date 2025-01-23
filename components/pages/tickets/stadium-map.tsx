import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Plus, Minus } from "lucide-react";

export default function StadiumMap() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.5));
  };

  // Stadium sections data with mock pricing and availability
  const sections = {
    north: { price: "£30-45", available: 120 },
    south: { price: "£30-45", available: 85 },
    east: { price: "£45-60", available: 150 },
    west: { price: "£45-60", available: 95 },
    northEast: { price: "£35-50", available: 75 },
    northWest: { price: "£35-50", available: 80 },
    southEast: { price: "£35-50", available: 110 },
    southWest: { price: "£35-50", available: 90 },
  };


  return (
    <div className="relative bg-white rounded-xl shadow-lg p-4 w-[800px]">
      <h2 className="text-xl font-bold mb-4">Stadium Seating Map</h2>
      
      <div className="relative overflow-auto border rounded-lg bg-gray-50" style={{ 
        width: '100%',
        height: '500px'
      }}>
        <div style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center',
          transition: 'transform 0.2s ease',
          padding: '20px'
        }}>
          <TooltipProvider>
            <div className="flex items-center justify-center">
              <svg viewBox="0 0 400 300" width="600" height="450">
                <rect x="100" y="75" width="200" height="150" fill="#4ade80" rx="4"/>
                
                {/* North Section */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <path
                      d="M100 25 L300 25 L300 75 L100 75 Z"
                      className={`${
                        selectedSection === 'north' 
                          ? 'fill-blue-400' 
                          : 'fill-blue-200 hover:fill-blue-300'
                      } cursor-pointer transition-colors`}
                      onClick={() => setSelectedSection('north')}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>North Section</p>
                    <p>Available: {sections.north.available} seats</p>
                    <p>Price: {sections.north.price}</p>
                  </TooltipContent>
                </Tooltip>

                {/* South Section */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <path
                      d="M100 225 L300 225 L300 275 L100 275 Z"
                      className={`${
                        selectedSection === 'south' 
                          ? 'fill-blue-400' 
                          : 'fill-blue-200 hover:fill-blue-300'
                      } cursor-pointer transition-colors`}
                      onClick={() => setSelectedSection('south')}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>South Section</p>
                    <p>Available: {sections.south.available} seats</p>
                    <p>Price: {sections.south.price}</p>
                  </TooltipContent>
                </Tooltip>

                {/* East Section */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <path
                      d="M300 75 L350 75 L350 225 L300 225 Z"
                      className={`${
                        selectedSection === 'east' 
                          ? 'fill-blue-400' 
                          : 'fill-blue-200 hover:fill-blue-300'
                      } cursor-pointer transition-colors`}
                      onClick={() => setSelectedSection('east')}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>East Section</p>
                    <p>Available: {sections.east.available} seats</p>
                    <p>Price: {sections.east.price}</p>
                  </TooltipContent>
                </Tooltip>

                {/* West Section */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <path
                      d="M50 75 L100 75 L100 225 L50 225 Z"
                      className={`${
                        selectedSection === 'west' 
                          ? 'fill-blue-400' 
                          : 'fill-blue-200 hover:fill-blue-300'
                      } cursor-pointer transition-colors`}
                      onClick={() => setSelectedSection('west')}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>West Section</p>
                    <p>Available: {sections.west.available} seats</p>
                    <p>Price: {sections.west.price}</p>
                  </TooltipContent>
                </Tooltip>

                {/* Corner Sections */}
                {[
                  { id: 'northEast', d: "M300 25 L350 75 L300 75 Z" },
                  { id: 'northWest', d: "M50 75 L100 75 L100 25 Z" },
                  { id: 'southEast', d: "M300 225 L350 225 L300 275 Z" },
                  { id: 'southWest', d: "M50 225 L100 275 L100 225 Z" }
                ].map(section => (
                  <Tooltip key={section.id}>
                    <TooltipTrigger asChild>
                      <path
                        d={section.d}
                        className={`${
                          selectedSection === section.id 
                            ? 'fill-blue-400' 
                            : 'fill-blue-200 hover:fill-blue-300'
                        } cursor-pointer transition-colors`}
                        onClick={() => setSelectedSection(section.id)}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{section.id.replace(/([A-Z])/g, ' $1').trim()} Section</p>
                      <p>Available: {sections[section.id as keyof typeof sections].available} seats</p>
                      <p>Price: {sections[section.id as keyof typeof sections].price}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </svg>
            </div>
          </TooltipProvider>
        </div>

        {/* Zoom controls - bottom right */}
        <div className="absolute bottom-4 right-4 flex gap-2 z-10">
          <button 
            onClick={handleZoomOut}
            className="bg-white w-8 h-8 rounded-md shadow-md hover:bg-gray-100 flex items-center justify-center"
            aria-label="Zoom out"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button 
            onClick={handleZoomIn}
            className="bg-white w-8 h-8 rounded-md shadow-md hover:bg-gray-100 flex items-center justify-center"
            aria-label="Zoom in"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Selected section info */}
      {selectedSection && sections[selectedSection as keyof typeof sections] && (
        <div className="mt-4 p-4 border rounded-lg bg-blue-50">
          <h3 className="font-bold text-lg capitalize">
            {selectedSection.replace(/([A-Z])/g, ' $1').trim()} Section
          </h3>
          <p className="mt-2">Available Seats: {sections[selectedSection as keyof typeof sections].available}</p>
          <p>Price Range: {sections[selectedSection as keyof typeof sections].price}</p>
        </div>
      )}
    </div>
  );
}