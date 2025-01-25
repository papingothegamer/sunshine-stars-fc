"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { ChevronRight, Home, CheckCircle2 } from "lucide-react"

const steps = ["Personal Details", "Payment", "Confirmation"]

export function TicketCheckout() {
  const [currentStep, setCurrentStep] = useState(0)
  const { toast } = useToast()
  const router = useRouter()

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Navigate back to home after final confirmation
      toast({
        title: "Purchase Successful!",
        description: "Your ticket has been confirmed. Check your email for details.",
      })
      router.push("/")
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-3xl font-bold"
          >
            Ticket Checkout
          </motion.h1>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => router.push("/")}
            title="Return to Home"
          >
            <Home className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex justify-between items-center mb-8">
          {steps.map((step, index) => (
            <div 
              key={step} 
              className="flex-1 flex items-center"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                  index <= currentStep 
                    ? "bg-primary text-white" 
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {index <= currentStep ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
              </div>
              <div className="flex-1">
                <p className={`text-sm ${index <= currentStep ? "font-bold" : "text-gray-500"}`}>
                  {step}
                </p>
                {index < steps.length - 1 && (
                  <div 
                    className={`h-1 w-full ${
                      index < currentStep ? "bg-primary" : "bg-gray-200"
                    }`} 
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white shadow-md rounded-lg p-6"
        >
          {currentStep === 0 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1234567890" className="mt-2" />
              </div>
            </div>
          )}
          
          {currentStep === 1 && (
            <div className="space-y-4 text-center">
              <h2 className="text-xl font-semibold">Payment Details</h2>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p>Please complete the payment via bank transfer:</p>
                <div className="mt-4 space-y-2">
                  <p><strong>Bank:</strong> Sunshine Bank</p>
                  <p><strong>Account Name:</strong> Sunshine Stars FC</p>
                  <p><strong>Account Number:</strong> 1234567890</p>
                  <p><strong>Sort Code:</strong> 12-34-56</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                After transfer, click "Next" to confirm your purchase
              </p>
            </div>
          )}
          
          {currentStep === 2 && (
            <div className="space-y-4 text-center">
              <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
              <h2 className="text-2xl font-semibold">Purchase Confirmed!</h2>
              <p>Your ticket has been confirmed. Check your email for the ticket with QR code.</p>
              <Button variant="outline" onClick={() => window.print()}>
                Save as PDF / Print Ticket
              </Button>
            </div>
          )}
        </motion.div>
        
        <div className="flex justify-between mt-8">
          {currentStep > 0 && (
            <Button 
              variant="outline" 
              onClick={handlePreviousStep}
            >
              Previous
            </Button>
          )}
          <Button 
            onClick={handleNextStep} 
            className="ml-auto"
          >
            {currentStep < steps.length - 1 ? "Next" : "Finish"}
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}