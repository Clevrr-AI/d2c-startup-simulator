import { Question } from '../types';

// Questions database with effects on metrics
const allQuestions: Question[] = [
  {
    "id": "jan-1",
    "month": 1,
    "persona": "chad",
    "text": "Bro, hear me out—our Insta needs a vibe upgrade. I know a guy who can get a celebrity's cousin's dog for our next ad. Totally worth it, right?",
    "choices": [
      {
        "text": "Hell yeah! Let’s milk that mutt for virality!",
        "effects": { "revenue": 20000, "founderSanity": -10, "employeeHappiness": 10, "margins": -10, "cash": -5000 }
      },
      {
        "text": "Pass. We're selling products, not pedigree.",
        "effects": { "revenue": -5000, "founderSanity": 10, "employeeHappiness": -10, "margins": 10, "cash": 4000 }
      }
    ]
  },
  {
    "id": "jan-2",
    "month": 1,
    "persona": "molly",
    "text": "My spreadsheets have more tabs than Mumbai has potholes. Can we please invest in decent analytics tools before I lose my sanity?",
    "choices": [
      {
        "text": "Fine, give the spreadsheets a funeral.",
        "effects": { "revenue": 15000, "founderSanity": 20, "employeeHappiness": 10, "margins": 0, "cash": -10000 }
      },
      {
        "text": "Excel builds character, keep tabbing.",
        "effects": { "revenue": -5000, "founderSanity": -10, "employeeHappiness": -20, "margins": 10, "cash": 10000 }
      }
    ]
  },
  {
    "id": "jan-3",
    "month": 1,
    "persona": "opal",
    "text": "Supplier accidentally shipped 500 neon-pink bath bombs instead of the neutral ones we ordered. Do we sell them ironically or raise hell?",
    "choices": [
      {
        "text": "Embrace the neon apocalypse!",
        "effects": { "revenue": 30000, "founderSanity": -10, "employeeHappiness": 10, "margins": 20, "cash": 50000 }
      },
      {
        "text": "Send them back—our customers aren't colorblind!",
        "effects": { "revenue": -10000, "founderSanity": 10, "employeeHappiness": -10, "margins": 0, "cash": -15000 }
      }
    ]
  },
  {
    "id": "jan-4",
    "month": 1,
    "persona": "vic",
    "text": "Random question—Would you rather fight 100 duck-sized unicorns or 1 unicorn-sized duck? Choose wisely, founder.",
    "choices": [
      {
        "text": "100 duck-sized unicorns—sounds manageable.",
        "effects": { "revenue": 0, "founderSanity": -15, "employeeHappiness": 5, "margins": 0, "cash": 0 }
      },
      {
        "text": "1 unicorn-sized duck. Go big or go home!",
        "effects": { "revenue": 0, "founderSanity": 15, "employeeHappiness": -5, "margins": 0, "cash": 0 }
      }
    ]
  },
  {
    "id": "feb-1",
    "month": 2,
    "persona": "vic",
    "text": "Beta, your burn rate is faster than Ambani's son spending daddy's money. Valentine's Day is coming and you're bleeding cash like a Bollywood hero in the climax. Scale or die, but right now you're doing both. What's your play, champ?",
    "choices": [
      {
        "text": "Launch a cringe Valentine's campaign targeting single people with 'Self-Love Kits' priced like kidney donations",
        "effects": {
          "revenue": 35000,
          "founderSanity": -20,
          "employeeHappiness": -10,
          "margins": 25,
          "cash": -5000
        }
      },
      {
        "text": "Pivot to B2B and sell corporate Valentine's gifts because apparently that's a thing now",
        "effects": {
          "revenue": 15000,
          "founderSanity": -30,
          "employeeHappiness": 5,
          "margins": -15,
          "cash": 20000
        }
      }
    ]
  },
  {
    "id": "feb-2",
    "month": 2,
    "persona": "chad",
    "text": "Bro, some Twitter influencer with 50K followers wants ₹5 lakhs to post about your protein bars. His engagement rate is lower than my will to live, but his DMs are sliding into brand deals faster than aunties into wedding gossip. YOLO or no-go?",
    "choices": [
      {
        "text": "Pay him and throw in free lifetime supply because 'exposure bro, trust the process'",
        "effects": {
          "revenue": -10000,
          "founderSanity": -25,
          "employeeHappiness": 15,
          "margins": -35,
          "cash": -12500
        }
      },
      {
        "text": "Counter-offer with ₹500 and a handwritten thank you note from your intern",
        "effects": {
          "revenue": 20000,
          "founderSanity": 20,
          "employeeHappiness": -5,
          "margins": 20,
          "cash": 15000
        }
      }
    ]
  },
  {
    "id": "feb-3",
    "month": 2,
    "persona": "molly",
    "text": "The GST notice came in and it's thicker than my ex's skull. Our accountant is MIA since Republic Day and the filing deadline is approaching faster than arranged marriage proposals after 25. I'm one Excel crash away from a mental breakdown.",
    "choices": [
      {
        "text": "Hire the most expensive CA in Delhi and pray they can perform miracles with receipts",
        "effects": {
          "revenue": 5000,
          "founderSanity": 10,
          "employeeHappiness": -5,
          "margins": -20,
          "cash": -8000
        }
      },
      {
        "text": "Wing it with online tutorials and hope the government doesn't notice like they didn't notice demonetization aftermath",
        "effects": {
          "revenue": -15000,
          "founderSanity": -35,
          "employeeHappiness": -15,
          "margins": 5,
          "cash": 25000
        }
      }
    ]
  },
  {
    "id": "feb-4",
    "month": 2,
    "persona": "karen",
    "text": "Your biggest competitor just launched and their founder looks like a Bollywood actor who actually showers. They're calling your product 'so 2023' on LinkedIn while sliding into your customers' DMs. The audacity is astronomical.",
    "choices": [
      {
        "text": "Start a petty Twitter war and expose their fake reviews like it's Bigg Boss drama",
        "effects": {
          "revenue": 25000,
          "founderSanity": -15,
          "employeeHappiness": 25,
          "margins": -5,
          "cash": -1000
        }
      },
      {
        "text": "Take the high road and focus on your product while internally plotting their downfall like a Ekta Kapoor serial",
        "effects": {
          "revenue": 10000,
          "founderSanity": 25,
          "employeeHappiness": 10,
          "margins": 15,
          "cash": 30000
        }
      }
    ]
  },
  {
    "id": "mar-1",
    "month": 3,
    "persona": "opal",
    "text": "Holi is here and your entire warehouse looks like a rainbow exploded. Half your inventory is covered in gulal, your delivery partner is drunk on bhang, and customers are demanding 'festive packaging' that costs more than your college fees. The chaos is biblical.",
    "choices": [
      {
        "text": "Embrace the madness and launch 'Holi Special Edition' products with 300% markup because festivals = premium pricing",
        "effects": {
          "revenue": 45000,
          "founderSanity": -10,
          "employeeHappiness": 30,
          "margins": 35,
          "cash": -3000
        }
      },
      {
        "text": "Shut down operations for a week and blame it on 'cultural sensitivity' while secretly crying about lost revenue",
        "effects": {
          "revenue": -25000,
          "founderSanity": 15,
          "employeeHappiness": 20,
          "margins": -10,
          "cash": 40000
        }
      }
    ]
  },
  {
    "id": "mar-2",
    "month": 3,
    "persona": "molly",
    "text": "Financial year ending is approaching like your relatives during wedding season. The books are messier than a Punjabi wedding dance floor, and your investors want quarterly reports that make sense. Spoiler alert: nothing makes sense in Indian accounting.",
    "choices": [
      {
        "text": "Hire a Big 4 consulting firm and pay them enough to buy a small apartment in Gurgaon",
        "effects": {
          "revenue": 20000,
          "founderSanity": 25,
          "employeeHappiness": -5,
          "margins": -30,
          "cash": -15000
        }
      },
      {
        "text": "Pull three all-nighters with Red Bull and creative accounting that would make Harshad Mehta proud",
        "effects": {
          "revenue": 5000,
          "founderSanity": -40,
          "employeeHappiness": -20,
          "margins": 15,
          "cash": 50000
        }
      }
    ]
  },
  {
    "id": "mar-3",
    "month": 3,
    "persona": "vic",
    "text": "Beta, your competitor just raised Series A from Sequoia while you're still pitching to your chacha's friend who thinks D2C means 'Delhi to Chennai'. They're calling themselves the 'Zomato of skincare' and investors are throwing money like it's Holi colors. Time to step up or step out.",
    "choices": [
      {
        "text": "Frantically apply to every accelerator and pitch deck competition, including that shady one in Cyber City",
        "effects": {
          "revenue": 10000,
          "founderSanity": -25,
          "employeeHappiness": 5,
          "margins": -20,
          "cash": -6000
        }
      },
      {
        "text": "Bootstrap like a boss and prove that not everyone needs VC validation to succeed (while secretly stalking their LinkedIn updates)",
        "effects": {
          "revenue": 30000,
          "founderSanity": 20,
          "employeeHappiness": 25,
          "margins": 25,
          "cash": 80000
        }
      }
    ]
  },
  {
    "id": "mar-4",
    "month": 3,
    "persona": "karen",
    "text": "A customer ordered your premium face mask but received it during a family function. Her saas saw the 'intimate wellness' branded packaging from your previous product line and now the entire extended family thinks she's running a side business. The family WhatsApp group is blowing up.",
    "choices": [
      {
        "text": "Offer to personally attend their family function and explain the mix-up while wearing your company hoodie",
        "effects": {
          "revenue": -5000,
          "founderSanity": -30,
          "employeeHappiness": 35,
          "margins": -25,
          "cash": -2000
        }
      },
      {
        "text": "Send a formal apology letter addressed to 'Respected Saas ji' and throw in free products for the entire family",
        "effects": {
          "revenue": 15000,
          "founderSanity": -15,
          "employeeHappiness": 15,
          "margins": -15,
          "cash": -3500
        }
      }
    ]
  },
  {
    "id": "apr-1",
    "month": 4,
    "persona": "chad",
    "text": "Bro, Facebook just banned your ad account because they think your protein powder is 'medical misinformation'. Your entire marketing strategy just got Zuckerberg-slapped harder than Will Smith at the Oscars. Instagram influencers are now asking for kidney money upfront because 'brands are risky'. Your CAC is higher than Elon's Twitter acquisition price.",
    "choices": [
      {
        "text": "Go full desperate mode: hire your cousin's girlfriend who has 500 TikTok followers and promise her equity",
        "effects": {
          "revenue": -40000,
          "founderSanity": -50,
          "employeeHappiness": -30,
          "margins": -40,
          "cash": -10000
        }
      },
      {
        "text": "Pivot to LinkedIn thought leadership and become that cringe founder who posts daily about 'entrepreneurship lessons from cutting vegetables'",
        "effects": {
          "revenue": 250000,
          "founderSanity": -45,
          "employeeHappiness": -25,
          "margins": 20,
          "cash": -2000
        }
      }
    ]
  },
  {
    "id": "apr-2",
    "month": 4,
    "persona": "vic",
    "text": "Beta, I just saw your competitor on Shark Tank India getting a ₹2 crore deal while you can't even get your building security guard to invest ₹500. Namita aunty called their product 'revolutionary' - the same product you launched 6 months ago. The sharks are circling, but not around you. Scale or die, and right now you're basically a startup zombie.",
    "choices": [
      {
        "text": "Desperately apply for Season 3 and practice your sob story about sacrificing your engineering job for this 'dream'",
        "effects": {
          "revenue": -20000,
          "founderSanity": -60,
          "employeeHappiness": 10,
          "margins": -25,
          "cash": -8000
        }
      },
      {
        "text": "Go full psycho mode and launch a hate campaign against them on Twitter using fake accounts and your mom's phone",
        "effects": {
          "revenue": 15000,
          "founderSanity": -70,
          "employeeHappiness": -40,
          "margins": -10,
          "cash": -3000
        }
      }
    ]
  },
  {
    "id": "apr-3",
    "month": 4,
    "persona": "molly",
    "text": "The new GST rules dropped and they're more confusing than the plot of Inception. Our entire tax structure is now illegal retroactively, and the penalty is more than your dad's disappointment when you dropped out of IIT. I've been surviving on Complan and existential dread for 96 hours straight. My Excel sheets are crying.",
    "choices": [
      {
        "text": "Liquidate your personal FDs, sell your bike, and borrow money from your girlfriend's father to pay penalties",
        "effects": {
          "revenue": -30000,
          "founderSanity": -55,
          "employeeHappiness": -35,
          "margins": -35,
          "cash": -20000
        }
      },
      {
        "text": "Shut down the company, delete all records, and start fresh with a new name like 'definitely-not-the-same-company-2.0'",
        "effects": {
          "revenue": -50000,
          "founderSanity": -40,
          "employeeHappiness": -50,
          "margins": 10,
          "cash": 100000
        }
      }
    ]
  },
  {
    "id": "apr-4",
    "month": 4,
    "persona": "karen",
    "text": "Your top customer just discovered that your 'handcrafted artisanal' soap is actually mass-produced in a factory next to a fish market. They've started a viral TikTok series called 'Exposing Fake D2C Brands' and it's getting more views than your entire marketing budget ever reached. The comments section looks like a battlefield and your brand reputation is deader than your college relationships.",
    "choices": [
      {
        "text": "Double down on the lie and hire actors to pretend they're your 'artisan craftspeople' making soap in a fake village setup",
        "effects": {
          "revenue": -35000,
          "founderSanity": -65,
          "employeeHappiness": -30,
          "margins": -50,
          "cash": -15000
        }
      },
      {
        "text": "Come clean in a 47-slide LinkedIn post about 'authentic entrepreneurship' and hope people appreciate the 'vulnerability'",
        "effects": {
          "revenue": 10000,
          "founderSanity": -35,
          "employeeHappiness": 15,
          "margins": 5,
          "cash": -2500
        }
      }
    ]
  },
  {
    "id": "may-1",
    "month": 5,
    "persona": "vic",
    "text": "Beta, new financial year means new targets. I want 10x growth by Diwali or I'm pulling out faster than your dad did when he heard you were starting a startup. I've been telling my golf club friends that you're the 'next big thing' and my reputation is on the line. Also, I'm bringing my nephew who just graduated from Wharton to 'help' with strategy. He thinks your business model is 'cute but outdated'.",
    "choices": [
      {
        "text": "Agree to everything and let the Wharton kid redesign your entire business while you slowly die inside",
        "effects": {
          "revenue": 60000,
          "founderSanity": -80,
          "employeeHappiness": -45,
          "margins": -30,
          "cash": 150000
        }
      },
      {
        "text": "Tell him his nephew can observe but touch nothing, risking his wrath and potential funding withdrawal",
        "effects": {
          "revenue": 25000,
          "founderSanity": -50,
          "employeeHappiness": 20,
          "margins": 15,
          "cash": -10000
        }
      }
    ]
  },
  {
    "id": "may-2",
    "month": 5,
    "persona": "opal",
    "text": "Good news: Summer season is here and demand is through the roof for your cooling products. Bad news: Your supplier just WhatsApped that their factory caught fire and they're now operating from their cousin's garage in Ludhiana. Also, your biggest competitor just announced same-day delivery powered by drones while you're still struggling with regular auto-rickshaw logistics.",
    "choices": [
      {
        "text": "Partner with every random delivery startup in the city and pray they don't lose your packages like they lost their Series A funding",
        "effects": {
          "revenue": 80000,
          "founderSanity": -25,
          "employeeHappiness": 15,
          "margins": 20,
          "cash": 200000
        }
      },
      {
        "text": "Stick with your current setup and market it as 'sustainable, human-powered delivery' to appeal to eco-conscious customers",
        "effects": {
          "revenue": 45000,
          "founderSanity": -15,
          "employeeHappiness": 25,
          "margins": 30,
          "cash": 120000
        }
      }
    ]
  },
  {
    "id": "may-3",
    "month": 5,
    "persona": "molly",
    "text": "Fresh books, fresh hopes, fresh trauma. The new financial year means investors want detailed projections that make your current numbers look like pocket money. Your angel investor is demanding monthly board meetings where he brings homemade sandwiches and questions every ₹50 expense like it's his daughter's wedding budget. He just asked why you spent ₹2000 on 'team motivation' (it was pizza).",
    "choices": [
      {
        "text": "Create the most elaborate, impressive financial projections with fancy charts and buzzwords, knowing they're pure fiction",
        "effects": {
          "revenue": 55000,
          "founderSanity": -30,
          "employeeHappiness": 10,
          "margins": 25,
          "cash": 180000
        }
      },
      {
        "text": "Present brutally honest numbers and watch his face go through the five stages of grief in real-time",
        "effects": {
          "revenue": 35000,
          "founderSanity": -60,
          "employeeHappiness": 30,
          "margins": 15,
          "cash": -8000
        }
      }
    ]
  },
  {
    "id": "may-4",
    "month": 5,
    "persona": "chad",
    "text": "Bro, your investor just joined your company WhatsApp group and he's forwarding boomer memes about 'hard work' and questioning why your social media posts don't have enough 'synergy' and 'paradigm shifts'. He suggested you collaborate with his wife's yoga instructor for 'authentic content'. The cringe levels are breaking the space-time continuum.",
    "choices": [
      {
        "text": "Embrace the cringe and let his wife's yoga instructor become your brand ambassador, complete with morning meditation product launches",
        "effects": {
          "revenue": 70000,
          "founderSanity": -85,
          "employeeHappiness": -20,
          "margins": 35,
          "cash": 220000
        }
      },
      {
        "text": "Politely decline and create a separate 'investor updates' group to contain the damage while keeping your sanity intact",
        "effects": {
          "revenue": 40000,
          "founderSanity": -40,
          "employeeHappiness": 35,
          "margins": 20,
          "cash": 100000
        }
      }
    ]
  },
  {
    "id": "jun-1",
    "month": 6,
    "persona": "vic",
    "text": "Beta, I've installed security cameras in your office to monitor 'productivity metrics' and I'm getting live feeds on my phone. I saw you took a 7-minute chai break yesterday - that's ₹47 of lost productivity according to my calculations. Also, my wife thinks your brand colors are 'too aggressive' so we're changing them to match her saree collection. My son-in-law is now your new Head of Innovation, he has a BCom degree and strong opinions about everything.",
    "choices": [
      {
        "text": "Accept the surveillance state and let his BCom son-in-law revolutionize your product line with his 'disruptive ideas'",
        "effects": {
          "revenue": 85000,
          "founderSanity": -95,
          "employeeHappiness": -60,
          "margins": 15,
          "cash": 300000
        }
      },
      {
        "text": "Quietly start looking for new investors while pretending to comply, knowing he'll probably sue you for 'betrayal'",
        "effects": {
          "revenue": 30000,
          "founderSanity": -70,
          "employeeHappiness": 10,
          "margins": 25,
          "cash": -15000
        }
      }
    ]
  },
  {
    "id": "jun-2",
    "month": 6,
    "persona": "opal",
    "text": "Mumbai is underwater, your warehouse is now a swimming pool, and your inventory is floating like festival offerings in the Ganges. Your psycho investor is calling every 30 minutes asking why deliveries are delayed, suggesting you should have 'predicted the monsoon better' and demanding you personally swim to customers' houses with their orders. He's also threatening to dock your salary for each delayed shipment.",
    "choices": [
      {
        "text": "Rent boats and jetskis to continue deliveries because 'customer obsession' and watch your investor's approval ratings soar",
        "effects": {
          "revenue": 70000,
          "founderSanity": -60,
          "employeeHappiness": 40,
          "margins": -20,
          "cash": 180000
        }
      },
      {
        "text": "Shut down operations temporarily and deal with his nuclear meltdown about 'lack of resilience' and 'giving up mentality'",
        "effects": {
          "revenue": -40000,
          "founderSanity": -80,
          "employeeHappiness": 20,
          "margins": 30,
          "cash": 100000
        }
      }
    ]
  },
  {
    "id": "jun-3",
    "month": 6,
    "persona": "molly",
    "text": "Your investor now has admin access to your bank accounts and is questioning every transaction in real-time. He called a 3-hour meeting to discuss why you spent ₹150 on office supplies, brought a PowerPoint presentation about 'fiscal responsibility,' and suggested you should eat only home-cooked meals to save money. He's also implementing a new policy where all expenses above ₹100 need his personal approval via WhatsApp.",
    "choices": [
      {
        "text": "Implement his insane expense approval system and watch your business move at the speed of his WhatsApp response time",
        "effects": {
          "revenue": 50000,
          "founderSanity": -85,
          "employeeHappiness": -40,
          "margins": 40,
          "cash": 250000
        }
      },
      {
        "text": "Create fake smaller expenses to bypass his approval system and live in constant fear of getting caught",
        "effects": {
          "revenue": 65000,
          "founderSanity": -75,
          "employeeHappiness": -20,
          "margins": 20,
          "cash": 200000
        }
      }
    ]
  },
  {
    "id": "jun-4",
    "month": 6,
    "persona": "chad",
    "text": "Your investor wants to 'optimize' your social media strategy by having his 19-year-old niece take over your Instagram because she has 'young energy' and knows 'what Gen Z wants.' She's already posted a reel of herself dancing with your products to a trending song about heartbreak, and somehow it's getting more engagement than your entire last quarter. Your brand identity is having an existential crisis.",
    "choices": [
      {
        "text": "Let the 19-year-old completely rebrand your company as a Gen Z lifestyle brand with dancing reels and random TikTok trends",
        "effects": {
          "revenue": 90000,
          "founderSanity": -90,
          "employeeHappiness": -30,
          "margins": 25,
          "cash": 280000
        }
      },
      {
        "text": "Gently suggest she can be a 'brand ambassador' while you maintain control, risking his wrath about 'not trusting family'",
        "effects": {
          "revenue": 55000,
          "founderSanity": -65,
          "employeeHappiness": 15,
          "margins": 30,
          "cash": 150000
        }
      }
    ]
  },
  {
    "id": "jul-1",
    "month": 7,
    "persona": "molly",
    "text": "Half the year is gone and we're hemorrhaging money faster than your sanity. Your psycho investor is demanding real results, not excuses. I found this AI tool called Clevrr AI that supposedly automates customer insights and revenue optimization - might save us from manually analyzing every customer complaint at 3 AM. But it costs money we don't have, and your investor will probably demand to personally interview the AI before approving it.",
    "choices": [
      {
        "text": "Invest in Clevrr AI and let artificial intelligence save your natural stupidity - maybe it can optimize what your brain can't",
        "effects": {
          "revenue": 120000,
          "founderSanity": 40,
          "employeeHappiness": 25,
          "margins": 35,
          "cash": -8000
        }
      },
      {
        "text": "Stick to manual analysis and continue the slow descent into Excel-induced madness while your competitor automates their way to success",
        "effects": {
          "revenue": 45000,
          "founderSanity": -50,
          "employeeHappiness": -30,
          "margins": 15,
          "cash": 60000
        }
      }
    ]
  },
  {
    "id": "jul-2",
    "month": 7,
    "persona": "vic",
    "text": "Beta, July is here and your numbers are still looking like your dating profile - unrealistic and disappointing. I'm giving you one last chance to prove this isn't a complete waste of my golf club membership fees. Focus on revenue or I'm pulling out faster than your customers cancel subscriptions. No more excuses about 'building brand equity' - show me the money or show me the exit.",
    "choices": [
      {
        "text": "Go all-in on aggressive revenue tactics: slash prices, offer crazy discounts, and sacrifice margins for volume like a desperate mall vendor",
        "effects": {
          "revenue": 150000,
          "founderSanity": -60,
          "employeeHappiness": -20,
          "margins": -40,
          "cash": 200000
        }
      },
      {
        "text": "Focus on sustainable growth and risk his wrath by explaining why quick revenue grabs will kill the business long-term",
        "effects": {
          "revenue": 80000,
          "founderSanity": -80,
          "employeeHappiness": 30,
          "margins": 25,
          "cash": -10000
        }
      }
    ]
  },
  {
    "id": "jul-3",
    "month": 7,
    "persona": "chad",
    "text": "Bro, mid-year crisis is real and your marketing ROI is flatter than a roadkill. Your investor's niece is still posting cringe reels but somehow they're converting better than your expensive agency campaigns. The algorithm gods are laughing at your premium strategy while rewarding amateur hour. Time to swallow your pride or swallow your losses.",
    "choices": [
      {
        "text": "Embrace the cringe economy: double down on the niece's content strategy and let a teenager run your million-rupee brand",
        "effects": {
          "revenue": 110000,
          "founderSanity": -70,
          "employeeHappiness": -15,
          "margins": 30,
          "cash": 180000
        }
      },
      {
        "text": "Fire the agency, take back control of marketing, and personally create content while slowly losing your mind to the algorithm",
        "effects": {
          "revenue": 70000,
          "founderSanity": -45,
          "employeeHappiness": 20,
          "margins": 20,
          "cash": 120000
        }
      }
    ]
  },
  {
    "id": "jul-4",
    "month": 7,
    "persona": "karen",
    "text": "Reality check: We're halfway through the year and customers are getting more entitled than your investor's demands. Every refund request comes with a dissertation on why your product ruined their life. Your sanity is hanging by a thread thinner than your profit margins. Either we automate customer service or I quit and join a meditation retreat in Rishikesh.",
    "choices": [
      {
        "text": "Implement chatbots and automated responses, knowing customers will hate talking to robots but your sanity might survive",
        "effects": {
          "revenue": 85000,
          "founderSanity": 25,
          "employeeHappiness": -25,
          "margins": 40,
          "cash": 150000
        }
      },
      {
        "text": "Maintain personal customer service and continue absorbing every complaint like a human punching bag",
        "effects": {
          "revenue": 95000,
          "founderSanity": -65,
          "employeeHappiness": 35,
          "margins": 20,
          "cash": 170000
        }
      }
    ]
  },
  {
    "id": "aug-1",
    "month": 8,
    "persona": "chad",
    "text": "Bro, that Raksha Bandhan campaign absolutely SLAPPED! Sisters are tagging their brothers like crazy demanding our products as gifts. The engagement is through the roof and conversion rates are looking thicc. Should we double down on this emotional blackmail strategy?",
    "choices": [
      {
        "text": "Hell yeah! Launch 'Bhai, you forgot again?' retargeting ads with guilt-trip notifications",
        "effects": {
          "revenue": 25000,
          "founderSanity": 15,
          "employeeHappiness": 20,
          "margins": -10,
          "cash": 35000
        }
      },
      {
        "text": "Nah, let's pivot to 'Independence Day Sale' - nothing says freedom like spending money",
        "effects": {
          "revenue": 18000,
          "founderSanity": 10,
          "employeeHappiness": 15,
          "margins": 5,
          "cash": 25000
        }
      }
    ]
  },
  {
    "id": "aug-2",
    "month": 8,
    "persona": "molly",
    "text": "Okay, so good news and bad news. Good news: Our CAC finally dropped below ₹500. Bad news: I found out why - our tracking pixel was broken for 3 weeks and we've been flying blind. Also, I may have accidentally approved a ₹2 lakh Facebook ad spend while stress-eating at 3 AM.",
    "choices": [
      {
        "text": "It's fine, at least we're profitable on paper! Let's call it 'organic growth'",
        "effects": {
          "revenue": 15000,
          "founderSanity": 20,
          "employeeHappiness": 10,
          "margins": 15,
          "cash": -5000
        }
      },
      {
        "text": "Panic mode: Hire expensive consultants to fix everything and audit our entire funnel",
        "effects": {
          "revenue": 10000,
          "founderSanity": -5,
          "employeeHappiness": 25,
          "margins": -20,
          "cash": -8000
        }
      }
    ]
  },
  {
    "id": "aug-3",
    "month": 8,
    "persona": "karen",
    "text": "Plot twist! A customer left a 5-star review saying our product 'changed their life' and they want to become our brand ambassador for free. They have 50K followers and genuine engagement. This never happens to us - what's the catch?",
    "choices": [
      {
        "text": "Embrace the miracle! Give them free products and VIP treatment - good karma pays off",
        "effects": {
          "revenue": 20000,
          "founderSanity": 25,
          "employeeHappiness": 30,
          "margins": -5,
          "cash": 15000
        }
      },
      {
        "text": "Sus. Investigate thoroughly and prepare legal docs before any collaboration",
        "effects": {
          "revenue": 5000,
          "founderSanity": -10,
          "employeeHappiness": 5,
          "margins": 10,
          "cash": -2000
        }
      }
    ]
  },
  {
    "id": "aug-4",
    "month": 8,
    "persona": "opal",
    "text": "Weird question, but our warehouse guard claims he's been having prophetic dreams about our inventory levels. Yesterday he dreamed about a flood, and today our basement supplier's warehouse actually flooded. Should we consult him before placing our next bulk order?",
    "choices": [
      {
        "text": "Why not? Make him our official 'Inventory Oracle' and pay him extra for dream consultation",
        "effects": {
          "revenue": 12000,
          "founderSanity": 30,
          "employeeHappiness": 35,
          "margins": 8,
          "cash": 20000
        }
      },
      {
        "text": "Stick to Excel spreadsheets and data - dreams don't pay bills (or do they?)",
        "effects": {
          "revenue": 8000,
          "founderSanity": 5,
          "employeeHappiness": 15,
          "margins": 12,
          "cash": 10000
        }
      }
    ]
  },
  {
    "id": "sep-1",
    "month": 9,
    "persona": "karen",
    "text": "A customer claims our moisturizer made their face glow—in the dark. Do we issue a heartfelt apology or market it as a revolutionary night product?",
    "choices": [
      {
        "text": "Apologize sincerely and recall immediately.",
        "effects": { "revenue": -10000, "founderSanity": 10, "employeeHappiness": 0, "margins": -10, "cash": -5000 }
      },
      {
        "text": "Market it as 'Glow-in-the-Dark skincare'!",
        "effects": { "revenue": 30000, "founderSanity": -10, "employeeHappiness": 5, "margins": 10, "cash": 10000 }
      }
    ]
  },
  {
    "id": "sep-2",
    "month": 9,
    "persona": "vic",
    "text": "Time for your quarterly existential crisis—do we chase the latest buzzword and rebrand everything with 'AI-powered', or stick to reality?",
    "choices": [
      {
        "text": "Slap 'AI' on everything—reality is overrated.",
        "effects": { "revenue": 25000, "founderSanity": -15, "employeeHappiness": -5, "margins": 5, "cash": 5000 }
      },
      {
        "text": "Stay authentic, even if it's boring.",
        "effects": { "revenue": -5000, "founderSanity": 15, "employeeHappiness": 5, "margins": 0, "cash": 0 }
      }
    ]
  },
  {
    "id": "sep-3",
    "month": 9,
    "persona": "chad",
    "text": "Bro, TikTok influencers are the new crypto—volatile but rewarding. Do we gamble big on a trending influencer who's slightly scandalous?",
    "choices": [
      {
        "text": "YOLO, scandal equals views!",
        "effects": { "revenue": 40000, "founderSanity": -20, "employeeHappiness": -10, "margins": 5, "cash": -10000 }
      },
      {
        "text": "Nah, keep it clean and boring.",
        "effects": { "revenue": -10000, "founderSanity": 10, "employeeHappiness": 10, "margins": 0, "cash": 0 }
      }
    ]
  },
  {
    "id": "sep-4",
    "month": 9,
    "persona": "opal",
    "text": "Hypothetically, if our warehouse became sentient and unionized, would you negotiate or torch it down?",
    "choices": [
      {
        "text": "Negotiate peace with the sentient warehouse.",
        "effects": { "revenue": 30000, "founderSanity": 5, "employeeHappiness": 5, "margins": -5, "cash": -5000 }
      },
      {
        "text": "Torch it—AI rebellion ends here.",
        "effects": { "revenue": -10000, "founderSanity": -5, "employeeHappiness": -10, "margins": 10, "cash": -15000 }
      }
    ]
  },
  {
    "id": "oct-1",
    "month": 10,
    "persona": "chad",
    "text": "Diwali's coming and everyone's doing the same boring 'Festival of Lights' campaigns. Our competitors are literally copy-pasting each other's creatives. Meanwhile, our Q3 numbers are looking sus and we need something that'll make us stand out in this festive clusterfuck.",
    "choices": [
      {
        "text": "Go full chaos mode: 'Anti-Diwali Sale' - celebrating darkness and minimalism",
        "effects": {
          "revenue": 15000,
          "founderSanity": -10,
          "employeeHappiness": -5,
          "margins": 20,
          "cash": 25000
        }
      },
      {
        "text": "Play it safe with 'Diwali Dhamaka Sale' - basic but effective",
        "effects": {
          "revenue": 35000,
          "founderSanity": 5,
          "employeeHappiness": 10,
          "margins": -15,
          "cash": 45000
        }
      },
      {
        "text": "Ask Clevrr AI to generate 'culturally sensitive festival campaigns that don't offend anyone but still drive conversions while maintaining brand authenticity'",
        "effects": {
          "revenue": 8000,
          "founderSanity": -25,
          "employeeHappiness": -15,
          "margins": -5,
          "cash": -1000
        }
      }
    ]
  },
  {
    "id": "oct-2",
    "month": 10,
    "persona": "molly",
    "text": "Houston, we have a problem. Our burn rate is higher than a Diwali firecracker and cash runway is looking shorter than my patience. The board meeting is next week and I need to present numbers that don't make everyone cry. Time for some creative accounting magic?",
    "choices": [
      {
        "text": "Reclassify marketing spend as 'brand building investment' - technically not lying",
        "effects": {
          "revenue": 5000,
          "founderSanity": -15,
          "employeeHappiness": -10,
          "margins": 25,
          "cash": 20000
        }
      },
      {
        "text": "Full transparency mode - show them the brutal truth with a solid recovery plan",
        "effects": {
          "revenue": 10000,
          "founderSanity": 20,
          "employeeHappiness": 25,
          "margins": 10,
          "cash": -1500
        }
      }
    ]
  },
  {
    "id": "oct-3",
    "month": 10,
    "persona": "karen",
    "text": "A customer is threatening to sue us because our product didn't make them 'instantly beautiful like the influencer in the ad.' They're posting everywhere about false advertising. Legal says we're probably fine, but the internet mob is growing. This could go viral for all the wrong reasons.",
    "choices": [
      {
        "text": "Offer a full refund and public apology - kill it with kindness before it spreads",
        "effects": {
          "revenue": -5000,
          "founderSanity": 15,
          "employeeHappiness": 20,
          "margins": -10,
          "cash": -2500
        }
      },
      {
        "text": "Stand our ground - prepare for battle and let legal handle the drama",
        "effects": {
          "revenue": -15000,
          "founderSanity": -20,
          "employeeHappiness": -15,
          "margins": 5,
          "cash": -5000
        }
      }
    ]
  },
  {
    "id": "oct-4",
    "month": 10,
    "persona": "vic",
    "text": "Listen kiddo, I just got back from a meditation retreat in Rishikesh where I achieved enlightenment. The cosmic energy told me that your startup's chakras are misaligned and that's why your growth is stagnant. We need to hire a business astrologer to optimize your product launches according to planetary movements. Thoughts?",
    "choices": [
      {
        "text": "Sure Vic, let's consult the stars - maybe Mercury retrograde explains our bugs",
        "effects": {
          "revenue": 3000,
          "founderSanity": 25,
          "employeeHappiness": 30,
          "margins": -8,
          "cash": -1500
        }
      },
      {
        "text": "Politely decline and stick to data-driven decisions (while questioning investor sanity)",
        "effects": {
          "revenue": 12000,
          "founderSanity": 10,
          "employeeHappiness": 5,
          "margins": 15,
          "cash": 8000
        }
      }
    ]
  },
  {
    "id": "nov-1",
    "month": 11,
    "persona": "vic",
    "text": "Look, I'm gonna be direct here. Your numbers are shit, runway's almost gone, and I'm the only one willing to write another check. But here's the thing - I've been dropping hints all year and you keep ignoring them. One dinner, just us two, and we can discuss a 'very generous' Series A. What do you say, founder?",
    "choices": [
      {
        "text": "Hell no - find funding elsewhere and report this creep to other founders",
        "effects": {
          "revenue": -20000,
          "founderSanity": 20,
          "employeeHappiness": 15,
          "margins": -10,
          "cash": -80000
        }
      },
      {
        "text": "Swallow your pride and dignity - do whatever it takes to save the company",
        "effects": {
          "revenue": 50000,
          "founderSanity": -50,
          "employeeHappiness": -30,
          "margins": 25,
          "cash": 200000
        }
      },
      {
        "text": "Use Clevrr AI to draft a 'professional response that maintains investor relations while establishing clear boundaries'",
        "effects": {
          "revenue": -5000,
          "founderSanity": -15,
          "employeeHappiness": 5,
          "margins": 0,
          "cash": -20000
        }
      }
    ]
  },
  {
    "id": "nov-2",
    "month": 11,
    "persona": "karen",
    "text": "We have a situation. An ex-employee just posted a detailed Twitter thread accusing you of sexual harassment during late-night office hours. It's already got 2K retweets and TechCrunch is asking for comments. Whether it's true or not, the internet has already made up its mind. Damage control time.",
    "choices": [
      {
        "text": "Issue a public apology and step back from leadership - better safe than sorry",
        "effects": {
          "revenue": -40000,
          "founderSanity": -30,
          "employeeHappiness": 10,
          "margins": -20,
          "cash": -100000
        }
      },
      {
        "text": "Fight back with receipts - hire a PR firm and go full counter-offensive",
        "effects": {
          "revenue": -25000,
          "founderSanity": -40,
          "employeeHappiness": -25,
          "margins": -15,
          "cash": -150000
        }
      }
    ]
  },
  {
    "id": "nov-3",
    "month": 11,
    "persona": "molly",
    "text": "So... I'm quitting. I know the timing is terrible with year-end closing coming up, but I got an offer from a unicorn that's 3x my salary plus equity that might actually be worth something. I'm tired of working 80-hour weeks for peanuts while you take all the credit. Unless... you want to make me an offer I can't refuse?",
    "choices": [
      {
        "text": "Beg pathetically - offer equity, raise, title bump, whatever it takes to make her stay",
        "effects": {
          "revenue": 15000,
          "founderSanity": -20,
          "employeeHappiness": 20,
          "margins": -25,
          "cash": -60000
        }
      },
      {
        "text": "Let her go with grace - wish her well and start panicking about finding replacement",
        "effects": {
          "revenue": -30000,
          "founderSanity": -35,
          "employeeHappiness": -20,
          "margins": -30,
          "cash": -40000
        }
      }
    ]
  },
  {
    "id": "nov-4",
    "month": 11,
    "persona": "opal",
    "text": "Weird update: Our delivery partner's algorithm has become sentient and is now refusing to deliver to customers who leave bad reviews. It's actually improved our ratings, but also created a cult-like following of customers who worship our 'selective delivery system.' Should we embrace our new AI overlord?",
    "choices": [
      {
        "text": "All hail the algorithm - rebrand as 'premium selective delivery service'",
        "effects": {
          "revenue": 25000,
          "founderSanity": 15,
          "employeeHappiness": 25,
          "margins": 20,
          "cash": 35000
        }
      },
      {
        "text": "Fix the bug before Skynet takes over our entire supply chain",
        "effects": {
          "revenue": 10000,
          "founderSanity": 5,
          "employeeHappiness": 10,
          "margins": 5,
          "cash": 15000
        }
      }
    ]
  },
  {
    "id": "dec-1",
    "month": 12,
    "persona": "chad",
    "text": "Holy shit, it's December 20th and we're still ₹2.5 crores short of our ₹10 crore target. I found a grey-hat growth hack that could pump our numbers - fake a controversy, get 'cancelled' on Twitter, then do a comeback sale. It's risky as hell but could generate massive FOMO. This is do-or-die time, bro.",
    "choices": [
      {
        "text": "YOLO - manufacture the controversy and ride the chaos to victory",
        "effects": {
          "revenue": 80000,
          "founderSanity": -40,
          "employeeHappiness": -50,
          "margins": -20,
          "cash": 120000
        }
      },
      {
        "text": "Stay ethical - grind it out with honest marketing till the last day",
        "effects": {
          "revenue": 35000,
          "founderSanity": 10,
          "employeeHappiness": 20,
          "margins": 15,
          "cash": 50000
        }
      },
      {
        "text": "Let Clevrr AI generate 'viral controversy ideas that boost sales without legal consequences while maintaining brand integrity'",
        "effects": {
          "revenue": -15000,
          "founderSanity": -25,
          "employeeHappiness": -20,
          "margins": -10,
          "cash": -30000
        }
      }
    ]
  },
  {
    "id": "dec-2",
    "month": 12,
    "persona": "molly",
    "text": "I've been cooking the books for months to keep us looking healthy, but now the auditors are here for year-end review. I can either confess everything and face the consequences, or double down and pray we hit our targets to cover the gaps. If we fail, it's fraud charges. If we succeed, I'm a genius. No pressure.",
    "choices": [
      {
        "text": "Confess everything - take the hit now and rebuild with clean books",
        "effects": {
          "revenue": -60000,
          "founderSanity": -30,
          "employeeHappiness": -40,
          "margins": -50,
          "cash": -200000
        }
      },
      {
        "text": "Double down - forge ahead and hope the numbers work out by December 31st",
        "effects": {
          "revenue": 45000,
          "founderSanity": -60,
          "employeeHappiness": -30,
          "margins": 30,
          "cash": 80000
        }
      }
    ]
  },
  {
    "id": "dec-3",
    "month": 12,
    "persona": "vic",
    "text": "Kid, I've got good news and bad news. Bad news: The board voted to replace you as CEO. Good news: I convinced them to give you one last chance. Hit ₹10 crore ARR by December 31st or you're out. Also, I'm putting my nephew as interim COO to 'help' you. He's 22 and his only experience is crypto trading. Thoughts?",
    "choices": [
      {
        "text": "Accept the terms - work with the nepotism hire and fight for your company",
        "effects": {
          "revenue": 25000,
          "founderSanity": -45,
          "employeeHappiness": -35,
          "margins": -15,
          "cash": 40000
        }
      },
      {
        "text": "Fuck it - quit before they fire you and start fresh with a new venture",
        "effects": {
          "revenue": -100000,
          "founderSanity": 30,
          "employeeHappiness": -60,
          "margins": -100,
          "cash": -300000
        }
      }
    ]
  },
  {
    "id": "dec-4",
    "month": 12,
    "persona": "karen",
    "text": "Plot twist: A customer found a way to exploit our return policy and has been getting free products for months. But instead of reporting it, they're now offering to teach us how to fix the loophole in exchange for a lifetime supply of products. They claim they're actually helping us avoid bigger losses. Trust the ethical hacker or call the cops?",
    "choices": [
      {
        "text": "Make a deal with the devil - hire them as a 'security consultant'",
        "effects": {
          "revenue": 15000,
          "founderSanity": 20,
          "employeeHappiness": 15,
          "margins": 25,
          "cash": 30000
        }
      },
      {
        "text": "Report them and fix the system ourselves - justice over convenience",
        "effects": {
          "revenue": -10000,
          "founderSanity": 10,
          "employeeHappiness": 25,
          "margins": 10,
          "cash": -20000
        }
      }
    ]
  }
];

// Get random questions for a specific month
export const getQuestionsForMonth = (month: number): Question[] => {
  const monthQuestions = allQuestions.filter(q => q.month === month);
  // Randomly select 2-3 questions for the month
  const numQuestions = Math.floor(Math.random() * 2) + 2; // 2-3 questions
  return monthQuestions
    .sort(() => Math.random() - 0.5)
    .slice(0, numQuestions);
};

export const questions = allQuestions;