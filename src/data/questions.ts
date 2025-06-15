import { Question } from '../types';

// Questions database with effects on metrics
const allQuestions: Question[] = [
  {
    "id": "jan-1",
    "month": 1,
    "persona": "chad",
    "text": "Our latest Insta campaign just exploded. Orders are flowing in and everything is going smooth as a Lassi.",
    "choices": [
      {
        "text": "Hell yeah! Let’s milk that mutt for virality!",
        "effects": {
          "revenue": 20000,
          "founderSanity": 0,
          "employeeHappiness": 10,
          "margins": -10,
          "cash": -5000
        }
      },
    ]
  },
  {
    "id": "feb-5",
    "month": 2,
    "persona": "molly",
    "text": "I think i fucked up some numbers because a big fat GST notice just dropped.",
    "choices": [
      {
        "text": "You're Fired. But unfuck this please.",
        "effects": {
          "revenue": 5000,
          "founderSanity": 0,
          "employeeHappiness": -15,
          "margins": -20,
          "cash": -18000
        }
      },
      {
        "text": "DIY with YouTube and hope the Nirmala Tai doesn't notice it.",
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
    "id": "feb-6",
    "month": 2,
    "persona": "opal",
    "text": "Supplier accidentally shipped 500 neon-pink bath bombs instead of the neutral ones we ordered. Do we sell them ironically or raise hell?",
    "choices": [
      {
        "text": "Embrace the neon apocalypse, it's Pride Month BABYYY !",
        "effects": {
          "revenue": 50000,
          "founderSanity": -10,
          "employeeHappiness": 10,
          "margins": 20,
          "cash": 50000
        }
      },
      {
        "text": "Send them back—our customers aren't colorblind!",
        "effects": {
          "revenue": -10000,
          "founderSanity": 10,
          "employeeHappiness": -10,
          "margins": 0,
          "cash": -15000
        }
      }
    ]
  },
  {
    "id": "jan-4",
    "month": 1,
    "persona": "chad",
    "text": "Random question—Would you rather fight 100 duck-sized unicorns or 1 unicorn-sized duck? Choose wisely.",
    "choices": [
      {
        "text": "100 duck-sized unicorns—sounds manageable.",
        "effects": {
          "revenue": 10000,
          "founderSanity": -15,
          "employeeHappiness": -5,
          "margins": 0,
          "cash": 0
        }
      },
      {
        "text": "1 unicorn-sized duck. Go big or go home!",
        "effects": {
          "revenue": 10000,
          "founderSanity": 15,
          "employeeHappiness": 15,
          "margins": 0,
          "cash": 0
        }
      },
      {
        "text": "Become a duck and join forces with unicorns.",
        "effects": {
          "revenue": 50000,
          "founderSanity": -15,
          "employeeHappiness": 15,
          "margins": 0,
          "cash": 0
        }
      }
    ]
  },
  {
    "id": "feb-1",
    "month": 2,
    "persona": "vic",
    "text": "I'm super excited invest in you, congratulations! So, wo's getting lucky Valentine's Day today with my money? Your girlfriend or our startup?",
    "choices": [
      {
        "text": "How about I take YOU out for a romantic dinner? *blushes*",
        "effects": {
          "revenue": 35000,
          "founderSanity": -20,
          "employeeHappiness": -20,
          "margins": 25,
          "cash": 55000
        }
      },
      {
        "text": "No Honey, No Money! Fuck, I'm so single T_T",
        "effects": {
          "revenue": 55000,
          "founderSanity": -30,
          "employeeHappiness": 0,
          "margins": 0,
          "cash": -20000
        }
      }
    ]
  },
  {
    "id": "feb-2",
    "month": 2,
    "persona": "chad",
    "text": "Bro, a Twitter influencer with 50k followers but dead engagement wants ₹5 lakhs for a post. YOLO or no-go?",
    "choices": [
      {
        "text": "Pay him. Exposure, bro!",
        "effects": {
          "revenue": -10000,
          "founderSanity": -25,
          "employeeHappiness": 15,
          "margins": -35,
          "cash": -12500
        }
      },
      {
        "text": "Counter-offer with ₹500 and a free gift from our intern",
        "effects": {
          "revenue": 20000,
          "founderSanity": 20,
          "employeeHappiness": -25,
          "margins": 20,
          "cash": -5000
        }
      }
    ]
  },
  {
    "id": "feb-3",
    "month": 2,
    "persona": "karen",
    "text": "I want a maternity leave. My husband is pregnant. Will be back in at least 9 months.",
    choices: [
      {
        "text": "Shut up, let him be a MAN!",
        "effects": {
          "revenue": 10000,
          "founderSanity": -15,
          "employeeHappiness": -25,
          "margins": -15,
          "cash": -10000
        }
      },
      {
        "text": "So where are you going on the vacation?",
        "effects": {
          "revenue": -10000,
          "founderSanity": -20,
          "employeeHappiness": 25,
          "margins": -20,
          "cash": -50000
        }
      }
    ]
  },
  {
    "id": "feb-4",
    "month": 2,
    "persona": "karen",
    "text": "Our rival launched with a founder who looks like Ranbir from Animal and they called you Tiger Shroff from Heropanti. Clap back or chill?",
    "choices": [
      {
        "text": "Hire Dolly Chai wala as Brand Consultant and launch a 'We are not them' campaign",
        "effects": {
          "revenue": 25000,
          "founderSanity": -15,
          "employeeHappiness": 25,
          "margins": -5,
          "cash": -1000
        }
      },
      {
        "text": "Focus on our product but also plot their downfall like a Ekta Kapoor serial",
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
    "text": "Holi hit our warehouse like a rainbow riot. Inventory's pink, delivery guy's high on Bhaang, customers want luxe festive packs. What now?",
    "choices": [
      {
        "text": "Drop a ‘Holi Edition’ at 300% markup. Color = Cash.",
        "effects": {
          "revenue": 15000,
          "founderSanity": 0,
          "employeeHappiness": 30,
          "margins": 35,
          "cash": -30000
        }
      },
      {
        "text": "Shut shop. Declare bhang holiday for all.",
        "effects": {
          "revenue": -25000,
          "founderSanity": 15,
          "employeeHappiness": 30,
          "margins": -10,
          "cash": -10000
        }
      }
    ]
  },
  {
    "id": "mar-2",
    "month": 3,
    "persona": "chad",
    "text": "Good News! We just got featured in YourStory's article. Bad News! The article is titled 'How NOT to run a D2C Brand'",
    "choices": [
      {
        "text": "SHRADHAAAAAAAAAAA, Why do you do this to me?",
        "effects": {
          "revenue": 20000,
          "founderSanity": 0,
          "employeeHappiness": -15,
          "margins": -30,
          "cash": -15000
        }
      },
      {
        "text": "Post 'How NOT to Run a Startup News Media' on LinkedIn",
        "effects": {
          "revenue": -15000,
          "founderSanity": 20,
          "employeeHappiness": 20,
          "margins": 15,
          "cash": -10000
        }
      }
    ]
  },
  {
    "id": "mar-3",
    "month": 3,
    "persona": "vic",
    "text": "Our rival just raised from Blume. You’re still pitching to that one baniya who thinks D2C means ‘Delhi to Chandigarh’. Kya plan hai aage?",
    "choices": [
      {
        "text": "Isme meri Expertise nhi hai, for that reason, I'm out!",
        "effects": {
          "revenue": -10000,
          "founderSanity": 25,
          "employeeHappiness": 5,
          "margins": 0,
          "cash": -12000
        }
      },
      {
        "text": "Get a baniya co-founder for 85% equity",
        "effects": {
          "revenue": 30000,
          "founderSanity": -20,
          "employeeHappiness": -10,
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
    "text": "we mistakenly shipped a box of sexual wellness toys to a customer on her wedding day. She's on the call with her Saas and want's to talk to you",
    "choices": [
      {
        "text": "Pass. Marriages are hell anyways 🤷🏻‍♂️",
        "effects": {
          "revenue": -5000,
          "founderSanity": 0,
          "employeeHappiness": -35,
          "margins": -25,
          "cash": -2000
        }
      },
      {
        "text": "Pehle khud istemaal karo fir vishwaas karo.",
        "effects": {
          "revenue": 15000,
          "founderSanity": 15,
          "employeeHappiness": 15,
          "margins": 15,
          "cash": -35000
        }
      }
    ]
  },
  {
    "id": "apr-1",
    "month": 4,
    "persona": "chad",
    "text": "Bro, Instagram influencers are now asking for kidney money upfront because new iPhone launch is coming up, but our CAC is higher than Elon when he's posting on X, and IDK what to do now.",
    "choices": [
      {
        "text": "Rage on insta & gain sympathy",
        "effects": {
          "revenue": -40000,
          "founderSanity": 0,
          "employeeHappiness": 0,
          "margins": -30,
          "cash": -10000
        }
      },
      {
        "text": "Post '10 Things I learnt about Entreprenuership from beggars on the streets' on LinkedIn",
        "effects": {
          "revenue": 50000,
          "founderSanity": 15,
          "employeeHappiness": 25,
          "margins": -10,
          "cash": -10000
        }
      }
    ]
  },
  {
    "id": "apr-2",
    "month": 4,
    "persona": "vic",
    "text": "Your competitor got ₹2Cr on Shark Tank. Even Namita invested in their 'revolutionary' product YOU launched it 3 months ago. Dafaq?",
    "choices": [
      {
        "text": "Desperately apply for Season 69",
        "effects": {
          "revenue": 20000,
          "founderSanity": -10,
          "employeeHappiness": 10,
          "margins": -25,
          "cash": -8000
        }
      },
      {
        "text": "Why are you here for? Gimme more money, daddy.",
        "effects": {
          "revenue": 10000,
          "founderSanity": 15,
          "employeeHappiness": 0,
          "margins": -10,
          "cash": 30000
        }
      }
    ]
  },
  {
    "id": "apr-3",
    "month": 4,
    "persona": "molly",
    "text": "We have more spreadsheets than Mumbai has potholes. Can we please invest in decent analytics tools? I don't wanna lose my sanity before my virginity.",
    "choices": [
      {
        "text": "Fine, give the spreadsheets a funeral.",
        "effects": {
          "revenue": 55000,
          "founderSanity": 20,
          "employeeHappiness": 10,
          "margins": 0,
          "cash": -10000
        }
      },
      {
        "text": "Well, I can certainly help you in loosing one of them, hehe.",
        "effects": {
          "revenue": -25000,
          "founderSanity": -10,
          "employeeHappiness": -30,
          "margins": 10,
          "cash": 10000
        }
      }
    ]
  },
  {
    "id": "apr-4",
    "month": 4,
    "persona": "karen",
    "text": "Turns out our ‘artisanal’ soap is made next to a fish market. Abhi & Niyu exposed it. Comments are bloodier than our college breakup.",
    "choices": [
      {
        "text": "Fake it harder. Hire actors to be village soap artisans.",
        "effects": {
          "revenue": 35000,
          "founderSanity": -25,
          "employeeHappiness": -30,
          "margins": -10,
          "cash": -15000
        }
      },
      {
        "text": "Pull a Vijay Mallya move and become a patriot on a podcast explaining how 'mass production is the future of Indian craftsmanship' while sipping on a Kingfisher",
        "effects": {
          "revenue": 10000,
          "founderSanity": 35,
          "employeeHappiness": 15,
          "margins": 5,
          "cash": -25000
        }
      }
    ]
  },
  {
    "id": "may-1",
    "month": 5,
    "persona": "vic",
    "text": "I want 10x growth by Diwali or I'm pulling out (unlike your dad). Also, I'm gonna send Wharton nephew to 'fix' your biz.",
    "choices": [
      {
        "text": "Let Wharton bro take over. Die inside quietly.",
        "effects": {
          "revenue": -60000,
          "founderSanity": -30,
          "employeeHappiness": -35,
          "margins": -30,
          "cash": 150000
        }
      },
      {
        "text": "Let newphew watch, but no touching. also, no 'that's what she said' jokes allowed.",
        "effects": {
          "revenue": 25000,
          "founderSanity": 0,
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
    "text": "Summer demand is 🔥 but our supplier’s factory is literally on fire. Competitor's doing drone delivery. We're still on rickshaws.",
    "choices": [
      {
        "text": "Team up with a bootstrap delivery startup and become their first client.",
        "effects": {
          "revenue": -10000,
          "founderSanity": 0,
          "employeeHappiness": -15,
          "margins": -20,
          "cash": -10000
        }
      },
      {
        "text": "Keep rickshaws. Call it ‘eco-friendly logistics’. Change Payment mode to chai-sutta",
        "effects": {
          "revenue": 45000,
          "founderSanity": 25,
          "employeeHappiness": 25,
          "margins": 30,
          "cash": 55000
        }
      }
    ]
  },
  {
    "id": "may-3",
    "month": 5,
    "persona": "molly",
    "text": "Investors found out about the 1,40,000 cocaine party we did last time. They're asking some questions.",
    "choices": [
      {
        "text": "Invite them to the next Cocaine party.",
        "effects": {
          "revenue": 55000,
          "founderSanity": 30,
          "employeeHappiness": 10,
          "margins": -25,
          "cash": -30000
        }
      },
      {
        "text": "Lemme do some more and then decide.",
        "effects": {
          "revenue": 35000,
          "founderSanity": -30,
          "employeeHappiness": -30,
          "margins": 0,
          "cash": -8000
        }
      }
    ]
  },
  {
    "id": "may-4",
    "month": 5,
    "persona": "chad",
    "text": "You got banned for posting 'Building Startups by watch Twitter and Podcast is like learning to have Sex while watch porn' on LinkedIn.",
    "choices": [
      {
        "text": "Re-post with Examples.",
        "effects": {
          "revenue": 80000,
          "founderSanity": 15,
          "employeeHappiness": -20,
          "margins": 35,
          "cash": 22000
        }
      },
      {
        "text": "LinkedIn is overrated. Post this on Reddit and watch me become famous 😎",
        "effects": {
          "revenue": 40000,
          "founderSanity": -15,
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
    "text": "I've installed security cameras in your office to monitor 'productivity metrics' and I'm getting live feeds on my phone. I saw you took a 7-minute chai break yesterday - that's ₹47 of lost productivity according to my calculations.",
    "choices": [
      {
        "text": "50 Rupaya kaat overacting ka",
        "effects": {
          "revenue": 85000,
          "founderSanity": -25,
          "employeeHappiness": 0,
          "margins": 15,
          "cash": -12000
        }
      },
      {
        "text": "Change Office or Change Investor. Or Both. Or None.",
        "effects": {
          "revenue": 30000,
          "founderSanity": 20,
          "employeeHappiness": -10,
          "margins": 25,
          "cash": -55000
        }
      }
    ]
  },
  {
    "id": "jun-2",
    "month": 6,
    "persona": "opal",
    "text": "Boss, our Mumbai’s Warehouse has become a pool in this monsoon. Do we swim the orders to delivery?",
    "choices": [
      {
        "text": "Rent boats. Become D2C Baywatch.",
        "effects": {
          "revenue": 70000,
          "founderSanity": -10,
          "employeeHappiness": -30,
          "margins": -20,
          "cash": -80000
        }
      },
      {
        "text": "Shut down operations and enjoy the monsoon like the homeless kids on the streets.",
        "effects": {
          "revenue": -40000,
          "founderSanity": 20,
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
    "text": "Investor's got bank access. He moaned over a ₹150 coffee supply and now wants to approve every ₹100+ spend via WhatsApp. Says home-cooked meals boost margins *and morals*.",
    "choices": [
      {
        "text": "Submit to his ₹100 kink.",
        "effects": {
          "revenue": -10000,
          "founderSanity": -15,
          "employeeHappiness": -30,
          "margins": -30,
          "cash": -25000
        }
      },
      {
        "text": "Sneak in fake ₹99 spends. Cheat on him—but quietly.",
        "effects": {
          "revenue": 65000,
          "founderSanity": 25,
          "employeeHappiness": -20,
          "margins": 0,
          "cash": 20000
        }
      }
    ]
  },
  {
    "id": "jun-4",
    "month": 6,
    "persona": "chad",
    "text": "Investor’s Gen Z niece hacked our Insta. She’s twerking with our product and no bra to a heartbreak remix—and it’s outperforming our Q4. Brand’s having an identity crisis.",
    "choices": [
      {
        "text": "Let her rebrand it all.",
        "effects": {
          "revenue": 90000,
          "founderSanity": 20,
          "employeeHappiness": -35,
          "margins": 25,
          "cash": 280000
        }
      },
      {
        "text": "Dikha Dikha, mujhe bhi dikha.",
        "effects": {
          "revenue": 0,
          "founderSanity": -15,
          "employeeHappiness": 15,
          "margins": 0,
          "cash": 0
        }
      }
    ]
  },
  {
    "id": "jul-1",
    "month": 7,
    "persona": "molly",
    "text": "Half the year gone. We’re bleeding cash and our investor wants your blood like a Vampire. I found this tool called Clevrr AI - might save us from manually analyzing every customer complaint at 3 AM. But it costs money we don't have.",
    "choices": [
      {
        "text": "Get Clevrr AI. Let AI fix what your brain broke.",
        "effects": {
          "revenue": 12000,
          "founderSanity": 40,
          "employeeHappiness": 25,
          "margins": 35,
          "cash": -18000
        }
      },
      {
        "text": "The only AI I need in my life is Alcohol Intake.",
        "effects": {
          "revenue": -20000,
          "founderSanity": -40,
          "employeeHappiness": -30,
          "margins": 0,
          "cash": 18000
        }
      }
    ]
  },
  {
    "id": "jul-2",
    "month": 7,
    "persona": "vic",
    "text": "It’s July. Your numbers look like your Tinder bio—unrealistic and sad. Show me money or I show you the exit.",
    "choices": [
      {
        "text": "Jokes on you, I'm only on Grindr",
        "effects": {
          "revenue": 150000,
          "founderSanity": -20,
          "employeeHappiness": -20,
          "margins": -40,
          "cash": 0
        }
      },
      {
        "text": "Why are you looking at my Tinder?",
        "effects": {
          "revenue": 80000,
          "founderSanity": 0,
          "employeeHappiness": 0,
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
    "text": "Mid-year crisis. Our ROI’s flatter than my wife. Investor’s niece is winning with cringe reels and thirst traps. Algo gods hate our premium vibes.",
    "choices": [
      {
        "text": "Let Gen Z run wild. Cringe = conversions now.",
        "effects": {
          "revenue": 90000,
          "founderSanity": -10,
          "employeeHappiness": -25,
          "margins": 0,
          "cash": 98000
        }
      },
      {
        "text": "Fire agency. DIY content till the algorithm breaks you.",
        "effects": {
          "revenue": 70000,
          "founderSanity": -25,
          "employeeHappiness": -20,
          "margins": -20,
          "cash": 120000
        }
      }
    ]
  },
  {
    "id": "jul-4",
    "month": 7,
    "persona": "karen",
    "text": "Half-year in, and refund requests now come with trauma essays. I’m one angry email away from vanishing to Rishikesh.",
    "choices": [
      {
        "text": "Take me with you T_T",
        "effects": {
          "revenue": -15000,
          "founderSanity": 0,
          "employeeHappiness": 25,
          "margins": -10,
          "cash": -150000
        }
      },
      {
        "text": "Go to Thailand instead.",
        "effects": {
          "revenue": 0,
          "founderSanity": 0,
          "employeeHappiness": 0,
          "margins": 0,
          "cash": 0
        }
      }
    ]
  },
  {
    "id": "aug-1",
    "month": 8,
    "persona": "chad",
    "text": "Bro, that Rakhi campaign slapped. Sisters are tagging like mad. Guilt = conversions. Push it or pivot?",
    "choices": [
      {
        "text": "Double down. Launch ‘Bhai, you forgot?’ guilt ads.",
        "effects": {
          "revenue": 25000,
          "founderSanity": 15,
          "employeeHappiness": 20,
          "margins": -10,
          "cash": 35000
        }
      },
      {
        "text": "Launch a 'Gandhi ji ki Yojna' campaign. Those who know, know.",
        "effects": {
          "revenue": 18000,
          "founderSanity": 10,
          "employeeHappiness": -15,
          "margins": -5,
          "cash": -20000
        }
      }
    ]

  },
  {
    "id": "aug-2",
    "month": 8,
    "persona": "molly",
    "text": "Okay, so good news and bad news. Good news: CAC < ₹500. Bad news: Pixel was dead for 3 weeks. Also, I blew ₹2L on FB ads mid-snack spiral.",
    "choices": [
      {
        "text": "‘organic growth’ and vibe BABY!",
        "effects": {
          "revenue": 15000,
          "founderSanity": 20,
          "employeeHappiness": 10,
          "margins": 15,
          "cash": -200000
        }
      }
    ]
  },
  {
    "id": "aug-3",
    "month": 8,
    "persona": "karen",
    "text": "Plot twist: Someone left a 5-star review and wants to be a free brand ambassador. 50K legit followers. Too good to be true?",
    "choices": [
      {
        "text": "Hey! I have a girlfriend.",
        "effects": {
          "revenue": 20000,
          "founderSanity": 25,
          "employeeHappiness": 30,
          "margins": -5,
          "cash": 15000
        }
      },
      {
        "text": "Buuuttttt! It's a Long-Distance Relationship!",
        "effects": {
          "revenue": 5000,
          "founderSanity": -10,
          "employeeHappiness": -25,
          "margins": -10,
          "cash": -20000
        }
      }
    ]
  },
  {
    "id": "aug-4",
    "month": 8,
    "persona": "opal",
    "text": "Our warehouse guard had a dream about a flood. Next day—actual flood. Should we consult him for inventory planning?",
    "choices": [
      {
        "text": "Promote him to ‘Inventory Oracle’. Pay per prophecy.",
        "effects": {
          "revenue": 12000,
          "founderSanity": 30,
          "employeeHappiness": 35,
          "margins": 10,
          "cash": 20000
        }
      },
      {
        "text": "Ask him 'Meri Shaadi Kab Hogi?'",
        "effects": {
          "revenue": 8000,
          "founderSanity": -5,
          "employeeHappiness": 15,
          "margins": -20,
          "cash": 10000
        }
      }
    ]
  },
  {
    "id": "sep-1",
    "month": 9,
    "persona": "karen",
    "text": "Customer says our moisturizer made their face glow... in the dark. There is a slight possibility we might have added Radium in it?",
    "choices": [
      {
        "text": "They asked for a Glow. What's wrong in that?",
        "effects": {
          "revenue": -10000,
          "founderSanity": 10,
          "employeeHappiness": -10,
          "margins": -10,
          "cash": -50000
        }
      },
      {
        "text": "THIS IS REVOLUTIONARY (and deadly but focus on the former more)",
        "effects": {
          "revenue": 120000,
          "founderSanity": -10,
          "employeeHappiness": -25,
          "margins": -10,
          "cash": -10000
        }
      }
    ]
  },
  {
    "id": "sep-2",
    "month": 9,
    "persona": "vic",
    "text": "Flipkart just launched a ‘Made in India AI’ badge. Should we rebrand our masala-scented candles as ‘AI-curated wellness tech’ or keep calling them what they are—fancy wax?",
    "choices": [
      {
        "text": "Yes. Train the candle on ChatGPT and call it a ‘Mood Forecasting Module’.",
        "effects": {
          "revenue": 42000,
          "founderSanity": -20,
          "employeeHappiness": -10,
          "margins": 15,
          "cash": 10000
        }
      },
      {
        "text": "No. Put the candle in a kurta, name it ‘Aromacharya’ and make it chant OM when lit.",
        "effects": {
          "revenue": 107000,
          "founderSanity": 10,
          "employeeHappiness": 0,
          "margins": -15,
          "cash": 80000
        }
      }
    ]
  },
  {
    "id": "sep-3",
    "month": 9,
    "persona": "chad",
    "text": "I quit.",
    "choices": [
      {
        "text": "You want a house, a girlfriend, a vibrator and a lamborghini? Please stay.",
        "effects": {
          "revenue": 90000,
          "founderSanity": -20,
          "employeeHappiness": 40,
          "margins": -35,
          "cash": -100000
        }
      },
      {
        "text": "You quit? I FIRE YOU!",
        "effects": {
          "revenue": -100000,
          "founderSanity": -30,
          "employeeHappiness": -40,
          "margins": -30,
          "cash": -30000
        }
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
        "effects": {
          "revenue": 30000,
          "founderSanity": 5,
          "employeeHappiness": 5,
          "margins": -5,
          "cash": -5000
        }
      },
      {
        "text": "Torch it—AI rebellion ends here.",
        "effects": {
          "revenue": -10000,
          "founderSanity": -5,
          "employeeHappiness": -10,
          "margins": 10,
          "cash": -15000
        }
      }
    ]
  },
  {
    "id": "oct-1",
    "month": 10,
    "persona": "chad",
    "text": "Diwali's here and every brand is doing the same 'Festival of Lights' bullshit. Our Q3 numbers are trash. Need something that doesn't suck.",
    "choices": [
      {
        "text": "Do a 'Why Just Diwali - #BanCrackersEverytime' campaign",
        "effects": {
          "revenue": 15000,
          "founderSanity": -10,
          "employeeHappiness": -5,
          "margins": 20,
          "cash": 25000
        }
      },
      {
        "text": "Boom Bap Bap Boom Boom Bap Bam. The type of Shi...",
        "effects": {
          "revenue": 35000,
          "founderSanity": 5,
          "employeeHappiness": 10,
          "margins": -15,
          "cash": 45000
        }
      },
    ]
  },
  {
    "id": "oct-2",
    "month": 10,
    "persona": "molly",
    "text": "We're fucked. Burn rate through the roof, runway's dead, board meeting is next week. So...?",
    "choices": [
      {
        "text": "Wear a deep neck and distract investors with you Cleavage.",
        "effects": {
          "revenue": 10000,
          "founderSanity": 15,
          "employeeHappiness": -30,
          "margins": 0,
          "cash": 0
        }
      },
      {
        "text": "Full transparency mode - show them the brutal truth with a solid recovery plan",
        "effects": {
          "revenue": 10000,
          "founderSanity": 20,
          "employeeHappiness": -25,
          "margins": 10,
          "cash": -15000
        }
      },
      {
        "text": "Maybe Clevrr AI can unfuck us in one Week?",
        "effects": {
          "revenue": 10000,
          "founderSanity": 30,
          "employeeHappiness": 45,
          "margins": 0,
          "cash": -15000
        }
      }
    ]
  },
  {
    "id": "oct-3",
    "month": 10,
    "persona": "karen",
    "text": "We've got a delusional customer who thought our cream would make them look like that filtered influencer.",
    "choices": [
      {
        "text": "Pay the ransom - refund their ugly ass and beg for mercy",
        "effects": {
          "revenue": -50000,
          "founderSanity": 15,
          "employeeHappiness": -20,
          "margins": -10,
          "cash": -25000
        }
      },
      {
        "text": "Fuck around and find out - let's see how deep this rabbit hole goes",
        "effects": {
          "revenue": 15000,
          "founderSanity": -20,
          "employeeHappiness": -15,
          "margins": 5,
          "cash": 50000
        }
      }
    ]
  },
  {
    "id": "oct-4",
    "month": 10,
    "persona": "vic",
    "text": "Just got enlightened in Rishikesh. Your startup's chakras are fucked. We need a business astrologer.",
    "choices": [
      {
        "text": "Smile, nod, and pray this lunatic doesn't pull funding",
        "effects": {
          "revenue": 75000,
          "founderSanity": 10,
          "employeeHappiness": 5,
          "margins": 15,
          "cash": 80000
        }
      }
    ]
  },
  {
    "id": "nov-1",
    "month": 11,
    "persona": "vic",
    "text": "Look, I'm gonna be direct here. Your numbers are shit, I'm your only funding option left. One dinner, just us two, and we'll discuss a 'very generous' Series A. What do you say? *blushes*",
    "choices": [
      {
        "text": "Hell no - find funding elsewhere and report this creep to other founders",
        "effects": {
          "revenue": 20000,
          "founderSanity": 20,
          "employeeHappiness": 0,
          "margins": 0,
          "cash": 180000
        }
      },
      {
        "text": "Swallow your pride and dignity, and whatever else he puts into your mouth",
        "effects": {
          "revenue": 90000,
          "founderSanity": -30,
          "employeeHappiness": -30,
          "margins": 0,
          "cash": 200000
        }
      },
      {
        "text": "Ask Clevrr AI to fix the numbers and tell this asshole to fuck off",
        "effects": {
          "revenue": 150000,
          "founderSanity": 35,
          "employeeHappiness": 55,
          "margins": 30,
          "cash": -20000
        }
      }
    ]
  },
  {
    "id": "nov-2",
    "month": 11,
    "persona": "karen",
    "text": "I quit",
    "choices": [
      {
        "text": "Wait, please! Name your price - equity, salary bump, orgasms, whatever you want",
        "effects": {
          "revenue": -40000,
          "founderSanity": -30,
          "employeeHappiness": 10,
          "margins": -20,
          "cash": -100000
        }
      },
      {
        "text": "Good riddance - we'll replace you with someone who actually gives a shit",
        "effects": {
          "revenue": 99000,
          "founderSanity": -10,
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
    "persona": "opal",
    "text": "Weird update: Our delivery AI became sentient and only ships to customers with good reviews. Ratings are up, customers worship us. Embrace our robot overlord?",
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
          "revenue": 100000,
          "founderSanity": 5,
          "employeeHappiness": -30,
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
    "text": "oh FUCK, it's Dec 15th, and we're still short of our Target. Here's a hack - fake a death controversy, get cancelled, then do a comeback sale. Risky but could work.",
    "choices": [
      {
        "text": "This sounds... Familiar. Have you heard of some Pandey?",
        "effects": {
          "revenue": 200000,
          "founderSanity": 30,
          "employeeHappiness": 50,
          "margins": 20,
          "cash": 120000
        }
      },
      {
        "text": "Who's gonna die!",
        "effects": {
          "revenue": 35000,
          "founderSanity": 10,
          "employeeHappiness": 20,
          "margins": 15,
          "cash": 50000
        }
      },
      {
        "text": "Ask Clevrr AI 'viral controversy ideas that boost sales'",
        "effects": {
          "revenue": 150000,
          "founderSanity": 25,
          "employeeHappiness": 20,
          "margins": 10,
          "cash": 90000
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
  const availableCount = monthQuestions.length;

  if (availableCount < 2) {
    // Not enough questions — return all (0 or 1)
    return monthQuestions;
  }

  // Choose 2 or 3 questions, but no more than availableCount
  const numQuestions = Math.min(
    Math.floor(Math.random() * 2) + 2, // 2 or 3
    availableCount
  );

  console.log(numQuestions);
  

  // Shuffle and return the selected number
  return monthQuestions
    .sort(() => Math.random() - 0.5)
    .slice(0, numQuestions);
};

export const questions = allQuestions;