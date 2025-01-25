"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"

const steps = ["Personal Details", "Delivery Options", "Payment", "Confirmation"]

export function SouvenirCheckout() {
  const [currentStep, setCurrentStep] = useState(0)
  const [deliveryOption, setDeliveryOption] = useState("pickup")
  const { toast } = useToast()

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Show confirmation toast
      toast({
        title: "Purchase Successful!",
        description: "Your order has been confirmed. Check your email for details.",
      })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold mb-8">
          Souvenir Checkout
        </motion.h1>
        <div className="flex mb-8">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index <= currentStep ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className={`h-1 w-16 ${index < currentStep ? "bg-primary" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
        </div>
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentStep === 0 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1234567890" />
              </div>
            </div>
          )}
          {currentStep === 1 && (
            <div className="space-y-4">
              <Label>Delivery Option</Label>
              <RadioGroup value={deliveryOption} onValueChange={setDeliveryOption}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pickup" id="pickup" />
                  <Label htmlFor="pickup">Pick up at stadium</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="delivery" id="delivery" />
                  <Label htmlFor="delivery">Home delivery</Label>
                </div>
              </RadioGroup>
              {deliveryOption === "delivery" && (
                <div className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="address">Delivery Address</Label>
                    <Input id="address" placeholder="123 Main St" />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="New York" />
                  </div>
                  <div>
                    <Label htmlFor="postcode">Postcode</Label>
                    <Input id="postcode" placeholder="12345" />
                  </div>
                </div>
              )}
            </div>
          )}
          {currentStep === 2 && (
            <div className="space-y-4">
              <p>Please complete the payment via bank transfer to the following account:</p>
              <div>
                <p>Bank: Sunshine Bank</p>
                <p>Account Name: Sunshine Stars FC</p>
                <p>Account Number: 1234567890</p>
                <p>Sort Code: 12-34-56</p>
              </div>
              <p>Once you've completed the transfer, click "Next" to confirm your purchase.</p>
            </div>
          )}
          {currentStep === 3 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Purchase Confirmed!</h2>
              <p>Your order has been confirmed. Please check your email for the order details.</p>
              {deliveryOption === "pickup" ? (
                <p>You can pick up your items at the stadium on match days.</p>
              ) : (
                <p>Your items will be delivered to the provided address within 5-7 business days.</p>
              )}
            </div>
          )}
        </motion.div>
        <div className="mt-8">
          <Button onClick={handleNextStep}>{currentStep < steps.length - 1 ? "Next" : "Finish"}</Button>
        </div>
      </div>
    </div>
  )
}

