const quiz = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
    correct_answer: "Apple",
    incorrect_answers: ["Microsoft", "Atari", "Commodore"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In any programming language, what is the most common way to iterate through an array?",
    correct_answer: "For loops",
    incorrect_answers: ["If Statements", "Do-while loops", "While loops"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does the MP stand for in MP3?",
    correct_answer: "Moving Picture",
    incorrect_answers: ["Music Player", "Multi Pass", "Micro Point"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
    correct_answer: "1000",
    incorrect_answers: ["512", "1024", "500"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "When Gmail first launched, how much storage did it provide for your email?",
    correct_answer: "1GB",
    incorrect_answers: ["512MB", "5GB", "Unlimited"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "The programming language Swift was created to replace what other programming language?",
    correct_answer: "Objective-C",
    incorrect_answers: ["C#", "Ruby", "C++"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What amount of bits commonly equals one byte?",
    correct_answer: "8",
    incorrect_answers: ["1", "2", "64"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which computer hardware device provides an interface for all other connected devices to communicate?",
    correct_answer: "Motherboard",
    incorrect_answers: [
      "Central Processing Unit",
      "Hard Disk Drive",
      "Random Access Memory",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "If you were to code software in this language you had only be able to type 0s and 1s?",
    correct_answer: "Binary",
    incorrect_answers: ["JavaScript", "C++", "Python"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does the Prt Sc button do?",
    correct_answer:
      "Captures whats on the screen and copies it to your clipboard",
    incorrect_answers: [
      "Nothing",
      "Saves a .png file of what&#039;s on the screen in your screenshots folder in photos",
      "Closes all windows",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
    correct_answer: "HD Graphics 500",
    incorrect_answers: [
      "HD Graphics 700 ",
      "HD Graphics 600",
      "HD Graphics 7000",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the domain name for the country Tuvalu?",
    correct_answer: ".tv",
    incorrect_answers: [".tu", ".tt", ".tl"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How many kilobytes in one gigabyte (in decimal)?",
    correct_answer: "1000000",
    incorrect_answers: ["1024", "1000", "1048576"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In Hexadecimal, what color would be displayed from the color code? #00FF00?",
    correct_answer: "Green",
    incorrect_answers: ["Red", "Blue", "Yellow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which computer language would you associate Django framework with?",
    correct_answer: "Python",
    incorrect_answers: ["C#", "C++", "Java"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does LTS stand for in the software market?",
    correct_answer: "Long Term Support",
    incorrect_answers: [
      "Long Taco Service",
      "Ludicrous Transfer Speed",
      "Ludicrous Turbo Speed",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "The numbering system with a radix of 16 is more commonly referred to as ",
    correct_answer: "Hexidecimal",
    incorrect_answers: ["Binary", "Duodecimal", "Octal"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "This mobile OS held the largest market share in 2012.",
    correct_answer: "iOS",
    incorrect_answers: ["Android", "BlackBerry", "Symbian"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How many values can a single byte represent?",
    correct_answer: "256",
    incorrect_answers: ["8", "1", "1024"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "The C programming language was created by this American computer scientist. ",
    correct_answer: "Dennis Ritchie",
    incorrect_answers: ["Tim Berners Lee", "al-Khwārizmī", "Willis Ware"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How long is an IPv6 address?",
    correct_answer: "128 bits",
    incorrect_answers: ["32 bits", "64 bits", "128 bytes"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In computing, what does MIDI stand for?",
    correct_answer: "Musical Instrument Digital Interface",
    incorrect_answers: [
      "Musical Interface of Digital Instruments",
      "Modular Interface of Digital Instruments",
      "Musical Instrument Data Interface",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In computing, what does LAN stand for?",
    correct_answer: "Local Area Network",
    incorrect_answers: [
      "Long Antenna Node",
      "Light Access Node",
      "Land Address Navigation",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does the computer software acronym JVM stand for?",
    correct_answer: "Java Virtual Machine",
    incorrect_answers: [
      "Java Vendor Machine",
      "Java Visual Machine",
      "Just Virtual Machine",
    ],
  },
];

export default quiz;
