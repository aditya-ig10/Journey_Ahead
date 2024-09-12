const storyContainer = document.getElementById('story-container');
const storyTitle = document.getElementById('story-title');
const storyContent = document.getElementById('story-content');
const storyText = document.getElementById('story-text');
const storyImage = document.getElementById('story-image');
const weatherInfo = document.getElementById('weather-info');
const choiceButtons = document.getElementById('choice-buttons');
const restartButton = document.getElementById('restart-button');

const story = {
    start: {
        text: "Sonam, a passionate comic book enthusiast, is scrolling through her phone when she receives an exciting call. It's about a last-minute Comic-Con event in Delhi!",
        image: "images/home.jpg",
        choices: [
            { text: "Answer the phone", next: "answerPhone", points: 10 },
            { text: "Ignore the call", next: "ignorePhone", points: -5 }
        ]
    },
    answerPhone: {
        text: "Sonam's friend babbles excitedly about a surprise Comic-Con in Delhi, starting tomorrow! It's a once-in-a-lifetime opportunity with special guests and exclusive merchandise.",
        image: "images/phone-call.jpg",
        choices: [
            { text: "Decide to go", next: "decideTogo", points: 15 },
            { text: "Decline the offer", next: "stayHome", points: -10 }
        ]
    },
    ignorePhone: {
        text: "Sonam ignores the call, but her phone keeps buzzing with messages. Curiosity gets the better of her. Should she check the messages or continue scrolling through social media?",
        image: "images/ignored-call.jpg",
        choices: [
            { text: "Check messages", next: "checkMessages", points: 5 },
            { text: "Keep scrolling", next: "missOpportunity", points: -15 }
        ]
    },
    checkMessages: {
        text: "The messages reveal the exciting news about Comic-Con. Sonam realizes she almost missed out on an incredible opportunity!",
        image: "images/text-messages.jpg",
        choices: [
            { text: "Call friend back", next: "decideTogo", points: 10 },
            { text: "Think it over", next: "contemplateGoing", points: 0 }
        ]
    },
    contemplateGoing: {
        text: "Sonam weighs the pros and cons of going to Comic-Con. It's tempting, but also last-minute and potentially expensive.",
        image: "images/thinking.jpg",
        choices: [
            { text: "Take the plunge", next: "decideTogo", points: 15 },
            { text: "Play it safe", next: "stayHome", points: -5 }
        ]
    },
    missOpportunity: {
        text: "Days pass, and Sonam sees amazing Comic-Con photos all over social media. She realizes she missed out on something special.",
        image: "images/fomo.jpg",
        choices: [
            { text: "Regret decision", next: "start", points: -20 },
            { text: "Plan for next year", next: "planForFuture", points: 5 }
        ]
    },
    planForFuture: {
        text: "Determined not to miss out again, Sonam starts saving money and planning for next year's Comic-Con. She joins online communities to stay informed about upcoming events.",
        image: "images/planning.jpg",
        choices: [
            { text: "Start a new adventure", next: "start", points: 10 }
        ]
    },
    decideTogo: {
        text: "Excitement bubbling, Sonam decides to go to Comic-Con! Now she needs to figure out how to get to Delhi quickly. What's the best mode of transportation?",
        image: "images/excited-planning.jpg",
        choices: [
            { text: "Drive to Delhi", next: "roadTrip", points: 10 },
            { text: "Take a train", next: "trainJourney", points: 15 },
            { text: "Book a flight", next: "flightJourney", points: 20 }
        ]
    },
    roadTrip: {
        text: "Sonam decides to embark on a road trip to Delhi. The journey is long but promises adventure. As she's driving, she notices a shortcut through a scenic route. Should she take it?",
        image: "images/road-trip.jpg",
        choices: [
            { text: "Take the shortcut", next: "scenicRoute", points: 15 },
            { text: "Stick to the main road", next: "mainRoad", points: 10 }
        ]
    },
    scenicRoute: {
        text: "The scenic route is breathtaking! Sonam stops at a quaint roadside dhaba for some delicious food. As she's eating, she overhears locals talking about a nearby 'haunted' fort. Should she investigate?",
        image: "images/scenic-route.jpg",
        choices: [
            { text: "Explore the fort", next: "hauntedFort", points: 20 },
            { text: "Continue to Delhi", next: "reachDelhi", points: 15 }
        ]
    },
    hauntedFort: {
        text: "Sonam explores the eerie fort and stumbles upon an ancient comic book hidden in a dusty corner. It seems to be a rare edition! This could be valuable at Comic-Con!",
        image: "images/haunted-fort.jpg",
        choices: [
            { text: "Take the comic book", next: "reachDelhi", points: 25 },
            { text: "Leave it behind", next: "reachDelhi", points: 10 }
        ]
    },
    mainRoad: {
        text: "The main road is busy but Sonam makes good time. However, her car starts making strange noises. Should she stop at a garage or push through to Delhi?",
        image: "images/car-trouble.jpg",
        choices: [
            { text: "Stop at a garage", next: "carRepair", points: 10 },
            { text: "Keep driving", next: "carBreakdown", points: -5 }
        ]
    },
    carRepair: {
        text: "The mechanic quickly fixes the issue. While waiting, Sonam meets another Comic-Con enthusiast who offers to carpool the rest of the way.",
        image: "images/car-repair.jpg",
        choices: [
            { text: "Accept the offer", next: "reachDelhi", points: 20 },
            { text: "Decline politely", next: "reachDelhi", points: 15 }
        ]
    },
    carBreakdown: {
        text: "Sonam's car breaks down on the highway. She's stranded and running out of time. Should she call for a tow truck or try hitchhiking?",
        image: "images/car-breakdown.jpg",
        choices: [
            { text: "Call for a tow", next: "towTruck", points: 5 },
            { text: "Try hitchhiking", next: "hitchhike", points: 10 }
        ]
    },
    towTruck: {
        text: "The tow truck arrives, but it'll take hours to fix the car. Sonam might miss the Comic-Con opening!",
        image: "images/tow-truck.jpg",
        choices: [
            { text: "Wait for repairs", next: "lateArrival", points: 0 },
            { text: "Rent a car", next: "reachDelhi", points: 15 }
        ]
    },
    hitchhike: {
        text: "A group of cosplayers heading to Comic-Con stops to help Sonam. They offer her a ride in their colorful van.",
        image: "images/cosplay-van.jpg",
        choices: [
            { text: "Join the cosplayers", next: "cosplayRide", points: 25 },
            { text: "Wait for another ride", next: "lateArrival", points: 5 }
        ]
    },
    cosplayRide: {
        text: "The ride with the cosplayers is a blast! They help Sonam put together a last-minute costume from their supplies.",
        image: "images/costume-prep.jpg",
        choices: [
            { text: "Arrive at Comic-Con", next: "reachDelhi", points: 30 }
        ]
    },
    trainJourney: {
        text: "Sonam boards the train to Delhi. In her compartment, she meets a renowned comic book artist traveling incognito to Comic-Con. He offers to give her a sneak peek of his new work.",
        image: "images/train-journey.jpg",
        choices: [
            { text: "Accept the offer", next: "artistPreview", points: 25 },
            { text: "Respect privacy", next: "reachDelhi", points: 15 }
        ]
    },
    artistPreview: {
        text: "The artist shows Sonam his groundbreaking new comic. Impressed, he offers her a chance to be illustrated as a character in his next issue!",
        image: "images/comic-preview.jpg",
        choices: [
            { text: "Accept the honor", next: "reachDelhi", points: 35 },
            { text: "Politely decline", next: "reachDelhi", points: 20 }
        ]
    },
    flightJourney: {
        text: "At the airport, Sonam realizes she's forgotten her Comic-Con tickets at home. The next flight isn't for hours. What should she do?",
        image: "images/airport-dilemma.jpg",
        choices: [
            { text: "Rush home for tickets", next: "ticketRush", points: 10 },
            { text: "Try digital tickets", next: "digitalTickets", points: 20 }
        ]
    },
    ticketRush: {
        text: "Sonam barely makes it back in time for the last flight. Breathless but relieved, she boards the plane.",
        image: "images/last-minute-flight.jpg",
        choices: [
            { text: "Reach Delhi", next: "reachDelhi", points: 15 }
        ]
    },
    digitalTickets: {
        text: "Sonam manages to get digital tickets issued. While waiting for her flight, she participates in an impromptu Comic-Con trivia contest at the airport.",
        image: "images/airport-contest.jpg",
        choices: [
            { text: "Participate in trivia", next: "triviaContest", points: 25 }
        ]
    },
    triviaContest: {
        text: "Sonam's extensive comic knowledge pays off! She wins the contest and a VIP pass upgrade for Comic-Con!",
        image: "images/trivia-winner.jpg",
        choices: [
            { text: "Fly to Delhi", next: "reachDelhi", points: 35 }
        ]
    },
    reachDelhi: {
        text: "Finally, Sonam reaches Delhi! The city is buzzing with Comic-Con energy. She can see people in costumes everywhere. What should she do first?",
        image: "images/delhi-arrival.jpg",
        choices: [
            { text: "Head to Comic-Con", next: "enterComicCon", points: 20 },
            { text: "Explore Delhi", next: "exploreDelhi", points: 15 }
        ]
    },
    exploreDelhi: {
        text: "Sonam decides to explore Delhi first. She visits some famous landmarks and tries local street food. She even stumbles upon a small comic book store with rare collectibles!",
        image: "images/delhi-exploration.jpg",
        choices: [
            { text: "Buy a rare comic", next: "enterComicCon", points: 25 },
            { text: "Save money for Comic-Con", next: "enterComicCon", points: 20 }
        ]
    },
    enterComicCon: {
        text: "Sonam enters Comic-Con, her heart racing with excitement. The convention center is a geek paradise! Colorful costumes, elaborate displays, and the buzz of fellow fans surround her. Where should she go first?",
        image: "images/comic-con-entrance.jpg",
        choices: [
            { text: "Attend a panel", next: "celebrityPanel", points: 20 },
            { text: "Check out cosplay contest", next: "cosplayContest", points: 25 },
            { text: "Visit merchandise area", next: "merchandise", points: 15 }
        ]
    },
    celebrityPanel: {
        text: "Sonam attends a panel featuring her favorite comic book creators. During the Q&A session, she musters the courage to ask a question. The panelist is impressed and invites her backstage after the session!",
        image: "images/celebrity-panel.jpg",
        choices: [
            { text: "Go backstage", next: "backstagePass", points: 35 },
            { text: "Explore more of Comic-Con", next: "comicConChoice", points: 25 }
        ]
    },
    backstagePass: {
        text: "Backstage, Sonam has an inspiring conversation with her idols. They even sign her comic book and offer her an internship opportunity!",
        image: "images/backstage-meeting.jpg",
        choices: [
            { text: "Accept internship", next: "internshipOffer", points: 50 },
            { text: "Ask for mentorship instead", next: "mentorship", points: 40 }
        ]
    },
    cosplayContest: {
        text: "The cosplay contest is amazing! Sonam sees intricate costumes from her favorite comics. The host is looking for volunteers to be guest judges. Should Sonam volunteer?",
        image: "images/cosplay-contest.jpg",
        choices: [
            { text: "Volunteer as judge", next: "judgeCosplay", points: 30 },
            { text: "Enjoy as spectator", next: "comicConChoice", points: 20 }
        ]
    },
    judgeCosplay: {
        text: "As a guest judge, Sonam gets to meet the cosplayers up close and appreciate their craftsmanship. Her fair judging earns her respect from the cosplay community.",
        image: "images/judging-cosplay.jpg",
        choices: [
            { text: "Network with cosplayers", next: "cosplayNetwork", points: 35 },
            { text: "Continue exploring", next: "comicConChoice", points: 25 }
        ]
    },
    merchandise: {
        text: "The merchandise area is a treasure trove! Sonam finds rare comics, unique artwork, and exclusive collectibles. But her budget is limited. What should she prioritize?",
        image: "images/merchandise-area.jpg",
        choices: [
            { text: "Buy rare comic", next: "rareComicPurchase", points: 30 },
            { text: "Get exclusive artwork", next: "artworkPurchase", points: 25 },
            { text: "Choose collectible figurine", next: "figurinePurchase", points: 20 }
        ]
    },
    rareComicPurchase: {
        text: "Sonam buys a rare, first-edition comic. As she's paying, she notices the seller sneaking a mysterious golden ticket into her bag.",
        image: "images/rare-comic.jpg",
        choices: [
            { text: "Ask about the ticket", next: "goldenTicket", points: 40 },
            { text: "Keep it a secret", next: "secretTicket", points: 35 }
        ]
    },
    goldenTicket: {
        text: "The seller winks and tells Sonam the ticket grants access to an ultra-exclusive Comic-Con after-party with celebrity guests!",
        image: "images/golden-ticket.jpg",
        choices: [
            { text: "Attend after-party", next: "celebrityAfterParty", points: 50 },
            { text: "Sell ticket to fan", next: "sellTicket", points: 30 }
        ]
    },
    artworkPurchase: {
        text: "Sonam buys a beautiful piece of artwork. The artist recognizes her talent for color theory and offers her a chance to collaborate on a piece.",
        image: "images/artwork-purchase.jpg",
        choices: [
            { text: "Collaborate with artist", next: "artistCollaboration", points: 45 },
            { text: "Politely decline", next: "comicConChoice", points: 25 }
        ]
    },
    figurinePurchase: {
        text: "Sonam chooses a limited-edition figurine. As she's admiring it, a cosplayer dressed as the same character approaches her, impressed by her choice.",
        image: "images/figurine-purchase.jpg",
        choices: [
            { text: "Take photo with cosplayer", next: "cosplayerPhoto", points: 30 },
            { text: "Discuss character lore", next: "loreChatCosplayer", points: 35 }
        ]
    },
    comicConChoice: {
        text: "With so much to see and do, Sonam needs to decide her next move. What catches her interest the most?",
        image: "images/comic-con-crowd.jpg",
        choices: [
            { text: "Join comic creation workshop", next: "comicWorkshop", points: 40 },
            { text: "Attend VR gaming demo", next: "vrGaming", points: 35 },
            { text: "Watch cosplay performance", next: "cosplayShow", points: 30 }
        ]
    },
    comicWorkshop: {
        text: "In the workshop, Sonam learns advanced techniques from industry professionals. Her unique ideas and artistic style impress the instructors and fellow participants.",
        image: "images/comic-workshop.jpg",
        choices: [
            { text: "Share your story idea", next: "storyPitch", points: 45 },
            { text: "Focus on improving art skills", next: "artSkillImprovement", points: 40 },
            { text: "Network with other artists", next: "artistNetworking", points: 35 }
        ]
    },
    storyPitch: {
        text: "Sonam's story idea captivates the room. A renowned publisher attending the workshop offers her a chance to pitch it formally!",
        image: "images/story-pitch.jpg",
        choices: [
            { text: "Accept the pitching opportunity", next: "publisherMeeting", points: 55 },
            { text: "Ask for mentorship instead", next: "industryMentor", points: 50 },
            { text: "Collaborate with another artist", next: "artistCollaboration", points: 45 }
        ]
    },
    publisherMeeting: {
        text: "In a nerve-wracking meeting, Sonam presents her story to the publishing team. They are impressed and offer her a contract for a limited series!",
        image: "images/publisher-meeting.jpg",
        choices: [
            { text: "Sign the contract", next: "comicSeriesSuccess", points: 70 },
            { text: "Negotiate terms", next: "contractNegotiation", points: 60 },
            { text: "Ask for time to consider", next: "careerCrossroads", points: 50 }
        ]
    },
    vrGaming: {
        text: "The VR game puts Sonam in her favorite comic book universe. Her quick reflexes and deep knowledge of the lore impresses the developers.",
        image: "images/vr-gaming.jpg",
        choices: [
            { text: "Suggest game improvements", next: "gameDevFeedback", points: 45 },
            { text: "Enjoy the full demo", next: "vrChampion", points: 40 }
        ]
    },
    cosplayShow: {
        text: "The cosplay performance is a spectacular display of creativity. Inspired, Sonam wonders if she should try cosplaying too.",
        image: "images/cosplay-show.jpg",
        choices: [
            { text: "Improvise a costume", next: "impromptuCosplay", points: 40 },
            { text: "Plan for next Comic-Con", next: "futureCosplayPlan", points: 35 }
        ]
    },
    impromptuCosplay: {
        text: "With some quick thinking and help from fellow fans, Sonam puts together a creative costume. She's invited to join the cosplay parade!",
        image: "images/improv-cosplay.jpg",
        choices: [
            { text: "Join the parade", next: "cosplayParade", points: 50 },
            { text: "Cheer from sidelines", next: "paradeSidelines", points: 35 }
        ]
    },
    cosplayParade: {
        text: "Sonam's improvised costume is a hit! Her creativity catches the eye of a famous cosplayer who offers to team up for a duo costume next year.",
        image: "images/cosplay-parade.jpg",
        choices: [
            { text: "Accept duo offer", next: "duoCosplanPlan", points: 55 },
            { text: "Prefer solo cosplay", next: "soloCareerCosplay", points: 45 }
        ]
    },
    celebrityAfterParty: {
        text: "The after-party is a dream come true! Sonam mingles with celebrities, artists, and industry insiders. A famous director is discussing their next comic book movie adaptation.",
        image: "images/celebrity-party.jpg",
        choices: [
            { text: "Share movie ideas", next: "moviePitch", points: 60 },
            { text: "Network with industry pros", next: "industryNetwork", points: 55 }
        ]
    },
    moviePitch: {
        text: "The director loves Sonam's fresh perspective! They offer her a chance to visit the movie set and contribute ideas.",
        image: "images/movie-discussion.jpg",
        choices: [
            { text: "Accept movie set invite", next: "movieSetVisit", points: 70 },
            { text: "Suggest comic collaboration instead", next: "comicCollaboration", points: 65 }
        ]
    },
    
    comicConFinale: {
        text: "As Comic-Con comes to a close, Sonam reflects on her incredible journey. She's made new friends, gained valuable experiences, and opened doors to exciting opportunities.",
        image: "images/comic-con-finale.jpg",
        choices: [
            { text: "Plan for next year", next: "futurePlans", points: 50 },
            { text: "Pursue new opportunity", next: "careerChoice", points: 60 }
        ]
    },
    futurePlans: {
        text: "Inspired by her Comic-Con adventure, Sonam starts planning for next year. She considers starting a blog about her comic experiences.",
        image: "images/future-planning.jpg",
        choices: [
            { text: "Start a comic blog", next: "startBlog", points: 55 },
            { text: "Begin a cosplay project", next: "startCosplay", points: 50 }
        ]
    },
    careerChoice: {
        text: "With several exciting opportunities ahead, Sonam must decide which path to pursue in the comic industry.",
        image: "images/career-crossroads.jpg",
        choices: [
            { text: "Become a comic artist", next: "comicArtistPath", points: 65 },
            { text: "Pursue comics writing", next: "comicWriterPath", points: 65 },
            { text: "Enter cosplay professionally", next: "professionalCosplay", points: 60 }
        ]
    },
    endingChoice: {
        text: "As Sonam's Comic-Con adventure concludes, she realizes this is just the beginning of her journey in the world of comics.",
        image: "images/new-beginnings.jpg",
        choices: [
            { text: "Start a new adventure", next: "start", points: 75 }
        ]
    },
    comicSeriesSuccess: {
        text: "Sonam's comic series becomes a hit! She's now a rising star in the industry, with fans eagerly awaiting her next creation.",
        image: "images/comic-series-success.jpg",
        choices: [
            { text: "Start a new adventure", next: "start", points: 100 }
        ]
    },
    hollywoodAdaptation: {
        text: "A major Hollywood studio approaches Sonam to adapt her comic into a blockbuster movie. She's about to become a household name!",
        image: "images/hollywood-deal.jpg",
        choices: [
            { text: "Start a new adventure", next: "start", points: 120 }
        ]
    },
    indieComicIcon: {
        text: "Sonam's unique style gains a cult following. She becomes an icon in the indie comic scene, inspiring a new generation of artists.",
        image: "images/indie-comic-icon.jpg",
        choices: [
            { text: "Start a new adventure", next: "start", points: 90 }
        ]
    },
    comicConOrganizer: {
        text: "Inspired by her experiences, Sonam starts organizing her own comic conventions, bringing together fans and creators from around the world.",
        image: "images/comic-con-organizer.jpg",
        choices: [
            { text: "Start a new adventure", next: "start", points: 95 }
        ]
    },
    digitalComicPioneer: {
        text: "Sonam revolutionizes the industry by creating an innovative digital comic platform, changing how people read and interact with comics.",
        image: "images/digital-comic-platform.jpg",
        choices: [
            { text: "Start a new adventure", next: "start", points: 110 }
        ]
    },
    comicEducator: {
        text: "Combining her passion for comics and education, Sonam starts a successful online school teaching comic creation to aspiring artists worldwide.",
        image: "images/comic-educator.jpg",
        choices: [
            { text: "Start a new adventure", next: "start", points: 85 }
        ]
    }
};

