import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function NewsLetter() {
    return (
        <div className="group relative space-y-6 flex flex-col items-center text-center border  p-6 rounded-lg ">

            
            <div className="relative space-y-4">
                <div className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <h3 className="text-sm font-medium tracking-wider">Newsletter</h3>
                </div>
                
                <p className="text-sm text-muted-foreground max-w-md">
                    I run a newsletter about design, coding, AI, and open source.
                </p>
            </div>

            <form className="relative flex flex-col sm:flex-row gap-4 max-w-md w-full">
                <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="text-xs tracking-wider bg-background/50 backdrop-blur-sm"
                />
                <Button 
                    type="submit"
                    className="text-xs tracking-wider"
                >
                    Subscribe
                </Button>
            </form>

            <p className="text-xs text-muted-foreground">
                No spam, unsubscribe anytime.
            </p>
        </div>
    )
}