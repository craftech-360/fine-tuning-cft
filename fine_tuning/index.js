const express = require("express");
const app = express();
const server = require("http").createServer(app);
const PORT = 3000;

server.listen(PORT, () => { console.log(`server started on ${PORT} `) })

let data = [
    // {
    //     "type": "EXPERIENTIAL MARKETING AWARDS",
    //     "categories": [
    //         "Corporate Incentive Meeting of the Year - India International",
    //         "Corporate Conference of the Year",
    //         "Corporate Training Education Programme of the Year",
    //         "Corporate Team Building Activity of the Year",
    //         "Employee Engagement Campaign of the Year",
    //         "Trade Engagement Campaign of the Year",
    //         "Association Industry Convention of the Year",
    //         "B2B Marketing Programme of the Year",
    //         "Promotion Activation for Branding Awareness",
    //         "Promotion Activation for New Product Launch / Awareness"
    //     ]
    // },
    // {
    //     "type": "EXPERIENTIAL CELEBRATION AWARDS",
    //     "categories": [
    //         "Experiential Celebration of the Year",
    //         "Wedding Celebration of the Year",
    //         "Pre-wedding Celebration of the Year",
    //         "Post Wedding Celebration of the Year",
    //         "Mehendi Ceremony of the Year",
    //         "Sangeet Celebration of the Year",
    //         "Cocktail Party Reception of the Year",
    //         "Wedding Reception of the Year",
    //         "Haldi Ceremony of the Year",
    //         "Engagement Event Celebration of the Year"
    //     ]
    // },
    // {
    //     "type": "EXPERIENTIAL TECH AWARDS",
    //     "categories": [
    //         "AR/VR Technologies & Content for the Year",
    //         "Use of Multimedia Technologies",
    //         "Achievement in Production Management",
    //         "Achievement in Lighting Solution",
    //         "Achievement in Trussing Solution",
    //         "Achievement in Audio Solution",
    //         "Achievement in Audio-Visual Solution",
    //         "Achievement in SFX Pyrotechnic",
    //         "Achievement in Projection Mapping",
    //         "Achievement in Audio-visual Film",
    //         "Achievement in Tent Solutions"
    //     ]
    // },
    // {
    //     "type": "HOTEL & VENUE AWARDS",
    //     "categories": [
    //         "Best Venue for Corporate Incentives Destination India",
    //         "Best Venue for Corporate Incentives Destination International",
    //         "Best Venue for Business Events Destination India (Under 200 delegates)",
    //         "Best Venue for Business Events Destination International (Under 200 delegates)",
    //         "Best Venue for Business Events Destination India (More than 200 delegates)",
    //         "Best Venue for Business Events Destination International (More than 200 delegates)",
    //         "Best Venue for Intimate Weddings & Celebrations Destination India (Under 200 delegates)",
    //         "Best Venue for Intimate Weddings & Celebrations Destination International (Under 200 delegates)",
    //         "Best Venue for Big Fat Weddings Destination India (200+ delegates)",
    //         "Best Venue for Big Fat Weddings Destination International (200+ delegates)"
    //     ]
    // },
    // {
    //     "type": "LIVE QUOTIENT AWARDS",

    //     "categories": [
    //         "Best Master of Ceremonies for Corporate & Lifestyle Events – Female",
    //         "Best Master of Ceremonies for Corporate & Lifestyle Events - Male",
    //         "Best Master of Ceremonies for Weddings & Social Events - Female",
    //         "Best Master of Ceremonies for Weddings & Social Events – Male",
    //         "Best Singer for Corporate & Lifestyle Events - Female",
    //         "Best Singer for Corporate & Lifestyle Events - Male",
    //         "Best Singer for Weddings & Social Events - Male",
    //         "Best Singer for Weddings & Social Events - Female",
    //         "Best Band for Weddings and Social Events",
    //         "Best Band for Corporate and Lifestyle Events"
    //     ]
    // },
    {
        "companies": [
          {
            "name": "CRAFTECH360",
            "description": "CRAFTECH360 is a company that offers services in the field of experiential marketing, event management, and brand activation."
          },
          {
            "name": "ACCOR",
            "description": "ACCOR is a leading hospitality company that operates a wide range of hotels, resorts, and residences globally. They have a portfolio of well-known brands, including Novotel, ibis, Sofitel, and more."
          },
          {
            "name": "SOUNDKRAFT",
            "description": "SOUNDKRAFT is a brand that specializes in professional audio equipment, including mixing consoles, speakers, and audio interfaces. They cater to the needs of musicians, sound engineers, and venues."
          },
          {
            "name": "HILTON",
            "description": "Hilton is a renowned hospitality company known for its luxury hotels and resorts worldwide. They offer a range of accommodation options, dining experiences, and event spaces."
          },
          {
            "name": "PREMAGIC",
            "description": "PREMAGIC is a company that focuses on providing innovative solutions for event production, entertainment, and immersive experiences. They offer services such as projection mapping, interactive installations, and visual effects."
          },
          {
            "name": "YELLOW RENTALS",
            "description": "YELLOW RENTALS is a company that offers rental services for audiovisual equipment, event furniture, and event production gear. They provide solutions for conferences, exhibitions, and live events."
          },
          {
            "name": "ONEABOVE",
            "description": "ONEABOVE is an experiential marketing and event management agency. They specialize in creating unique and engaging experiences for brands, including product launches, brand activations, and corporate events."
          },
          {
            "name": "UPAHARA",
            "description": "UPAHARA is an event management and gifting company that specializes in personalized and customized gifts for various occasions. They offer a wide range of products and services to cater to different gifting needs."
          },
          {
            "name": "KNOTIE PRODUCTS",
            "description": "KNOTIE PRODUCTS is a company that designs and manufactures innovative and sustainable products for the events and hospitality industry. They focus on creating eco-friendly alternatives for event decor and branding."
          },
          {
            "name": "EXPERIMENTAL MARKETING PRODUCTS DUBAI",
            "description": "EXPERIMENTAL MARKETING PRODUCTS DUBAI is a company based in Dubai that specializes in providing experiential marketing solutions and unique promotional products for brands and events."
          }
        ]
      },
    { "quetions":[
        "What services does craftech360 offer?",
        "What is ACCOR known for?",
        "What type of products does SOUNDKRAFT specialize in?",
        "What is Hilton famous for?",
        "What kind of solutions does PREMAGIC provide?",
        "What services does YELLOW RENTALS offer?",
        "What is the focus of ONEABOVE?",
        "What does UPAHARA specialize in?",
        "What does KNOTIE PRODUCTS design and manufacture?",
        "What kind of solutions does EXPERIMENTAL MARKETING PRODUCTS DUBAI provide?",
    ] 
        

    }

];



var tuningModel = [];

var { lowerCase, localeLowerCase } = require('lower-case')
data.forEach(award=>{
    for (i = 0; i < 10; i++) {
        var qandA = {};
        qandA.prompt = `"On Which Award type "${award.companies[i].description}" \n\n###\n\n ->"`
        // qandA.completion = `  "${(award.quetions)}\n"`
        tuningModel.push(qandA);
    }
});

const fs = require('fs');
// console.log(data[0].companies[0].description)

// Convert the array to a string representation
const arrayString = JSON.stringify(tuningModel);

// Write the array string to a text file
fs.writeFile('output.txt', arrayString, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Array successfully written to file!');
  }
});
console.log(tuningModel);


