import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    category: "Mental Resilience",
    text: "Over the last 2 weeks, how often have you felt like this?",
    highlight: "I've been feeling optimistic about the future",
    options: [
      { label: "None of the time", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Some of the time", value: 3 },
      { label: "Often", value: 4 },
      { label: "All of the time", value: 5 },
    ]
  },
  {
    id: 2,
    category: "Mental Resilience",
    text: "Over the last 2 weeks, how often have you felt like this?",
    highlight: "I've been feeling useful",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtE6lIm09ktQJ7tSwMe5rhLp6P9E0ozZ2esxNPDP7EHiinseq2c5q3ZtNAGN6Rl0SrR3dTM0GWWO1ERZeFhI3rA2uNDde5YhlweL4Qw_MHxsr1Z2cQnLWeouHlHYglgrK6kXxyivNc_H1lQoe85tdHSRu4Ey6ztkYA2mvWqEmSsZ2UqoRFznWrfHz1Dbyv5ID4HPwuWM2i6YKrQLQlm1-o_4HioBXNIe72zhKNknpsmvdTpcyaEPo-XMzlZeNCgaWPiqnvgfY5Ric",
    hint: "Mental resilience drives physical peaks",
    options: [
      { label: "None of the time", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Some of the time", value: 3 },
      { label: "Often", value: 4 },
      { label: "All of the time", value: 5 },
    ]
  },
  {
    id: 3,
    category: "Mental Resilience",
    text: "Over the last 2 weeks, how often have you felt like this?",
    highlight: "I've been feeling relaxed",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApVC37B-74FtRilX5-7j61kmExeKstNs6oo048ZcASKgp4-pinoDCwToTkcRHWCm3W7tPv_7tetkEP8K1_cmXP-hqn_j0taap4U9GAy4siDAQcAShjayKH-PgedCQL52OSf4BbKNX_dZpKgw1MLHZwvxNPY-KmGLce6DCmGE9sahDS1J3dxLrcupWqaHljk--2PKvZ1P9zkbTWHUUqj1iYdA4wl9cF2LT7pYOQ_7iLQnEHZzd8ncLX4rxnu0Wgmv78VcnJxGfCDNw",
    options: [
      { label: "Not at all", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Some of the time", value: 3 },
      { label: "Often", value: 4 },
      { label: "All of the time", value: 5 },
    ]
  },
  {
    id: 4,
    category: "Mental Resilience",
    text: "Over the last 2 weeks, how often have you felt like this?",
    highlight: "I've been dealing with problems well",
    options: [
      { label: "Not at all", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Some of the time", value: 3 },
      { label: "Often", value: 4 },
      { label: "All of the time", value: 5 },
    ]
  },
  {
    id: 5,
    category: "Mental Resilience",
    text: "Over the last 2 weeks, how often have you felt like this?",
    highlight: "I've been thinking clearly",
    hint: "Mental clarity is the engine of peak performance. Be honest with your pace today.",
    options: [
      { label: "None of the time", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Some of the time", value: 3 },
      { label: "Often", value: 4 },
      { label: "All of the time", value: 5 },
    ]
  },
  {
    id: 6,
    category: "Social Assessment",
    text: "Over the last 2 weeks, how often have you felt like this?",
    highlight: "I've been able to connect with other people comfortably",
    options: [
      { label: "Not at all", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Some of the time", value: 3 },
      { label: "Often", value: 4 },
      { label: "Very Often", value: 5 },
    ]
  },
  {
    id: 7,
    category: "Assessment Period",
    text: "Over the last 2 weeks, how often have you felt like this?",
    highlight: "I've been able to make up my own mind about things",
    options: [
      { label: "None of the time", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Some of the time", value: 3 },
      { label: "Often", value: 4 },
      { label: "All of the time", value: 5 },
    ]
  },
  {
    id: 8,
    category: "Skill Assessment",
    text: "How do I rate myself in this sport",
    hint: "Be honest with your current level. This data helps us tailor your training pulse.",
    options: [
      { label: "Beginner", value: 1 },
      { label: "Novice", value: 2 },
      { label: "Intermediate", value: 3 },
      { label: "Advanced", value: 4 },
      { label: "Elite", value: 5 },
    ]
  },
  {
    id: 9,
    category: "Daily Vitality Check",
    text: "I feel energetic throughout the day",
    options: [
      { label: "Completely Disagree", value: 1 },
      { label: "Somewhat Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Somewhat Agree", value: 4 },
      { label: "Completely Agree", value: 5 },
    ]
  },
  {
    id: 10,
    category: "Current Status",
    text: "My body feels active and not tired.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB35U3VdziQjzMuapMTq9USGu2QXxfM9y4Ewt3m4trmYde2YYlEHApLnfZLEdnOkeR80LtpKBmeltHdN1EzKfXvWYUVBooU8eQVKsE888EmZUU4j_Fis6XM_di78vbVz4sXgrBteW5cVhsCvZk-Ozf2IviYt31GaYSZiRjwlWFe7r2_0o11v92VBy4gZNeV7qHUJmneRWvwdpaHDdG9UiTPrMy0LtFY80p2duw8XUYuJkma7NN61ZGeDgvJaCyfAQj2nz3RAh-sEjc",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ]
  },
  {
    id: 11,
    category: "Physical Activity",
    text: "I regularly participate in physical activities or sports",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU8LxPCnhvQUnkVBX1UuVF4ME4ABJeuV-F4HAQYoE74_PfwAF9N2XjPuQ0tleDLmbQp5L2WQ9kkm_C8oNXFKiXjcNBx0PDuF4HtViDFpTm8EEnW-Y9fn1-jEzZED_St0Ul4CqGYrWzNduQo42CODGPe8T64PkpNnoDiVYK5w9DupB7jK3-nNOp5HIiUDtjmEQcaUcxa-WMpVIjBVhSZJWXuF7AbEuRUcxNFx4uqaHRFnXQddvJekBKlHDMoFfIdD2wv6BNRNsaH_k",
    options: [
      { label: "Rarely active", value: 1 },
      { label: "Occasional movement", value: 2 },
      { label: "Moderate (2-3 times)", value: 3 },
      { label: "4-5 times a week", value: 4 },
      { label: "Daily performance", value: 5 },
    ]
  },
  {
    id: 12,
    category: "Social Assessment",
    text: "I feel socially confident in group environments",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDbTOTqp9RBt3ajmaxtBHx6nJlAYSk8CMUneVq9tGaQnTDgc6fk2ZIfafElbsJBF0xfAbMo6Y3MBv67DvSM7LHDfXgVvfMF1YC4IBrCf479ocJFp0vaghagIfCVkmXx8B8Bpu9YHgpm5-xraG3ek5E34bKGSgLU3RUrLpZN_LEklePfFp10steQ9kZXwqG_PJHB-rCcsK8M9ZpL-9uJrRpA9fcXVfRKUNXwplB5lpj_v8eNKDDunvinV_6EmOqQ9ZCws3faKWtoKg",
    options: [
      { label: "Significant Anxiety", value: 1 },
      { label: "Somewhat Anxious", value: 2 },
      { label: "Neither/Nor", value: 3 },
      { label: "Moderately Confident", value: 4 },
      { label: "Absolutely Confident", value: 5 },
    ]
  },
  {
    id: 13,
    category: "Final Step",
    text: "I am willing to try new challenges or activities",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ]
  },
  {
    id: 14,
    category: "Final Step",
    text: "I am willing to try new challenges or activities",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ]
  }
];
