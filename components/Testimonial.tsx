import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TestimonialProps {
    name: string
    role: string
    company: string
    image: string
    content: string
}

export function Testimonial({ name, role, company, image, content }: TestimonialProps) {
    return (
        <Card className="w-full max-w-md">
            <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                        <AvatarImage src={image} alt={name} />
                        <AvatarFallback>{name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                        <h4 className="font-semibold">{name}</h4>
                        <p className="text-sm text-muted-foreground">
                            {role} at {company}
                        </p>
                    </div>
                </div>
                <p className="text-muted-foreground">{content}</p>
            </CardContent>
        </Card>
    )
} 