function startStory() {
    score = 0;
    characterStats = { creativity: 50, knowledge: 50, social: 50, luck: 50 };
    updateScore(0);
    updateStats({});
    showStoryPart(story.start);
    document.getElementById('start-page').classList.add('hidden');
    document.getElementById('story-container').classList.remove('hidden');
    restartButton.classList.remove('hidden');
}

document.getElementById('start-button').addEventListener('click', startStory);
restartButton.addEventListener('click', startStory);

// Initialize the story
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('story-container').classList.add('hidden');
    restartButton.classList.add('hidden');
});

function initializeNavbar() {
    const navButtons = document.querySelectorAll('.nav-button');
    const navPill = document.querySelector('.nav-pill');

    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Move the pill
            navPill.style.left = `${index * 25 + 5}%`;
            
            // Here you can add functionality for each button
            console.log(`Clicked on ${button.textContent}`);
        });
    });
}

function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

function showStoryPart(part) {
    storyContainer.classList.add('animate__fadeOut');
    
    setTimeout(() => {
        storyImage.style.backgroundImage = `url('${part.image}')`;
        storyText.textContent = part.text;
        
        choiceButtons.innerHTML = '';
        part.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.classList.add('animate__animated', 'animate__bounceIn');
            button.addEventListener('click', () => showStoryPart(story[choice.next]));
            choiceButtons.appendChild(button);
        });

        storyContainer.classList.remove('animate__fadeOut');
        storyContainer.classList.add('animate__fadeIn');
        storyImage.classList.add('animate__animated', 'animate__zoomIn');
        storyText.classList.add('animate__animated', 'animate__slideInUp');

        // Add weather information to the story
        getWeather(part.next);
        
        // Add random events
        // addRandomEvent();

        // Scroll to the top of the container
        storyContainer.scrollTop = 0;
    }, 500);
}
let score = 0;
let characterStats = {
    creativity: 50,
    knowledge: 50,
    social: 50,
    luck: 50
};

