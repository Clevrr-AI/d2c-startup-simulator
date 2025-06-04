import { Question } from '../types';

// Questions database with effects on metrics
const allQuestions: Question[] = [
  {
    "id": "jan-1",
    "month": 1,
    "persona": "chad",
    "text": "Brooo, should we blow our entire budget on an ex-Roadies influencer to shout us out during a Mukbang livestream?",
    "choices": [
      {
        "text": "Yes, virality is a strategy. ROI is for losers with Excel sheets.",
        "effects": {
          "revenue": 30000,
          "founderSanity": -20,
          "employeeHappiness": -5,
          "margins": -15
        }
      },
      {
        "text": "Not unless we’re selling instant noodles. Let’s pass.",
        "effects": {
          "revenue": 10000,
          "founderSanity": 5,
          "employeeHappiness": 5,
          "margins": 5
        }
      }
    ]
  },
  {
    "id": "jan-2",
    "month": 1,
    "persona": "karen",
    "text": "A customer posted a viral reel showing our packaging being used as a duster. Should we rebrand or cry?",
    "choices": [
      {
        "text": "Let’s run with it. ‘Multipurpose packaging’ is now our USP.",
        "effects": {
          "revenue": 20000,
          "founderSanity": -10,
          "employeeHappiness": 5,
          "margins": 0
        }
      },
      {
        "text": "Issue a strongly worded tweet and blame logistics.",
        "effects": {
          "revenue": 5000,
          "founderSanity": 0,
          "employeeHappiness": -5,
          "margins": 5
        }
      }
    ]
  },
  {
    "id": "feb-1",
    "month": 2,
    "persona": "opal",
    "text": "Factory guy says he’ll ‘deliver on time for sure’ and then vanishes like your gym motivation. Switch vendors?",
    "choices": [
      {
        "text": "Yes. Let’s trust a WhatsApp contact saved as ‘Jeans Bhai 💀’.",
        "effects": {
          "revenue": 25000,
          "founderSanity": -15,
          "employeeHappiness": -10,
          "margins": 10
        }
      },
      {
        "text": "Nope. We’ll beg our OG vendor with free Amazon gift cards.",
        "effects": {
          "revenue": 15000,
          "founderSanity": -5,
          "employeeHappiness": 5,
          "margins": -5
        }
      }
    ]
  },
  {
    "id": "feb-2",
    "month": 2,
    "persona": "vic",
    "text": "You’re clearly drowning in 27 tabs and panic metrics. Should we try this new thing called Clevrr AI or continue spiritual suffering?",
    "choices": [
      {
        "text": "Clevrr me up, daddy. Let’s kill some tabs and live a little.",
        "effects": {
          "revenue": 20000,
          "founderSanity": 20,
          "employeeHappiness": 10,
          "margins": 10
        }
      },
      {
        "text": "No way. My Excel sheet has 69 tabs and a soul. I trust it.",
        "effects": {
          "revenue": 5000,
          "founderSanity": -20,
          "employeeHappiness": -10,
          "margins": -5
        }
      }
    ]
  },
  {
    "id": "mar-1",
    "month": 3,
    "persona": "molly",
    "text": "Revenue’s up but so is our return rate—like an Indian uncle at a buffet. Fix policies or manifest karma?",
    "choices": [
      {
        "text": "Tighten return policy. Let’s gaslight customers with ‘final sale’ stickers.",
        "effects": {
          "revenue": 20000,
          "founderSanity": 5,
          "employeeHappiness": -5,
          "margins": 15
        }
      },
      {
        "text": "Offer returns with cashback and therapy. What could go wrong?",
        "effects": {
          "revenue": 10000,
          "founderSanity": -10,
          "employeeHappiness": 10,
          "margins": -15
        }
      }
    ]
  },
  {
    "id": "mar-2",
    "month": 3,
    "persona": "chad",
    "text": "Our ad ROAS is deader than Orkut. Shall we run a ‘Buy 1, Regret 2’ Holi campaign?",
    "choices": [
      {
        "text": "Yes, colors fade but chaos is forever. Run it!",
        "effects": {
          "revenue": 35000,
          "founderSanity": -15,
          "employeeHappiness": 0,
          "margins": -10
        }
      },
      {
        "text": "Maybe not. Let’s A/B test with something less... traumatic.",
        "effects": {
          "revenue": 15000,
          "founderSanity": 10,
          "employeeHappiness": 5,
          "margins": 5
        }
      }
    ]
  },
  {
    "id": "apr-1",
    "month": 4,
    "persona": "opal",
    "text": "Our courier partner just ‘accidentally’ delivered 400 packages to the wrong city. Should we send handwritten apology letters?",
    "choices": [
      {
        "text": "Yes, let’s embrace Gandhigiri and pray for PR redemption.",
        "effects": {
          "revenue": 15000,
          "founderSanity": -10,
          "employeeHappiness": 5,
          "margins": -10
        }
      },
      {
        "text": "Nope. Shift blame to ‘technical glitch’ like every big corp.",
        "effects": {
          "revenue": 10000,
          "founderSanity": 5,
          "employeeHappiness": -5,
          "margins": 5
        }
      }
    ]
  },
  {
    "id": "apr-2",
    "month": 4,
    "persona": "karen",
    "text": "Our vegan face cream turned someone purple on Instagram. Apologize or collab with them as our next ambassador?",
    "choices": [
      {
        "text": "Collab! Let’s call it #PurpleIsTheNewGlow.",
        "effects": {
          "revenue": 25000,
          "founderSanity": -5,
          "employeeHappiness": 0,
          "margins": -10
        }
      },
      {
        "text": "Apologize and pull the lot off shelves. RIP margins.",
        "effects": {
          "revenue": -5000,
          "founderSanity": -10,
          "employeeHappiness": 5,
          "margins": -20
        }
      }
    ]
  },
  {
    "id": "may-1",
    "month": 5,
    "persona": "vic",
    "text": "Investor wants daily dashboards, weekly updates, and bi-hourly prayers. Do we send a Notion link or fake an outage?",
    "choices": [
      {
        "text": "Send him a Notion dashboard with 17 graphs. Nobody reads it anyway.",
        "effects": {
          "revenue": 10000,
          "founderSanity": -15,
          "employeeHappiness": -5,
          "margins": 0
        }
      },
      {
        "text": "Blame AWS and say we lost the data. Again.",
        "effects": {
          "revenue": 5000,
          "founderSanity": 10,
          "employeeHappiness": 0,
          "margins": 5
        }
      }
    ]
  },
  {
    "id": "may-2",
    "month": 5,
    "persona": "chad",
    "text": "Should we pivot to Web3-enabled D2C NFTs for our customers?",
    "choices": [
      {
        "text": "Absolutely. Nothing says product-market fit like blockchain buzzwords.",
        "effects": {
          "revenue": 20000,
          "founderSanity": -20,
          "employeeHappiness": -10,
          "margins": -10
        }
      },
      {
        "text": "Please no. Let’s stick to selling shampoo, not JPEGs.",
        "effects": {
          "revenue": 10000,
          "founderSanity": 10,
          "employeeHappiness": 5,
          "margins": 5
        }
      }
    ]
  },
  {
    "id": "jun-1",
    "month": 6,
    "persona": "opal",
    "text": "Warehouse is overflowing with unsold stock. Flash sale or spiritual cleansing?",
    "choices": [
      {
        "text": "Flash sale! Slap 90% OFF tags and pretend it’s strategy.",
        "effects": {
          "revenue": 30000,
          "founderSanity": -10,
          "employeeHappiness": 0,
          "margins": -20
        }
      },
      {
        "text": "Let’s do a ‘Bonfire of Broken SKUs’ and meditate.",
        "effects": {
          "revenue": 5000,
          "founderSanity": 10,
          "employeeHappiness": 5,
          "margins": 5
        }
      }
    ]
  },
  {
    "id": "jun-2",
    "month": 6,
    "persona": "karen",
    "text": "Should we pretend to care about World Environment Day?",
    "choices": [
      {
        "text": "Yes. One plant per order and unlimited greenwashing.",
        "effects": {
          "revenue": 15000,
          "founderSanity": 5,
          "employeeHappiness": 5,
          "margins": -5
        }
      },
      {
        "text": "Nah. Let’s save the effort and keep killing trees.",
        "effects": {
          "revenue": 5000,
          "founderSanity": -5,
          "employeeHappiness": -5,
          "margins": 10
        }
      }
    ]
  },
  {
    "id": "jul-1",
    "month": 7,
    "persona": "molly",
    "text": "Customer acquisition cost just doubled. Should we switch to handing flyers outside malls?",
    "choices": [
      {
        "text": "Yes, old school never fails. Also burns calories.",
        "effects": {
          "revenue": 10000,
          "founderSanity": -10,
          "employeeHappiness": -10,
          "margins": 5
        }
      },
      {
        "text": "Nope. Let’s burn more VC money on Instagram ads.",
        "effects": {
          "revenue": 20000,
          "founderSanity": -15,
          "employeeHappiness": 0,
          "margins": -10
        }
      }
    ]
  },
  {
    "id": "jul-2",
    "month": 7,
    "persona": "vic",
    "text": "Our RTO is higher than our conversions. Should we start a temple and pray instead?",
    "choices": [
      {
        "text": "Yes. New SKU: incense sticks and coping candles.",
        "effects": {
          "revenue": 5000,
          "founderSanity": 10,
          "employeeHappiness": 10,
          "margins": 0
        }
      },
      {
        "text": "Fix our return process instead. Ugh, boring ops work.",
        "effects": {
          "revenue": 15000,
          "founderSanity": -5,
          "employeeHappiness": 5,
          "margins": 5
        }
      }
    ]
  },
  {
    "id": "aug-1",
    "month": 8,
    "persona": "chad",
    "text": "Should we run a Raksha Bandhan bundle with a weird ‘sibling discount’ twist?",
    "choices": [
      {
        "text": "Do it. Let’s milk Indian sentiments till they cry.",
        "effects": {
          "revenue": 30000,
          "founderSanity": -10,
          "employeeHappiness": 0,
          "margins": -10
        }
      },
      {
        "text": "No. That’s mildly creepy and totally desperate.",
        "effects": {
          "revenue": 10000,
          "founderSanity": 5,
          "employeeHappiness": 5,
          "margins": 5
        }
      }
    ]
  },
  {
    "id": "aug-2",
    "month": 8,
    "persona": "karen",
    "text": "Influencer calls us out for 'toxic packaging'. Should we offer them a paid collab to shut up?",
    "choices": [
      {
        "text": "Yes, silence is golden—and expensive.",
        "effects": {
          "revenue": 15000,
          "founderSanity": -10,
          "employeeHappiness": 0,
          "margins": -10
        }
      },
      {
        "text": "Counter-sue them for defamation and pray for clout.",
        "effects": {
          "revenue": 10000,
          "founderSanity": -15,
          "employeeHappiness": 5,
          "margins": -5
        }
      }
    ]
  },
  {
    "id": "sep-1",
    "month": 9,
    "persona": "opal",
    "text": "COGS have spiked again. Switch to cheaper ingredients or cry into our empty wallets?",
    "choices": [
      {
        "text": "Yes, who needs quality when you have margin goals?",
        "effects": {
          "revenue": 20000,
          "founderSanity": -5,
          "employeeHappiness": -5,
          "margins": 10
        }
      },
      {
        "text": "Nope. We ride or die with premium aloe vera.",
        "effects": {
          "revenue": 10000,
          "founderSanity": -10,
          "employeeHappiness": 5,
          "margins": -10
        }
      }
    ]
  },
  {
    "id": "sep-2",
    "month": 9,
    "persona": "molly",
    "text": "Sales look okay but growth is flatlining. Should we raise more funding or pretend we’re profitable?",
    "choices": [
      {
        "text": "Raise. Add ‘AI-powered’ to pitch and hope for magic.",
        "effects": {
          "revenue": 30000,
          "founderSanity": -15,
          "employeeHappiness": 0,
          "margins": -10
        }
      },
      {
        "text": "Profitability is a vibe. Let’s cut coffee machine budget.",
        "effects": {
          "revenue": 10000,
          "founderSanity": 5,
          "employeeHappiness": -5,
          "margins": 10
        }
      }
    ]
  },
  {
    "id": "oct-1",
    "month": 10,
    "persona": "chad",
    "text": "Festive season ahead. Should we launch a ‘Diwali Detox Kit’ or just fire our agency and run memes?",
    "choices": [
      {
        "text": "Detox kit with bonus ladoos. Logic is dead, long live margin!",
        "effects": {
          "revenue": 40000,
          "founderSanity": -10,
          "employeeHappiness": 5,
          "margins": -15
        }
      },
      {
        "text": "Memes and reels it is. Cheap, viral, and unhinged.",
        "effects": {
          "revenue": 20000,
          "founderSanity": 10,
          "employeeHappiness": 0,
          "margins": 10
        }
      }
    ]
  },
  {
    "id": "oct-2",
    "month": 10,
    "persona": "vic",
    "text": "Founder burnout alert. Should we take a vacation or schedule a 10-hour investor sync?",
    "choices": [
      {
        "text": "Vacation. Founder sanity matters (allegedly).",
        "effects": {
          "revenue": 5000,
          "founderSanity": 20,
          "employeeHappiness": 5,
          "margins": 0
        }
      },
      {
        "text": "Let’s triple down and cry in the Zoom call.",
        "effects": {
          "revenue": 20000,
          "founderSanity": -20,
          "employeeHappiness": -5,
          "margins": 5
        }
      }
    ]
  },
  {
    "id": "nov-1",
    "month": 11,
    "persona": "karen",
    "text": "Black Friday sale? Should we drop prices so low we question capitalism?",
    "choices": [
      {
        "text": "Yes, slash prices. Also slash our dreams.",
        "effects": {
          "revenue": 50000,
          "founderSanity": -10,
          "employeeHappiness": 0,
          "margins": -25
        }
      },
      {
        "text": "Nope. Let’s do a ‘Support Local’ campaign and hope.",
        "effects": {
          "revenue": 10000,
          "founderSanity": 5,
          "employeeHappiness": 10,
          "margins": 5
        }
      }
    ]
  },
  {
    "id": "nov-2",
    "month": 11,
    "persona": "molly",
    "text": "Amazon rating just dipped to 2.9. Bribe customers with coupons or blame logistics?",
    "choices": [
      {
        "text": "Bribe ‘em. Coupons for all and fake smiles.",
        "effects": {
          "revenue": 15000,
          "founderSanity": -10,
          "employeeHappiness": 5,
          "margins": -10
        }
      },
      {
        "text": "Blame the courier guy and run.",
        "effects": {
          "revenue": 5000,
          "founderSanity": -5,
          "employeeHappiness": -5,
          "margins": 5
        }
      }
    ]
  },
  {
    "id": "dec-1",
    "month": 12,
    "persona": "vic",
    "text": "We hit $9.5Mn runrate. Do we hustle to $10Mn or party like it’s already IPO day?",
    "choices": [
      {
        "text": "Push for $10Mn. Sleep is for the acquired.",
        "effects": {
          "revenue": 50000,
          "founderSanity": -20,
          "employeeHappiness": -10,
          "margins": 5
        }
      },
      {
        "text": "Party time. We’ll claim ARR on LinkedIn anyway.",
        "effects": {
          "revenue": 20000,
          "founderSanity": 15,
          "employeeHappiness": 10,
          "margins": 0
        }
      }
    ]
  },
  {
    "id": "dec-2",
    "month": 12,
    "persona": "karen",
    "text": "You did it! Or did you? Should we launch a 2026 vision deck or just ghost everyone?",
    "choices": [
      {
        "text": "Deck it is. With vague graphs and vibes.",
        "effects": {
          "revenue": 10000,
          "founderSanity": -5,
          "employeeHappiness": 0,
          "margins": 5
        }
      },
      {
        "text": "Ghost mode on. CEO = Chief Escapism Officer.",
        "effects": {
          "revenue": 0,
          "founderSanity": 15,
          "employeeHappiness": 5,
          "margins": 0
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