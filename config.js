// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "Wendy Lisa Rosarion",
    pageTitle: "🌹 My Eternal Valentine - Wendy 💖",
    
    // Multi-layered floating effects
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓', '✨', '🌹'], // Added sparkles and roses
        bears: ['🧸', '🐻', '👩‍❤️‍👨', '💌']                // Added couple and love letter
    },

    questions: {
        first: {
            text: "Do you know how much you mean to me? ✨",
            yesBtn: "Tell me! ❤️",
            noBtn: "I have a guess...",
            secretAnswer: "You're my entire world! 🌎❤️"
        },
        second: {
            text: "On a scale of 'A lot' to 'Infinite', how much do you love me?",
            startText: "My love for you is...",
            nextBtn: "See the result 🏹"
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2026? 🌹",
            yesBtn: "Yes, Forever! 💍",
            noBtn: "Let me think... (Just kidding, YES!)"
        }
    },

    // Detailed love meter milestones
    loveMessages: {
        extreme: "WOOOOW! My heart just exploded! 🚀💥💞 Wendy, you're officially my soulmate!",
        high: "To infinity and beyond! 🚀💝 I'm the luckiest person alive!",
        normal: "And beyond! 🥰 Every day with you is a gift."
    },

    // Grand Finale Celebration
    celebration: {
        title: "Yay! You've made me the happiest person in the universe! 🎉💝",
        message: "I can't wait to hold you, give you a huge hug, and a thousand kisses! 💋✨",
        emojis: "🎁💖🤗💝💋❤️💕🌹✨💍"
    },

    colors: {
        backgroundStart: "#ff9a9e",      // Soft sunset pink
        backgroundEnd: "#fad0c4",        // Peachy cream
        buttonBackground: "#ff4d6d",     // Deep romantic rose
        buttonHover: "#ff758f",          // Lighter rose petal
        textColor: "#800f2f"             // Elegant deep burgundy for readability
    },

    animations: {
        floatDuration: "12s",           // Slightly faster for more energy
        floatDistance: "60px",
        bounceSpeed: "0.4s",            // Snappier, more exciting bounces
        heartExplosionSize: 1.8         // Bigger heart explosion on "Yes!"
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dwjbgxbag/video/upload/v1769902185/Idea_22_sig4qr.mp3",
        startText: "🎵 Play Our Song",
        stopText: "🔇 Silence"
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 