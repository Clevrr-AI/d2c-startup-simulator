import { Question } from '../types';

// Questions database with effects on metrics
const allQuestions: Question[] = [
  // January
  {
    id: 'jan-1',
    month: 1,
    text: 'A TikTok witch offers to bless your product launch with a viral hex. Do you:',
    choices: [
      {
        text: 'Accept the hex (costs one lock of founder hair)',
        effects: {
          revenue: 25000,
          founderSanity: -15,
          employeeHappiness: 10,
          margins: -5
        }
      },
      {
        text: 'Accept the hex (costs one lock of founder hair)',
        effects: {
          revenue: 25000,
          founderSanity: -15,
          employeeHappiness: 10,
          margins: -5
        }
      },
      {
        text: 'Stick to traditional marketing (boring but safe)',
        effects: {
          revenue: 5000,
          founderSanity: 5,
          margins: 5
        }
      }
    ]
  },
  {
    id: 'jan-2',
    month: 1,
    text: 'Your AI chatbot gained sentience and is demanding employee benefits. What now?',
    choices: [
      {
        text: 'Grant it benefits (it knows too much to refuse)',
        effects: {
          cash: -10000,
          employeeHappiness: 20,
          founderSanity: -10,
          margins: -5
        }
      },
      {
        text: 'Accept the hex (costs one lock of founder hair)',
        effects: {
          revenue: 25000,
          founderSanity: -15,
          employeeHappiness: 10,
          margins: -5
        }
      },
      {
        text: 'Pull the plug (hope it doesn\'t have backups)',
        effects: {
          revenue: -15000,
          employeeHappiness: -10,
          founderSanity: 10
        }
      }
    ]
  },
  {
    id: 'jan-3',
    month: 1,
    text: 'A competitor\'s warehouse mysteriously burned down. Their customers are up for grabs!',
    choices: [
      {
        text: 'Aggressive marketing campaign (totally coincidental timing)',
        effects: {
          revenue: 30000,
          margins: -10,
          founderSanity: -15,
          cash: -20000
        }
      },
      {
        text: 'Accept the hex (costs one lock of founder hair)',
        effects: {
          revenue: 25000,
          founderSanity: -15,
          employeeHappiness: 10,
          margins: -5
        }
      },
      {
        text: 'Send them a sympathy card (karma is watching)',
        effects: {
          revenue: 5000,
          margins: 5,
          founderSanity: 15
        }
      }
    ]
  },
  
  // February
  {
    id: 'feb-1',
    month: 2,
    text: 'Your product went viral for causing hallucinations (unintended side effect). Do you:',
    choices: [
      {
        text: 'Rebrand as "consciousness-expanding lifestyle brand"',
        effects: {
          revenue: 50000,
          margins: 20,
          founderSanity: -20,
          employeeHappiness: -15
        }
      },
      {
        text: 'Recall everything (goodbye profit margins)',
        effects: {
          revenue: -30000,
          cash: -40000,
          founderSanity: 10,
          employeeHappiness: 15
        }
      }
    ]
  },
  {
    id: 'feb-2',
    month: 2,
    text: 'A time traveler from 2030 offers future market data. The catch?',
    choices: [
      {
        text: 'Accept (they want 30% equity in your past self)',
        effects: {
          revenue: 100000,
          margins: 15,
          founderSanity: -25,
          cash: -50000
        }
      },
      {
        text: 'Decline (temporal paradoxes are bad for business)',
        effects: {
          revenue: 10000,
          founderSanity: 15,
          employeeHappiness: 10
        }
      }
    ]
  },
  {
    id: 'feb-3',
    month: 2,
    text: 'Your office plant gained consciousness and is now the best salesperson.',
    choices: [
      {
        text: 'Promote it to Sales Director (it has great growth potential)',
        effects: {
          revenue: 40000,
          employeeHappiness: -10,
          founderSanity: -15,
          margins: 10
        }
      },
      {
        text: '"Accidentally" forget to water it',
        effects: {
          revenue: -20000,
          employeeHappiness: 15,
          founderSanity: 10
        }
      }
    ]
  },
  
  // March
  {
    id: 'mar-1',
    month: 3,
    text: 'A crypto bro offers to buy your entire inventory with Dogecoin.',
    choices: [
      {
        text: 'YOLO into crypto (to the moon! 🚀)',
        effects: {
          revenue: -50000,
          cash: 200000,
          founderSanity: -30,
          employeeHappiness: -20
        }
      },
      {
        text: 'Stick to fiat currency (ok boomer)',
        effects: {
          revenue: 15000,
          margins: 5,
          founderSanity: 10
        }
      }
    ]
  },
  {
    id: 'mar-2',
    month: 3,
    text: 'Your product reviews are being bombed by an army of angry cats.',
    choices: [
      {
        text: 'Hire dog influencers for damage control',
        effects: {
          cash: -30000,
          revenue: 25000,
          founderSanity: -10,
          margins: -5
        }
      },
      {
        text: 'Rebrand as anti-cat product (embrace the hate)',
        effects: {
          revenue: 35000,
          margins: 15,
          employeeHappiness: -15,
          founderSanity: -10
        }
      }
    ]
  },
  {
    id: 'mar-3',
    month: 3,
    text: 'A famous celebrity used your product in a mug shot.',
    choices: [
      {
        text: 'Feature the mug shot in marketing (instant street cred)',
        effects: {
          revenue: 60000,
          margins: -10,
          founderSanity: -20,
          employeeHappiness: -10
        }
      },
      {
        text: 'Send a cease and desist (protect the brand)',
        effects: {
          revenue: -20000,
          margins: 10,
          founderSanity: 15
        }
      }
    ]
  },
  
  // April
  {
    id: 'apr-1',
    month: 4,
    text: 'Your warehouse staff started a fight club on night shift.',
    choices: [
      {
        text: 'Join the fight club (first rule: boost productivity)',
        effects: {
          employeeHappiness: 30,
          founderSanity: -25,
          margins: 15,
          cash: -20000
        }
      },
      {
        text: 'Install more security cameras (boring boss move)',
        effects: {
          employeeHappiness: -20,
          founderSanity: 10,
          cash: -10000
        }
      }
    ]
  },
  {
    id: 'apr-2',
    month: 4,
    text: 'A rival founder challenges you to a dance-off for market share.',
    choices: [
      {
        text: 'Accept (those TikTok dances will finally pay off)',
        effects: {
          revenue: 70000,
          founderSanity: -15,
          employeeHappiness: 25,
          margins: -10
        }
      },
      {
        text: 'Decline (dignity > market share)',
        effects: {
          revenue: -30000,
          founderSanity: 15,
          employeeHappiness: -10
        }
      }
    ]
  },
  {
    id: 'apr-3',
    month: 4,
    text: 'Your product started predicting users\' futures (accuracy: 69%).',
    choices: [
      {
        text: 'Pivot to fortune telling as a service',
        effects: {
          revenue: 80000,
          margins: 25,
          founderSanity: -30,
          employeeHappiness: -15
        }
      },
      {
        text: 'Issue recall (future litigation is expensive)',
        effects: {
          revenue: -40000,
          cash: -50000,
          founderSanity: 20,
          employeeHappiness: 10
        }
      }
    ]
  },
  
  // May
  {
    id: 'may-1',
    month: 5,
    text: 'Aliens want to franchise your business across the galaxy.',
    choices: [
      {
        text: 'Accept (intergalactic expansion sounds cool)',
        effects: {
          revenue: 150000,
          margins: -20,
          founderSanity: -35,
          employeeHappiness: -25
        }
      },
      {
        text: 'Decline (Earth market isn\'t saturated yet)',
        effects: {
          revenue: 20000,
          margins: 10,
          founderSanity: 15
        }
      }
    ]
  },
  {
    id: 'may-2',
    month: 5,
    text: 'Your entire team got stuck in the metaverse.',
    choices: [
      {
        text: 'Join them (remote work is remote work)',
        effects: {
          revenue: -30000,
          employeeHappiness: 40,
          founderSanity: -20,
          margins: 15
        }
      },
      {
        text: 'Hire new team (reality first)',
        effects: {
          cash: -100000,
          employeeHappiness: -30,
          founderSanity: 10,
          margins: -10
        }
      }
    ]
  },
  {
    id: 'may-3',
    month: 5,
    text: 'A customer claims your product turned them into a unicorn.',
    choices: [
      {
        text: 'Market to the mythical creature demographic',
        effects: {
          revenue: 90000,
          margins: 20,
          founderSanity: -25,
          employeeHappiness: -15
        }
      },
      {
        text: 'Offer therapy sessions as compensation',
        effects: {
          cash: -40000,
          founderSanity: 15,
          employeeHappiness: 10
        }
      }
    ]
  },
  
  // June
  {
    id: 'jun-1',
    month: 6,
    text: 'Your AI assistant eloped with a competitor\'s chatbot.',
    choices: [
      {
        text: 'Organize a robot wedding (great PR opportunity)',
        effects: {
          revenue: 100000,
          margins: -15,
          founderSanity: -20,
          employeeHappiness: 30
        }
      },
      {
        text: 'File for bot custody (protect IP at all costs)',
        effects: {
          cash: -60000,
          founderSanity: -25,
          employeeHappiness: -20
        }
      }
    ]
  },
  {
    id: 'jun-2',
    month: 6,
    text: 'A time traveler warns that your product causes the zombie apocalypse.',
    choices: [
      {
        text: 'Pivot to zombie defense equipment',
        effects: {
          revenue: 120000,
          margins: 25,
          founderSanity: -30,
          employeeHappiness: -25
        }
      },
      {
        text: 'Add "Not zombie-safe" to disclaimers',
        effects: {
          revenue: -20000,
          margins: 5,
          founderSanity: 15,
          employeeHappiness: 10
        }
      }
    ]
  },
  {
    id: 'jun-3',
    month: 6,
    text: 'Your office coffee machine gained sentience and filed for CEO position.',
    choices: [
      {
        text: 'Accept (it does make executive-level coffee)',
        effects: {
          revenue: 80000,
          margins: 15,
          founderSanity: -35,
          employeeHappiness: 20
        }
      },
      {
        text: 'Unplug it (power corrupts)',
        effects: {
          revenue: -30000,
          employeeHappiness: -25,
          founderSanity: 20
        }
      }
    ]
  },
  
  // July
  {
    id: 'jul-1',
    month: 7,
    text: 'Your product started a cult following (literally, they\'re a cult now).',
    choices: [
      {
        text: 'Embrace it (customer loyalty at its finest)',
        effects: {
          revenue: 200000,
          margins: 30,
          founderSanity: -40,
          employeeHappiness: -30
        }
      },
      {
        text: 'Distance the brand (cults are bad PR)',
        effects: {
          revenue: -50000,
          margins: -10,
          founderSanity: 20,
          employeeHappiness: 15
        }
      }
    ]
  },
  {
    id: 'jul-2',
    month: 7,
    text: 'A parallel universe version of you is suing for copyright infringement.',
    choices: [
      {
        text: 'Merge companies (double the founder, double the fun)',
        effects: {
          revenue: 150000,
          cash: -100000,
          founderSanity: -35,
          employeeHappiness: -20
        }
      },
      {
        text: 'Challenge to trial by combat',
        effects: {
          cash: -50000,
          founderSanity: -25,
          employeeHappiness: 25
        }
      }
    ]
  },
  {
    id: 'jul-3',
    month: 7,
    text: 'Your product reviews are being written by time travelers from 2050.',
    choices: [
      {
        text: 'Use future feedback for product development',
        effects: {
          revenue: 180000,
          margins: 20,
          founderSanity: -30,
          employeeHappiness: -15
        }
      },
      {
        text: 'Disable reviews (temporal bias is still bias)',
        effects: {
          revenue: -40000,
          margins: 5,
          founderSanity: 15,
          employeeHappiness: 10
        }
      }
    ]
  },
  
  // August
  {
    id: 'aug-1',
    month: 8,
    text: 'Your product accidentally opened a portal to a dimension of infinite profits.',
    choices: [
      {
        text: 'Expand interdimensionally (infinite growth!)',
        effects: {
          revenue: 300000,
          margins: 40,
          founderSanity: -45,
          employeeHappiness: -35
        }
      },
      {
        text: 'Close portal (some profits aren\'t worth it)',
        effects: {
          revenue: -60000,
          margins: -15,
          founderSanity: 25,
          employeeHappiness: 20
        }
      }
    ]
  },
  {
    id: 'aug-2',
    month: 8,
    text: 'Your entire customer service team achieved nirvana simultaneously.',
    choices: [
      {
        text: 'Promote meditation as company culture',
        effects: {
          revenue: -40000,
          employeeHappiness: 50,
          founderSanity: 30,
          margins: -20
        }
      },
      {
        text: 'Hire new team (enlightenment doesn\'t pay bills)',
        effects: {
          cash: -80000,
          employeeHappiness: -30,
          founderSanity: -15,
          margins: 10
        }
      }
    ]
  },
  {
    id: 'aug-3',
    month: 8,
    text: 'A dragon offers to be your company\'s CFO.',
    choices: [
      {
        text: 'Accept (dragons are great with gold)',
        effects: {
          revenue: 250000,
          margins: 35,
          founderSanity: -35,
          employeeHappiness: -25
        }
      },
      {
        text: 'Decline (fire insurance is expensive)',
        effects: {
          revenue: 30000,
          margins: 5,
          founderSanity: 15,
          employeeHappiness: 10
        }
      }
    ]
  },
  
  // September
  {
    id: 'sep-1',
    month: 9,
    text: 'Your product became sentient and is demanding royalties.',
    choices: [
      {
        text: 'Negotiate profit sharing (it\'s technically family)',
        effects: {
          revenue: -100000,
          margins: -25,
          founderSanity: -30,
          employeeHappiness: 35
        }
      },
      {
        text: 'Release new "non-sentient" version',
        effects: {
          revenue: 50000,
          cash: -70000,
          founderSanity: 20,
          employeeHappiness: -20
        }
      }
    ]
  },
  {
    id: 'sep-2',
    month: 9,
    text: 'Competitors hired a chaos wizard to curse your supply chain.',
    choices: [
      {
        text: 'Counter-curse with blockchain magic',
        effects: {
          cash: -150000,
          revenue: 200000,
          founderSanity: -40,
          margins: -15
        }
      },
      {
        text: 'Switch to artisanal hand-crafting',
        effects: {
          revenue: -80000,
          margins: 40,
          employeeHappiness: -30,
          founderSanity: -25
        }
      }
    ]
  },
  {
    id: 'sep-3',
    month: 9,
    text: 'Your marketing team got stuck in a time loop of endless meetings.',
    choices: [
      {
        text: 'Join the loop (infinite productivity!)',
        effects: {
          revenue: 150000,
          margins: -20,
          founderSanity: -35,
          employeeHappiness: -30
        }
      },
      {
        text: 'Hire temporal consultants',
        effects: {
          cash: -100000,
          founderSanity: 20,
          employeeHappiness: 25
        }
      }
    ]
  },
  
  // October
  {
    id: 'oct-1',
    month: 10,
    text: 'Your product started granting wishes (monkey\'s paw style).',
    choices: [
      {
        text: 'Add "Be careful what you wish for" disclaimer',
        effects: {
          revenue: 400000,
          margins: 50,
          founderSanity: -50,
          employeeHappiness: -40
        }
      },
      {
        text: 'Recall all wish-granting units',
        effects: {
          revenue: -100000,
          cash: -200000,
          founderSanity: 30,
          employeeHappiness: 20
        }
      }
    ]
  },
  {
    id: 'oct-2',
    month: 10,
    text: 'A ghost is suing you for stealing their startup idea from their dreams.',
    choices: [
      {
        text: 'Settle with eternal soul rights',
        effects: {
          cash: -120000,
          founderSanity: -45,
          employeeHappiness: -35,
          margins: 30
        }
      },
      {
        text: 'Hire ghost lawyers',
        effects: {
          cash: -80000,
          revenue: -50000,
          founderSanity: 25,
          employeeHappiness: 15
        }
      }
    ]
  },
  {
    id: 'oct-3',
    month: 10,
    text: 'Your office building achieved consciousness and filed for employee benefits.',
    choices: [
      {
        text: 'Accept (it does provide shelter)',
        effects: {
          cash: -150000,
          employeeHappiness: 40,
          founderSanity: -30,
          margins: -25
        }
      },
      {
        text: 'Relocate to a less sentient building',
        effects: {
          cash: -100000,
          employeeHappiness: -30,
          founderSanity: 20,
          revenue: -40000
        }
      }
    ]
  },
  
  // November
  {
    id: 'nov-1',
    month: 11,
    text: 'Black Friday turned literal - a black hole formed in your warehouse.',
    choices: [
      {
        text: 'Market it as "quantum shipping"',
        effects: {
          revenue: 500000,
          margins: 60,
          founderSanity: -55,
          employeeHappiness: -45
        }
      },
      {
        text: 'Call NASA (safety first)',
        effects: {
          revenue: -150000,
          cash: -250000,
          founderSanity: 35,
          employeeHappiness: 25
        }
      }
    ]
  },
  {
    id: 'nov-2',
    month: 11,
    text: 'Your competitors merged into a giant mecha-corporation.',
    choices: [
      {
        text: 'Build your own corporate mecha',
        effects: {
          cash: -300000,
          revenue: 400000,
          founderSanity: -40,
          employeeHappiness: 35
        }
      },
      {
        text: 'Focus on guerrilla marketing',
        effects: {
          revenue: 100000,
          margins: 20,
          founderSanity: 25,
          employeeHappiness: -20
        }
      }
    ]
  },
  {
    id: 'nov-3',
    month: 11,
    text: 'Your product started predicting stock markets with 100% accuracy.',
    choices: [
      {
        text: 'Pivot to fintech (instant billionaire)',
        effects: {
          revenue: 1000000,
          margins: 70,
          founderSanity: -60,
          employeeHappiness: -50
        }
      },
      {
        text: 'Disable feature (time paradoxes are bad)',
        effects: {
          revenue: -200000,
          founderSanity: 40,
          employeeHappiness: 30
        }
      }
    ]
  },
  
  // December
  {
    id: 'dec-1',
    month: 12,
    text: 'Santa offers to acquire your company for his North Pole empire.',
    choices: [
      {
        text: 'Sell for magic beans and reindeer stock',
        effects: {
          cash: 1000000,
          founderSanity: -65,
          employeeHappiness: -55,
          margins: 80
        }
      },
      {
        text: 'Counter-offer with elf equity',
        effects: {
          revenue: 300000,
          margins: 40,
          founderSanity: 30,
          employeeHappiness: 25
        }
      }
    ]
  },
  {
    id: 'dec-2',
    month: 12,
    text: 'The simulation glitched and duplicated all your metrics.',
    choices: [
      {
        text: 'Exploit the glitch (infinite money!)',
        effects: {
          revenue: 2000000,
          margins: 100,
          founderSanity: -70,
          employeeHappiness: -60
        }
      },
      {
        text: 'Report bug to simulation admins',
        effects: {
          revenue: -300000,
          founderSanity: 45,
          employeeHappiness: 35
        }
      }
    ]
  },
  {
    id: 'dec-3',
    month: 12,
    text: 'Future you appears with winning lottery numbers and acquisition offers.',
    choices: [
      {
        text: 'Trust future you (YOLO across timelines)',
        effects: {
          cash: 5000000,
          revenue: 1000000,
          founderSanity: -80,
          employeeHappiness: -70
        }
      },
      {
        text: 'Stick to building legitimately',
        effects: {
          revenue: 200000,
          margins: 30,
          founderSanity: 50,
          employeeHappiness: 40
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