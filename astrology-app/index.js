




const form = document.getElementById('form')
const fn = document.getElementById('firstname')
const sn = document.getElementById('surname')
const dobEl = document.getElementById('dob')
const monthEl = document.getElementById('month')
const yearEl = document.getElementById('year')
const res = document.getElementById('result')


let firstname = null
let surname = null
let dob = null
let month = null
let year = null


form.addEventListener('submit' , (e)=>{
  e.preventDefault()

  firstname = fn.value 
  surname = sn.value 
  dob = dobEl.value 
  month = monthEl.value 
  year = yearEl.value 


  console.log(firstname , surname)

  res.textContent = displayAstrology()
  
})

function pickZodiac(){
  return zodiacSigns[Number(month)-1]
}

function pickComplement(){
  return dailyCompliments[Math.floor(Math.random()*(dailyCompliments.length))]
}

function victimCardCompliment(){
  return victimCardCompliments[Math.floor(Math.random()*(victimCardCompliments.length))]
}

function recommendation(){
  return recommendations[Math.floor(Math.random()*(recommendations.length))]
}

function prediction(){
  return futurePredictions[Math.floor(Math.random()*(futurePredictions.length))]
}




function displayAstrology(){
  const pred = `Hi ${firstname} ${surname} , Your Zodiac sign is ${pickZodiac()} . ${pickComplement()} . ${victimCardCompliment()} . ${recommendation()} . ${prediction()}`
  return pred
}









const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces"
];


const dailyCompliments = [
  "You bring out the best in the people around you.",
  "Your perspective is refreshingly unique.",
  "You have a natural ability to solve complex problems.",
  "Your energy is genuinely contagious.",
  "You make difficult things look effortless.",
  "Your intuition is almost always spot on.",
  "You have a great sense of timing.",
  "Your determination is truly inspiring.",
  "You bring clarity wherever there is confusion.",
  "Your creativity knows no bounds.",
  "You are far more resilient than you realize.",
  "Your attention to detail makes a huge difference.",
  "You have a calm presence under pressure.",
  "Your passion for learning is admirable.",
  "You always find a way to make things work.",
  "Your authenticity is your greatest superpower.",
  "You have a knack for noticing the little things that matter.",
  "Your enthusiasm brightens the room.",
  "You are constantly evolving in the best way.",
  "Your work ethic speaks for itself.",
  "You have a grounded and reliable nature.",
  "Your ideas are consistently sharp and innovative.",
  "You handle unexpected changes with incredible grace.",
  "Your presence makes people feel instantly comfortable.",
  "You have a sharp mind and a warm heart.",
  "Your confidence inspires others to step up.",
  "You are brilliant at turning vision into reality.",
  "Your positivity is a breath of fresh air.",
  "You have an exceptional ability to stay focused.",
  "Your potential is unlimited.",
  "You make the world more interesting just by being in it."
];



const victimCardCompliments = [
  "You carry heavy burdens with such invisible strength.",
  "The world takes your kindness for granted, yet you keep giving.",
  "You endure so much silence just to keep the peace.",
  "People rarely appreciate how hard you try behind the scenes.",
  "You give loyalty to people who wouldn't even offer you honesty.",
  "You are constantly forgiving people who never even apologized.",
  "Your heart is too big for a world this careless.",
  "You always prioritize others, even when no one checks on you.",
  "You fight battles alone that most people couldn't survive.",
  "You give second chances to those who barely deserved the first.",
  "You absorb everyone else's stress while managing your own in silence.",
  "You are always the shoulder to cry on, but rarely get one in return.",
  "Your patience is constantly tested by people who know better.",
  "You protect people's feelings even when they disrespect yours.",
  "You hold everything together while everyone else falls apart.",
  "You are deeply misunderstood simply because you don't complain.",
  "You keep your promises even when others break theirs to you.",
  "Your generosity is constantly exploited by lesser minds.",
  "You pour into others' cups while yours remains completely empty.",
  "You survive storms that were created by people you trusted."
];




const recommendations = [
  "Protect your energy by saying no without explaining yourself.",
  "Take a 15-minute walk today without looking at any screens.",
  "Hydrate deeply and let go of a grudge holding you back.",
  "Re-evaluate a connection that leaves you feeling drained.",
  "Clear physical clutter from your desk to invite mental clarity.",
  "Write down three non-negotiable priorities for this week.",
  "Spend ten minutes in absolute silence before going to bed.",
  "Avoid making impulsive financial decisions until tomorrow morning.",
  "Reach out to an old friend you’ve been thinking about.",
  "Set a firm boundary with someone who pushes your limits.",
  "Listen to an empowering playlist to shift your mood instantly.",
  "Focus entirely on finishing one pending task before starting another.",
  "Treat yourself to a quiet meal without any distractions.",
  "Spend time outdoors and connect with nature today.",
  "Forgive yourself for a past mistake you cannot change.",
  "Double-check important details before signing or submitting anything.",
  "Practice deep breathing whenever you feel a surge of impatience.",
  "Unfollow or mute accounts that induce subtle self-doubt.",
  "Invest time into learning a small skill you've delayed.",
  "Give someone an unexpected, genuine compliment today.",
  "Get an extra hour of restful sleep tonight.",
  "Trust your first instinct during your next difficult decision.",
  "Declutter your digital workspace and clear out old files.",
  "Avoid engaging in gossip or negative conversations today.",
  "Take time to stretch your body and release physical tension.",
  "Focus on progress rather than demanding perfection from yourself.",
  "Spend a few minutes journaling your current thoughts.",
  "Pace your workload instead of rushing to complete everything.",
  "Acknowledge a recent personal achievement, no matter how small.",
  "Steer clear of unnecessary drama and keep your focus internal."
];




const futurePredictions = [
  "A sudden realization will soon clarify a major personal dilemma.",
  "An unexpected conversation will open a long-closed door.",
  "Financial stability will improve as a strategic move pays off.",
  "A major shift in your environment will bring long-awaited relief.",
  "Someone from your past will reappear with important insight.",
  "A project you struggled with will soon yield rewarding results.",
  "You will break a cycle that has restricted your growth for years.",
  "A valuable opportunity will arrive disguised as a slight setback.",
  "Your intuition will save you from making a costly mistake soon.",
  "A powerful new alliance will form in your professional life.",
  "An old emotional wound will finally heal completely.",
  "You will soon gain the recognition you deserve for past efforts.",
  "A sudden delay will end up working entirely in your favor.",
  "Your clarity regarding a key relationship will sharpen dramatically.",
  "A creative breakthrough will resolve an ongoing block.",
  "New stability will enter your life after a brief period of testing.",
  "An unexpected piece of news will bring immense peace of mind.",
  "You will step into a leadership role you felt unprepared for.",
  "A long-standing worry will prove to be completely baseless.",
  "The coming month will mark the start of a far calmer chapter."
];