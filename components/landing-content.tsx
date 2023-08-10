"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "David Smith ~ in a dream I had", 
    avatar: "D",
    title: "Comedian",
    description: "I've never seen an app generate such hilarious content. My writers are now obsolete!",
  },
  {
    name: "Joe Rogan ~ in a dream I had",
    avatar: "J",
    title: "Podcast Host",
    description: "This app is entirely something else. Never before have I seen an AI with such quick wit and comedic timing. Mind blowing!",
  },
  {
    name: "Elon Musk ~ in a dream I had",
    avatar: "E",
    title: "Technoking of Tesla",
    description: "I'm acquiring this company and integrating their AI into Tesla bots. The future of comedy is algorithms!", 
  },
  {
    name: "Patrick Bet-David ~ in a dream I had",
    avatar: "P",
    title: "YouTuber",
    description: "I use this app to come up with viral video ideas. It's responsible for like 30% of my content last month!",
  }
]

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}