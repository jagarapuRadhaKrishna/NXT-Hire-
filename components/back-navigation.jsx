"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function BackNavigation({ 
  customBackPath = null,
  className = ""
}) {
  const router = useRouter();

  const handleBack = () => {
    if (customBackPath) {
      router.push(customBackPath);
    } else {
      router.back();
    }
  };

  return (
    <div className={`bg-black/90 backdrop-blur-md border-b border-gray-700 sticky top-16 z-40 ${className}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="lg"
            onClick={handleBack}
            className="flex items-center gap-3 text-white hover:text-blue-400 hover:bg-gray-800/50 text-lg font-medium"
          >
            <ArrowLeft className="h-5 w-5" />
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}
