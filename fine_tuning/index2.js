const express = require("express");
const app = express();
const server = require("http").createServer(app);
const PORT = 3000;

server.listen(PORT, () => { console.log(`server started on ${PORT} `) })

let data = [
    {
        "type": "EXPERIENTIAL MARKETING AWARDS",
        "categories": [
            "Corporate Incentive / Meeting of the Year - India / International",
            "Corporate Conference of the Year",
            "Corporate Training / Education Programme of the Year",
            "Corporate Team Building Activity of the Year",
            "Employee Engagement Campaign of the Year",
            "Trade Engagement Campaign of the Year",
            "Association / Industry Convention of the Year",
            "B2B Marketing Programme of the Year",
            "Promotion / Activation for Branding Awareness",
            "Promotion / Activation for New Product Launch / Awareness"
        ]
    },
    {
        "type": "EXPERIENTIAL CELEBRATION AWARDS",
        "categories": [
            "Experiential Celebration of the Year",
            "Wedding Celebration of the Year",
            "Pre-wedding Celebration of the Year",
            "Post Wedding Celebration of the Year",
            "Mehendi Ceremony of the Year",
            "Sangeet Celebration of the Year",
            "Cocktail Party Reception of the Year",
            "Wedding Reception of the Year",
            "Haldi Ceremony of the Year",
            "Engagement Event / Celebration of the Year"
        ]
    },
    {
        "type": "EXPERIENTIAL TECH AWARDS",
        "categories": [
            "AR/VR Technologies & Content for the Year",
            "Use of Multimedia Technologies",
            "Achievement in Production Management",
            "Achievement in Lighting Solution",
            "Achievement in Trussing Solution",
            "Achievement in Audio Solution",
            "Achievement in Audio-Visual Solution",
            "Achievement in SFX / Pyrotechnic",
            "Achievement in Projection Mapping",
            "Achievement in Audio-visual Film",
            "Achievement in Tent Solutions"
        ]
    },
    {
        "type": "HOTEL & VENUE AWARDS",
        "categories": [
            "Best Venue for Corporate Incentives – Destination India",
            "Best Venue for Corporate Incentives – Destination International",
            "Best Venue for Business Events – Destination India (Under 200 delegates)",
            "Best Venue for Business Events – Destination International (Under 200 delegates)",
            "Best Venue for Business Events – Destination India (More than 200 delegates)",
            "Best Venue for Business Events – Destination International (More than 200 delegates)",
            "Best Venue for Intimate Weddings & Celebrations – Destination India (Under 200 delegates)",
            "Best Venue for Intimate Weddings & Celebrations – Destination International (Under 200 delegates)",
            "Best Venue for Big Fat Weddings – Destination India (200+ delegates)",
            "Best Venue for Big Fat Weddings – Destination International (200+ delegates)"
        ]
    },
    {
        "type": "LIVE QUOTIENT AWARDS",
        "categories": [
            "Best Master of Ceremonies for Corporate & Lifestyle Events – Female",
            "Best Master of Ceremonies for Corporate & Lifestyle Events - Male",
            "Best Master of Ceremonies for Weddings & Social Events - Female",
            "Best Master of Ceremonies for Weddings & Social Events – Male",
            "Best Singer for Corporate & Lifestyle Events - Female",
            "Best Singer for Corporate & Lifestyle Events - Male",
            "Best Singer for Weddings & Social Events - Male",
            "Best Singer for Weddings & Social Events - Female",
            "Best Band for Weddings and Social Events",
            "Best Band for Corporate and Lifestyle Events"
        ]
    }];


var tuningModel = [];


data.forEach(award=>{
    for (i = 0; i < award.categories.length; i++) {
        var qandA = {};
        qandA.prompt = `On Which Award type ${award.categories[i]} belong?\n\n->\n\n`
        qandA.completion = `${award.type}\n`
        tuningModel.push(qandA);
    }
});
console.log(tuningModel);


