"use client"

import { useState, useEffect } from "react"
import { AuthGuard } from "@/components/auth-guard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Save, Mail, Phone, Instagram, MessageCircle, MapPin, CheckCircle, X } from "lucide-react"
import { brandConfig } from "@/lib/brand-config"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AdminPageClient() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [showSavedNotification, setShowSavedNotification] = useState(false)
  const [contactInfo, setContactInfo] = useState({
    email: brandConfig.email,
    phone: brandConfig.phone,
    location: brandConfig.location,
    instagram: brandConfig.socialMedia.instagram,
    whatsapp: brandConfig.socialMedia.whatsapp,
  })

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("adminContactInfo")
    if (savedData) {
      setContactInfo(JSON.parse(savedData))
    }
  }, [])

  // Auto-dismiss saved notification
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (showSavedNotification) {
      timer = setTimeout(() => {
        setShowSavedNotification(false)
      }, 5000) // 5 seconds
    }
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [showSavedNotification])

  const handleInputChange = (field: string, value: string) => {
    setContactInfo((prev) => ({
      ...prev,
      [field]: value,
    }))
    // Hide the saved notification when user starts editing again
    if (showSavedNotification) {
      setShowSavedNotification(false)
    }
  }

  const handleSave = async () => {
    setIsLoading(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Save to localStorage (in a real app, this would be an API call)
    localStorage.setItem("adminContactInfo", JSON.stringify(contactInfo))

    toast({
      title: "Settings saved",
      description: "Contact information and social media links have been updated successfully.",
    })

    setIsLoading(false)
    setShowSavedNotification(true)
  }

  const handleReset = () => {
    setContactInfo({
      email: brandConfig.email,
      phone: brandConfig.phone,
      location: brandConfig.location,
      instagram: brandConfig.socialMedia.instagram,
      whatsapp: brandConfig.socialMedia.whatsapp,
    })
    localStorage.removeItem("adminContactInfo")
    toast({
      title: "Settings reset",
      description: "All fields have been reset to default values.",
    })
    setShowSavedNotification(false)
  }

  const dismissNotification = () => {
    setShowSavedNotification(false)
  }

  return (
    <AuthGuard>
      <div className="container max-w-4xl py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Contact Information</h1>
          <p className="text-muted-foreground">Update your business contact details and social media links</p>
        </div>

        {/* Saved Notification */}
        {showSavedNotification && (
          <Alert className="mb-6 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900 text-green-800 dark:text-green-300 animate-fade-in-up">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <AlertDescription className="font-medium">
                  Changes saved successfully! Your contact information has been updated.
                </AlertDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-green-800 dark:text-green-300 hover:text-green-900 hover:bg-green-100 dark:hover:bg-green-900/30"
                onClick={dismissNotification}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Information Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-purple-600" />
                  Contact Details
                </CardTitle>
                <CardDescription>Update your primary contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="contact@guardagency.com"
                      value={contactInfo.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={contactInfo.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Business Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="location"
                      type="text"
                      placeholder="123 Tech Street, Cyber City, CC 10101"
                      value={contactInfo.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Links */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Instagram className="h-5 w-5 text-purple-600" />
                  Social Media Links
                </CardTitle>
                <CardDescription>Update your social media presence</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram URL</Label>
                  <div className="relative">
                    <Instagram className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="instagram"
                      type="url"
                      placeholder="https://instagram.com/guardagency"
                      value={contactInfo.instagram}
                      onChange={(e) => handleInputChange("instagram", e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp URL</Label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="whatsapp"
                      type="url"
                      placeholder="https://wa.me/15551234567"
                      value={contactInfo.whatsapp}
                      onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                onClick={handleSave}
                disabled={isLoading}
                className={`bg-purple-600 hover:bg-purple-700 ${showSavedNotification ? "bg-green-600 hover:bg-green-700" : ""}`}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Saving...
                  </>
                ) : showSavedNotification ? (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Saved
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
              <Button variant="outline" onClick={handleReset} disabled={isLoading}>
                Reset to Default
              </Button>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Live Preview</CardTitle>
                <CardDescription>How your contact info will appear on the website</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 text-sm">
                    <Mail className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground break-all">{contactInfo.email || "Not set"}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-sm">
                    <Phone className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">{contactInfo.phone || "Not set"}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-sm">
                    <MapPin className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">{contactInfo.location || "Not set"}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-sm">
                    <Instagram className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Instagram</p>
                      <p className="text-muted-foreground break-all">{contactInfo.instagram || "Not set"}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-sm">
                    <MessageCircle className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-muted-foreground break-all">{contactInfo.whatsapp || "Not set"}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Last Saved Info */}
            <Card className={showSavedNotification ? "border-green-200 dark:border-green-900" : ""}>
              <CardHeader className={showSavedNotification ? "pb-2" : ""}>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save Status
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                {showSavedNotification ? (
                  <div className="flex items-center text-green-600 dark:text-green-400 font-medium">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Changes saved successfully</span>
                  </div>
                ) : (
                  <p className="text-muted-foreground">No unsaved changes</p>
                )}
                <p className="text-xs text-muted-foreground mt-2">
                  Last updated: {showSavedNotification ? "Just now" : "N/A"}
                </p>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Instructions</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Changes are saved locally until backend integration</p>
                <p>• Use full URLs for social media links</p>
                <p>• WhatsApp format: https://wa.me/[phone number]</p>
                <p>• Instagram format: https://instagram.com/[username]</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