function updateScore(points) {
    score += points;
    document.getElementById('score-display').textContent = `Score: ${score}`;
}

function updateStats(statChanges) {
    for (let stat in statChanges) {
        characterStats[stat] += statChanges[stat];
        characterStats[stat] = Math.max(0, Math.min(100, characterStats[stat]));
        document.getElementById(`${stat}-stat`).textContent = `${stat.charAt(0).toUpperCase() + stat.slice(1)}: ${characterStats[stat]}`;
    }
}

function typeWriter(text, element, callback) {
    let i = 0;
    element.innerHTML = '';
    element.classList.add('typewriter');
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 25);
        } else {
            element.classList.remove('typewriter');
            if (callback) callback();
        }
    }
    
    type();
}

function showStoryPart(part) {
    clearTimeout(window.choiceTimer);
    storyContainer.classList.add('animate__fadeOut');
    
    setTimeout(() => {
        storyImage.style.backgroundImage = `url('${part.image}')`;
        
        typeWriter(part.text, storyText, () => {
            choiceButtons.innerHTML = '';
            part.choices.forEach(choice => {
                const button = document.createElement('button');
                button.textContent = choice.text;
                button.classList.add('animate__animated', 'animate__bounceIn');
                button.addEventListener('click', () => {
                    updateScore(choice.points);
                    if (choice.stats) {
                        updateStats(choice.stats);
                    }
                    showStoryPart(story[choice.next]);
                });
                choiceButtons.appendChild(button);
            });
        });

        storyContainer.classList.remove('animate__fadeOut');
        storyContainer.classList.add('animate__fadeIn');
        storyImage.classList.add('animate__animated', 'animate__zoomIn');

        getWeather(part.next);
        
        if (part.timed) {
            startTimer(part.timed, part.timedDefault);
        }

        storyContainer.scrollTop = 0;
    }, 500);
}
function startTimer(duration, defaultChoice) {
    let timeLeft = duration;
    const timerDisplay = document.getElementById('timer-display');
    timerDisplay.textContent = `Time left: ${timeLeft}s`;
    timerDisplay.style.display = 'block';

    window.choiceTimer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(window.choiceTimer);
            timerDisplay.style.display = 'none';
            showStoryPart(story[defaultChoice]);
        }
    }, 1000);
}

async function getWeather(nextPart) {
    if (nextPart === 'reachDelhi') {
        try {
            const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                params: {
                    q: 'Delhi,IN',
                    appid: '439058ff8f1737162045150286d1f2b4',
                    units: 'metric'
                }
            });
            const weather = response.data;
            const weatherInfo = `The weather in Delhi is ${weather.weather[0].description} with a temperature of ${weather.main.temp}°C.`;
            document.getElementById('weather-info').textContent = weatherInfo;
            document.getElementById('weather-info').classList.add('animate__animated', 'animate__fadeIn');
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    } else {
        document.getElementById('weather-info').textContent = '';
    }
}

function addRandomEvent() {
    const randomEventChance = Math.random();
    if (randomEventChance < 0.2) {
        const eventText = document.createElement('p');
        eventText.classList.add('speech-bubble', 'animate__animated', 'animate__bounceIn');
        eventText.textContent = getRandomEventText();
        storyContent.insertBefore(eventText, storyText.nextSibling);
        
        setTimeout(() => {
            eventText.classList.add('animate__bounceOut');
            setTimeout(() => eventText.remove(), 1000);
        }, 5000);
    }
}
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

const buttons = document.getElementsByTagName('button');
for (const button of buttons) {
    button.addEventListener('click', createRipple);
}
function getRandomEventText() {
    const events = [
        "Breaking news: A superhero has been spotted flying over Delhi!",
        "Attention: A cosplayer just broke the world record for the most accurate costume!",
        "Alert: Free ice cream is being distributed at the convention center entrance!",
        "Announcement: A surprise celebrity guest has just arrived at Comic-Con!",
        "Wow: Someone just proposed to their partner in full superhero costume on the main stage!"
    ];
    return events[Math.floor(Math.random() * events.length)];
}

function startStory() {
    score = 0;
    characterStats = { creativity: 50, knowledge: 50, social: 50, luck: 50 };
    updateScore(0);
    updateStats({});
    showStoryPart(story.start);
    document.getElementById('start-page').classList.add('hidden');
    document.getElementById('story-container').classList.remove('hidden');
    document.getElementById('navbar').style.display = 'flex'; // Show the navbar
    restartButton.classList.remove('hidden');
}

document.getElementById('start-button').addEventListener('click', startStory);
restartButton.addEventListener('click', startStory);

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('story-container').classList.add('hidden');
    document.getElementById('navbar').style.display = 'none'; // Hide the navbar initially
    restartButton.classList.add('hidden');
    initializeNavbar(); // Initialize the navbar
    
    // Add ripple effect to all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
});