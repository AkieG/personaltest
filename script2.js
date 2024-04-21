function changeBackground() {
    var selectedPlayer = document.getElementById("name").value;
    var errorSpan = document.getElementById("error");
    var playerImages = {
      "fictionalbackground": "fictionalbackground.jpg",
      "rukawa": "rback.jpg",
      "sakuragi": "sback.jpg",
      "miyagi": "miyaback.png",
      "akagi": "akagiback.jpg",
      "mitsui": "mback.jpg",
      "kogure": "kogureback.jpg"
      // Add more player-image mappings as needed
    };

    if (selectedPlayer === "none") {
      document.body.style.backgroundImage = "none";
      errorSpan.textContent = "";
    } else if (playerImages[selectedPlayer]) {
      document.body.style.backgroundImage = "url(" + playerImages[selectedPlayer] + ")";
      errorSpan.textContent = "";
    } else {
      document.body.style.backgroundImage = "";
      errorSpan.textContent = "Invalid player selected";
    }
  }

  // Add event listener to the select element
  document.getElementById("name").addEventListener("change", changeBackground);


function simulateAttributes(name) {
    let attributes = {};

    // Simulate attributes based on name
    switch (name) {
        case "rukawa":
            attributes = { 
                "Title": "Ghost Threat",
                "Name": "Kaede Rukawa",
                "Role": "Small Forward",

                "Close Shot": 80,
                "Driving Layup": 98,
                "Driving Dunk": 95,
                "Standing Dunk": 85,
                "Post Control": 25,

                "Mid-Range Shot": 94,
                "Three Point Shot": 83,
                "Free Throw": 94,

                "Pass Accuracy": 75,
                "Ball Handle": 77,
                "Speed w/ Ball": 95,

                "Interior Defense": 55,
                "Perameter Defense": 65,
                "Steal": 75,
                "Block": 83,
                "Offensive Rebound": 85,
                "Defense Rebound": 95,

                "Speed": 86,
                "Acceleration": 86,
                "Strength": 91,
                "Vertical": 93,
                "Stamina": 99,
                "Hussle": 99
            }
            break;

        case "sakuragi":
            attributes = {
                "Title": "Rebound King",
                "Name": "Hanamichi Sakuragi",
                "Role": "Power Forward",

                "Close Shot": 80,
                "Driving Layup": 75,
                "Driving Dunk": 89,
                "Standing Dunk": 99,
                "Post Control": 25,

                "Mid-Range Shot": 85,
                "Three Point Shot": 21,
                "Free Throw": 85,

                "Pass Accuracy": 56,
                "Ball Handle": 72,
                "Speed w/ Ball": 65,

                "Interior Defense": 75,
                "Perameter Defense": 75,
                "Steal": 56,
                "Block": 93,
                "Offensive Rebound": 87,
                "Defense Rebound": 97,

                "Speed": 84,
                "Acceleration": 84,
                "Strength": 92,
                "Vertical": 99,
                "Stamina": 99,
                "Hussle": 99
            }
            break;

            case "miyagi":
            attributes = {
                "Title" : "I am Number One",
                "Name": "Ryota Miyagi",
                "Role" : "Point Guard",

                "Close Shot": 80,
                "Driving Layup": 93,
                "Driving Dunk": 30,
                "Standing Dunk": 25,
                "Post Control": 25,

                "Mid-Range Shot": 96,
                "Three Point Shot": 78,
                "Free Throw": 96,

                "Pass Accuracy": 99,
                "Ball Handle": 93,
                "Speed w/ Ball": 92,

                "Interior Defense": 68,
                "Perameter Defense": 78,
                "Steal": 99,
                "Block": 68,
                "Offensive Rebound": 47,
                "Defense Rebound": 57,

                "Speed": 92,
                "Acceleration": 92,
                "Strength": 54,
                "Vertical": 85,
                "Stamina": 99,
                "Hussle": 99
            }
            break;

            case "akagi":
            attributes = {
                "Title": "King Kong Roar",
                "Name": "Taknori Akagi",
                "Role": "Center",

                "Close Shot": 93,
                "Driving Layup": 85,
                "Driving Dunk": 89,
                "Standing Dunk": 99,
                "Post Control": 70,

                "Mid-Range Shot": 78,
                "Three Point Shot": 25,
                "Free Throw": 78,

                "Pass Accuracy": 57,
                "Ball Handle": 65,
                "Speed w/ Ball": 65,

                "Interior Defense": 96,
                "Perameter Defense": 86,
                "Steal": 57,
                "Block": 95,
                "Offensive Rebound": 85,
                "Defense Rebound": 95,

                "Speed": 65,
                "Acceleration": 65,
                "Strength": 96,
                "Vertical": 85,
                "Stamina": 99,
                "Hussle": 99
            }
            break;

            case "mitsui":
            attributes = {
                "Title": "Man of FIre",
                "Name": "Hisashi Mitsui",
                "Role": "Shooting Guard",

                "Close Shot": 88,
                "Driving Layup": 81,
                "Driving Dunk": 52,
                "Standing Dunk": 25,
                "Post Control": 25,

                "Mid-Range Shot": 99,
                "Three Point Shot": 99,
                "Free Throw": 90,

                "Pass Accuracy": 88,
                "Ball Handle": 75,
                "Speed w/ Ball": 77,

                "Interior Defense": 76,
                "Perameter Defense": 86,
                "Steal": 88,
                "Block": 68,
                "Offensive Rebound": 70,
                "Defense Rebound": 80,

                "Speed": 77,
                "Acceleration": 77,
                "Strength": 70,
                "Vertical": 80,
                "Stamina": 75,
                "Hussle": 99
            }
            break;

            case "kogure":
            attributes = {
                "Title": "Sixth Man",
                "Name": "Kiminobu Kogure",
                "Role": "Small Forward",

                "Close Shot": 78,
                "Driving Layup": 93,
                "Driving Dunk": 32,
                "Standing Dunk": 25,
                "Post Control": 25,

                "Mid-Range Shot": 98,
                "Three Point Shot": 97,
                "Free Throw": 98,

                "Pass Accuracy": 74,
                "Ball Handle": 73,
                "Speed w/ Ball": 80,

                "Interior Defense": 70,
                "Perameter Defense": 80,
                "Steal": 74,
                "Block": 80,
                "Offensive Rebound": 57,
                "Defense Rebound": 67,

                "Speed": 80,
                "Acceleration": 80,
                "Strength": 71,
                "Vertical": 83,
                "Stamina": 71,
                "Hussle": 99
            }
            break;
        }
            return attributes;
        }


        function assignBadges(name, attributes) {
            // Your code to assign badges based on position and attributes goes here
            // Example: Replace this with your code to assign specific badges
            let badges = []

             if (attributes["Three Point Shot"] < 85) badges.push({ badge: "Bronze Agent 3", color: "bronze" });
            else if (attributes["Three Point Shot"] < 93) badges.push({ badge: " Silver Agent 3", color: "silver"});
            else if (attributes["Three Point Shot"] < 97) badges.push({badge: " Gold Agent 3", color: "gold"});
            else if (attributes["Three Point Shot"] >= 97) badges.push({badge: " Hall of Fame Agent 3", color: "purple"});

            if (attributes["Three Point Shot"] < 78) badges.push({badge: " Bronze Blinders", color: "bronze"});
            else if (attributes["Three Point Shot"] < 88) badges.push({ badge: "Silver Blinderes", color: "silver" });
            else if (attributes["Three Point Shot"] < 96) badges.push({badge: " Gold Blinders", colo: "gold"});
            else if (attributes["Three Point Shot"] >= 97) badges.push({badge: " Hall of Fame Blinders", color: "purple"});

            if (attributes["Mid-Range Shot"] < 69) badges.push({badge: " Bronze Catch and Shoot", color: "bronze"});
            else if (attributes["Mid-Range Shot"] < 81) badges.push({badge: " Silver Catch and Shoot", color: "silver"});
            else if (attributes["Mid-Range Shot"] < 92) badges.push({badge: " Gold Catch and Shoot", color: "gold"});
            else if (attributes["Mid-Range Shot"] >= 93) badges.push({badge: " Hall of Fame Catch and Shoot", color: "purple"});
            
            if (attributes["Three Point Shot"] < 75) badges.push({badge: " Bronze Claymore", color: "bronze"});
            else if (attributes["Three Point Shot"] < 81) badges.push({badge: " Silver Claymore", color: "silver"});
            else if (attributes["Three Point Shot"] < 91) badges.push({badge: " Gold Claymore", color: "gold"});
            else if (attributes["Three Point Shot"] >= 92) badges.push({badge: " Hall of Fame Claymore", color: "purple"});
            
            if (attributes["Three Point Shot"] < 63) badges.push({badge: " Bronze Comeback Kid", color: "bronze"});
            else if (attributes["Three Point Shot"] < 74) badges.push({badge: " Silver Comeback Kid", color: "silver"});
            else if (attributes["Three Point Shot"] < 85) badges.push({badge: " Gold Comeback Kid", color: "gold"});
            else if (attributes["Three Point Shot"] >= 86) badges.push({badge: " Hall of Fame Comeback Kid", color: "purple"});
            
            if (attributes["Three Point Shot"] < 75) badges.push({badge: " Bronze Corner Specialist", color:"bronzer"});
            else if (attributes["Three Point Shot"] < 84) badges.push({badge: " Silver Corner Specialist",color:"silver"});
            else if (attributes["Three Point Shot"] < 93) badges.push({badge: " Gold Corner Specialist",color:"gold"});
            else if (attributes["Three Point Shot"] >= 94) badges.push({badge: " Hall of Fame Corner Specialist",color:"purple"});
            
            if (attributes["Three Point Shot"] < 83) badges.push({badge: " Bronze Deadeye",color:"bronze"});
            else if (attributes["Three Point Shot"] < 89) badges.push({badge: " Silver Deadeye",color:"silver"});
            else if (attributes["Three Point Shot"] < 97) badges.push({badge: " Gold Deadeye",color:"gold"});
            else if (attributes["Three Point Shot"] >= 98) badges.push({badge: " Hall of Fame Deadeye",color:"purple"});
            
            if (attributes["Three Point Shot"] < 75) badges.push({badge: " Bronze Green Machine",color:"bronze"});
            else if (attributes["Three Point Shot"] < 86) badges.push({badge: " Silver Green Machine",color:"silver"});
            else if (attributes["Three Point Shot"] < 94) badges.push({badge: " Gold Green Machine",color:"gold"});
            else if (attributes["Three Point Shot"] >= 95) badges.push({badge: " Hall of Fame Green Machine",color:"purple"});
            
            if (attributes["Three Point Shot"] < 70) badges.push({badge: " Bronze Guard Up",color:"bronze"});
            else if (attributes["Three Point Shot"] < 81) badges.push({badge: " Silver Guard Up",color:"silver"});
            else if (attributes["Three Point Shot"] < 90) badges.push({badge: " Gold Guard Up",color:"gold"});
            else if (attributes["Three Point Shot"] >= 91) badges.push({badge: " Hall of Fame Guard Up",color:"purple"});
            
            if (attributes["Three Point Shot"] < 91) badges.push({badge: " Bronze Limitless Range",color:"bronze"});
            else if (attributes["Three Point Shot"] < 95) badges.push({badge: " Silver Limitless Range",color:"silver"});
            else if (attributes["Three Point Shot"] < 98) badges.push({badge: " Gold Limitless Range",color:"gold"});
            else if (attributes["Three Point Shot"] >= 99) badges.push({badge: " Hall of Fame Limitless Range",color:"purple"});
            
            if (attributes["Mid-Range Shot"] < 71) badges.push({badge: " Bronze Middy Magician",color:"bronze"});
            else if (attributes["Mid-Range Shot"] < 83) badges.push({badge: " Silver Middy Magician",color:"silver"});
            else if (attributes["Mid-Range Shot"] < 91) badges.push({badge: " Gold Middy Magician",color:"gold"});
            else if (attributes["Mid-Range Shot"] >= 92) badges.push({badge: " Hall of Fame Middy Magician",color:"purple"});
            
            if (attributes["Three Point Shot"] < 70) badges.push({badge: " Bronze Slippery Off Ball",color:"bronze"});
            else if (attributes["Three Point Shot"] < 83) badges.push({badge: " Silver Slippery Off Ball",color:"silver"});
            else if (attributes["Three Point Shot"] < 91) badges.push({badge: " Gold Slippery Off Ball",color:"gold"});
            else if (attributes["Three Point Shot"] >= 92) badges.push({badge: " Hall of Fame Slippery Off Ball",color:"purple"});
            
            if (attributes["Three Point Shot"] < 75) badges.push({badge: " Bronze Space Creator",color:"bronze"});
            else if (attributes["Three Point Shot"] < 87) badges.push({badge: " Silver Space Creator",color:"silver"});
            else if (attributes["Three Point Shot"] < 95) badges.push({badge: " Gold Space Creator",color:"gold"});
            else if (attributes["Three Point Shot"] >= 96) badges.push({badge: " Hall of Fame Space Creator",color:"purple"});
            
            if (attributes["Ball Handle"] < 74) badges.push({badge: " Bronze Ankle Breaker",color:"bronze"});
            else if (attributes["Ball Handle"] < 84) badges.push({badge: " Silver Ankle Breaker",color:"silver"});
            else if (attributes["Ball Handle"] < 92) badges.push({badge: " Gold Ankle Breaker",color:"gold"});
            else if (attributes["Ball Handle"] >= 93) badges.push({badge: " Hall of Fame Ankle Breaker",color:"purple"});
            
            if (attributes["Pass Accuracy"] < 74) badges.push({badge: " Bronze Break Starter",color:"bronze"});
            else if (attributes["Pass Accuracy"] < 85) badges.push({badge: " Silver Break Starter",color:"silver"});
            else if (attributes["Pass Accuracy"] < 91) badges.push({badge: " Gold Break Starter",color:"gold"});
            else if (attributes["Pass Accuracy"] >= 92) badges.push({badge: " Hall of Fame Break Starter",color:"purple"});
            
            if (attributes["Pass Accuracy"] < 72) badges.push({badge: " Bronze Dimer",color:"bronze"});
            else if (attributes["Pass Accuracy"] < 88) badges.push({badge: " Silver Dimer",color:"silver"});
            else if (attributes["Pass Accuracy"] < 95) badges.push({badge: " Gold Dimer",color:"gold"});
            else if (attributes["Pass Accuracy"] >= 96) badges.push({badge: " Hall of Fame Dimer",color:"purple"});
            
            if (attributes["Ball Handle"] < 79) badges.push({badge: " Bronze Handles for Days",color:"bronze"});
            else if (attributes["Ball Handle"] < 89) badges.push({badge: " Silver Handles for Days",color:"silver"});
            else if (attributes["Ball Handle"] < 94) badges.push({badge: " Gold Handles for Days",color:"gold"});
            else if (attributes["Ball Handle"] >= 95) badges.push({badge: " Hall of Fame Handles for Days",color:"purple"});

            if (attributes["Speed w/ Ball"] < 74) badges.push({badge: " Bronze Hyperdrive",color:"bronze"});
            else if (attributes["Speed w/ Ball"] < 82) badges.push({badge: " Silver Hyperdrive",color:"silver"});
            else if (attributes["Speed w/ Ball"] < 90) badges.push({badge: " Gold Hyperdrive",color:"gold"});
            else if (attributes["Speed w/ Ball"] >= 91) badges.push({badge: " Hall of Fame Hyperdrive",color:"purple"});

            if (attributes["Ball Handle"] < 86) badges.push({badge: " Bronze Killer Combo",color:"bronze"});
            else if (attributes["Ball Handle"] < 92) badges.push({badge: " Silver Killer Combo",color:"silver"});
            else if (attributes["Ball Handle"] < 97) badges.push({badge: " Gold Killer Combo",color:"gold"});
            else if (attributes["Ball Handle"] >= 98) badges.push({badge: " Hall of Fame Killer Combo",color:"purple"});
            
            if (attributes["Pass Accuracy"] < 83) badges.push({badge:" Bronze Needle Threader",color:"bronze"});
            else if (attributes["Pass Accuracy"] < 90) badges.push({badge: " Silver Needle Threader",color:"silver"});
            else if (attributes["Pass Accuracy"] < 97) badges.push({badge: " Gold Needle Threader",color:"gold"});
            else if (attributes["Pass Accuracy"] >= 98) badges.push({badge: " Hall of Fame Needle Threader",color:"purple"});
            
            if (attributes["Pass Accuracy"] < 73) badges.push({badge: " Bronze Post Playmaker",color:"bronze"});
            else if (attributes["Pass Accuracy"] < 82) badges.push({badge: " Silver Post Playmaker",color:"silver"});
            else if (attributes["Pass Accuracy"] < 89) badges.push({badge: " Gold Post Playmaker",color:"gold"});
            else if (attributes["Pass Accuracy"] >= 90) badges.push({badge: " Hall of Fame Post Playmaker",color:"purple"});
            
            if (attributes["Pass Accuracy"] < 74) badges.push({badge: " Bronze Special Delivery",color:"bronze"});
            else if (attributes["Pass Accuracy"] < 82) badges.push({badge: " Silver Special Delivery",color:"silver"});
            else if (attributes["Pass Accuracy"] < 90) badges.push({badge: " Gold Special Delivery",color:"gold"});
            else if (attributes["Pass Accuracy"] >= 91) badges.push({badge: " Hall of Fame Special Delivery",color:"purple"});
            
            if (attributes["Ball Handle"] < 79) badges.push({badge: " Bronze Unpluckable",color:"bronze"});
            else if (attributes["Ball Handle"] < 91) badges.push({badge: " Silver Unpluckable",color:"silver"});
            else if (attributes["Ball Handle"] < 97) badges.push({badge: " Gold Unpluckable",color:"gold"});
            else if (attributes["Ball Handle"] >= 98) badges.push({badge: " Hall of Fame Unpluckable",color:"purple"});

            if (attributes["Driving Layup"] < 75) badges.push({badge: " Bronze Acrobat",color:"bronze"});
            else if (attributes["Driving Layup"] < 83) badges.push({badge: " Silver Acrobat",color:"silver"});
            else if (attributes["Driving Layup"] < 89) badges.push({badge: " Gold Acrobat",color:"gold"});
            else if (attributes["Driving Layup"] >= 90) badges.push({badge: " Hall of Fame Acrobat",color:"purple"});

            if (attributes["Vertical"] < 66) badges.push({badge: " Bronze Aerial Wizard",color:"bronze"});
            else if (attributes["Vertical"] < 71) badges.push({badge: " Silver Aerial Wizard",color:"silver"});
            else if (attributes["Vertical"] < 83) badges.push({badge: " Gold Aerial Wizard",color:"gold"});
            else if (attributes["Vertical"] >= 84) badges.push({badge: " Hall of Fame Aerial Wizard",color:"purple"});
            
            if (attributes["Post Control"] < 66) badges.push({badge: " Bronze Backdown Punisher",color:"bronze"});
            else if (attributes["Post Control"] < 78) badges.push({badge: " Silver Backdown Punisher",color:"silver"});
            else if (attributes["Post Control"] < 88) badges.push({badge: " Gold Backdown Punisher",color:"gold"});
            else if (attributes["Post Control"] >= 89) badges.push({badge: " Hall of Fame Backdown Punisher",color:"purple"});
            
            if (attributes["Post Control"] < 69) badges.push({badge: " Bronze Dream Shake",color:"bronze"});
            else if (attributes["Post Control"] < 80) badges.push({badge: " Silver Dream Shake",color:"silver"});
            else if (attributes["Post Control"] < 89) badges.push({badge: " Gold Dream Shake",color:"gold"});
            else if (attributes["Post Control"] >= 90) badges.push({badge: " Hall of Fame Dream Shake",color:"purple"});
            
            if (attributes["Post Control"] < 74) badges.push({badge: " Bronze Dropstepper",color:"bronze"});
            else if (attributes["Post Control"] < 83) badges.push({badge: " Silver Dropstepper",color:"silver"});
            else if (attributes["Post Control"] < 94) badges.push({badge: " Gold Dropstepper",color:"gold"});
            else if (attributes["Post Control"] >= 95) badges.push({badge: " Hall of Fame Dropstepper",color:"purple"});
            
            if (attributes["Close Shot"] < 80) badges.push({badge: " Bronze Fast Twitch",color:"bronze"});
            else if (attributes["Close Shot"] < 89) badges.push({badge: " Silver Fast Twitch",color:"silver"});
            else if (attributes["Close Shot"] < 97) badges.push({badge: " Gold Fast Twitch",color:"gold"});
            else if (attributes["Close Shot"] >= 98) badges.push({badge: " Hall of Fame Fast Twitch",color:"purple"});
            
            if (attributes["Strength"] < 59) badges.push({badge: " Bronze Fearless Finisher",color:"bronze"});
            else if (attributes["Strength"] < 64) badges.push({badge: " Silver Fearless Finisher",color:"silver"});
            else if (attributes["Strength"] < 66) badges.push({badge: " Gold Fearless Finisher",color:"gold"});
            else if (attributes["Strength"] >= 67) badges.push({badge: " Hall of Fame Fearless Finisher",color:"purple"});

            if (attributes["Close Shot"] < 61) badges.push({badge: " Bronze Giant Slayer",color:"bronze"});
            else if (attributes["Close Shot"] < 74) badges.push({badge: " Silver Giant Slayer",color:"silver"});
            else if (attributes["Close Shot"] < 87) badges.push({badge: " Gold Giant Slayer",color:"gold"});
            else if (attributes["Close Shot"] >= 88) badges.push({badge: " Hall of Fame Giant Slayer",color:"purple"});
            
            if (attributes["Close Shot"] < 76) badges.push({badge: " Bronze Masher",color:"bronze"});
            else if (attributes["Close Shot"] < 83) badges.push({badge: " Silver Masher",color:"silver"});
            else if (attributes["Close Shot"] < 93) badges.push({badge: " Gold Masher",color:"gold"});
            else if (attributes["Close Shot"] >= 94) badges.push({badge: " Hall of Fame Masher",color:"purple"});

            if (attributes["Post Control"] < 71) badges.push({badge: " Bronze Post Spin Techinician",color:"bronze"});
            else if (attributes["Post Control"] < 80) badges.push({badge: " Silver Post Spin Techinician",color:"silver"});
            else if (attributes["Post Control"] < 89) badges.push({badge: " Gold Post Spin Techinician",color:"gold"});
            else if (attributes["Post Control"] >= 90) badges.push({badge: " Hall of Fame Post Spin Techinician",color:"purple"});

            if (attributes["Vertical"] < 74) badges.push({badge: " Bronze Posterier",color:"bronze"});
            else if (attributes["Vertical"] < 79) badges.push({badge: " Silver Posterier",color:"silver"});
            else if (attributes["Vertical"] < 84) badges.push({badge: " Gold Posterier",color:"gold"});
            else if (attributes["Vertical"] >= 85) badges.push({badge: " Hall of Fame Posterier",color:"purple"});

            if (attributes["Driving Layup"] < 59) badges.push({badge: " Bronze Pro Touch",color:"bronze"});
            else if (attributes["Driving Layup"] < 69) badges.push({badge: " Silver Pro Touch",color:"silver"});
            else if (attributes["Driving Layup"] < 79) badges.push({badge: " Gold Pro Touch",color:"gold"});
            else if (attributes["Driving Layup"] >= 80) badges.push({badge: " Hall of Fame Pro Touch",color:"purple"});

            if (attributes["Vertical"] < 62) badges.push({badge: " Bronze Rise Up",color:"bronze"});
            else if (attributes["Vertical"] < 66) badges.push({badge: " Silver Rise Up",color:"silver"});
            else if (attributes["Vertical"] < 69) badges.push({badge: " Gold Rise Up",color:"gold"});
            else if (attributes["Vertical"] >= 70) badges.push({badge: " Hall of Fame Rise Up",color:"purple"});

            if (attributes["Driving Layup"] < 79) badges.push({badge: " Bronze Slithery",color:"bronze"});
            else if (attributes["Driving Layup"] < 90) badges.push({badge: " Silver Slithery",color:"silver"});
            else if (attributes["Driving Layup"] < 96) badges.push({badge: " Gold Slithery",color:"gold"});
            else if (attributes["Driving Layup"] >= 97) badges.push({badge: " Hall of Fame Slithery",color:"purple"});

            if (attributes["Interior Defense"] < 71) badges.push({badge: " Bronze Anchor",color:"bronze"});
            else if (attributes["Interior Defense"] < 76) badges.push({badge: " Silver Anchor",color:"silver"});
            else if (attributes["Interior Defense"] < 84) badges.push({badge: " Gold Anchor",color:"gold"});
            else if (attributes["Interior Defense"] >= 85) badges.push({badge: " Hall of Fame Anchor",color:"purple"});

            if (attributes["Parameter Defense"] < 77) badges.push({badge: " Bronze Ankle Brace",color:"bronze"});
            else if (attributes["Parameter Defense"] < 88) badges.push({badge: " Silver Ankle Brace",color:"silver"});
            else if (attributes["Parameter Defense"] < 93) badges.push({badge: " Gold Ankle Brace",color:"gold"});
            else if (attributes["Parameter Defense"] >= 94) badges.push({badge: " Hall of Fame Ankle Brace",color:"purple"});

            if (attributes["Parameter Defense"] < 81) badges.push({badge: " Bronze Challenger",color:"bronze"});
            else if (attributes["Parameter Defense"] < 86) badges.push({badge: " Silver Challenger",color:"silver"});
            else if (attributes["Parameter Defense"] < 93) badges.push({badge: " Gold Challenger",color:"gold"});
            else if (attributes["Parameter Defense"] >= 94) badges.push({badge: " Hall of Fame Challenger",color:"purple"});

            if (attributes["Block"] < 77) badges.push({badge: " Bronze Chase Down Artist",color:"bronze"});
            else if (attributes["Block"] < 86) badges.push({badge: " Silver Chase Down Artist",color:"silver"});
            else if (attributes["Block"] < 93) badges.push({badge: " Gold Chase Down Artist",color:"gold"});
            else if (attributes["Block"] >= 94) badges.push({badge: " Hall of Fame Chase Down Artist",color:"purple"});

            if (attributes["Parameter Defense"] < 84) badges.push({badge: " Bronze Clamps",color:"bronze"});
            else if (attributes["Parameter Defense"] < 92) badges.push({badge: " Silver Clamps",color:"silver"});
            else if (attributes["Parameter Defense"] < 98) badges.push({badge: " Gold Clamps",color:"gold"});
            else if (attributes["Parameter Defense"] >= 99) badges.push({badge: " Hall of Fame Clamps",color:"purple"});

            if (attributes["Steal"] < 84) badges.push({badge: " Bronze Glove",color:"bronze"});
            else if (attributes["Steal"] < 90) badges.push({badge: " Silver Glove",color:"silver"});
            else if (attributes["Steal"] < 98) badges.push({badge: " Gold Glove",color:"gold"});
            else if (attributes["Steal"] >= 99) badges.push({badge: " Hall of Fame Glove",color:"purple"});

            if (attributes["Steal"] < 80) badges.push({badge: " Bronze Interceptor",color:"bronze"});
            else if (attributes["Steal"] < 88) badges.push({badge: " Silver Interceptor",color:"silver"});
            else if (attributes["Steal"] < 94) badges.push({badge: " Gold Interceptor",color:"gold"});
            else if (attributes["Steal"] >= 95) badges.push({badge: " Hall of Fame Interceptor",color:"purple"});

            if (attributes["Parameter Defense"] < 67) badges.push({badge: " Bronze Off Ball Pest",color:"bronze"});
            else if (attributes["Parameter Defense"] < 79) badges.push({badge: " Silver Off Ball Pest",color:"silver"});
            else if (attributes["Parameter Defense"] < 89) badges.push({badge: " Gold Off Ball Pest",color:"gold"});
            else if (attributes["Parameter Defense"] >= 90) badges.push({badge: " Hall of Fame Off Ball Pest",color:"purple"});

            if (attributes["Parameter Defense"] < 83) badges.push({badge: " Bronze Pick Dodger",color:"bronze"});
            else if (attributes["Parameter Defense"] < 90) badges.push({badge: " Silver Pick Dodger",color:"silver"});
            else if (attributes["Parameter Defense"] < 97) badges.push({badge: " Gold Pick Dodger",color:"gold"});
            else if (attributes["Parameter Defense"] >= 98) badges.push({badge: " Hall of Fame Pick Dodger",color:"purple"});

            if (attributes["Block"] < 67) badges.push({badge: " Bronze Pogo Stick",color:"bronze"});
            else if (attributes["Block"] < 92) badges.push({badge: " Silver Pogo Stick",color:"silver"});
            else if (attributes["Block"] < 96) badges.push({badge: " Gold Pogo Stick",color:"gold"});
            else if (attributes["Block"] >= 97) badges.push({badge: " Hall of Fame Pogo Stick",color:"purple"});

            if (attributes["Interior Defense"] < 81) badges.push({badge: " Bronze Post Lockdown",color:"bronze"});
            else if (attributes["Interior Defense"] < 87) badges.push({badge: " Silver Post Lockdown",color:"silver"});
            else if (attributes["Interior Defense"] < 95) badges.push({badge: " Gold Post Lockdown",color:"gold"});
            else if (attributes["Interior Defense"] >= 96) badges.push({badge: " Hall of Fame Post Lockdown",color:"purple"});

            if (attributes["Strength"] < 82) badges.push({badge: " Bronze Brick Wall",color:"bronze"});
            else if (attributes["Strength"] < 89) badges.push({badge: " Silver Brick Wall",color:"silver"});
            else if (attributes["Strength"] < 98) badges.push({badge: " Gold Brick Wall",color:"gold"});
            else if (attributes["Strength"] >= 99) badges.push({badge: " Hall of Fame Brick Wall",color:"purple"});

            if (attributes["Strength"] < 71) badges.push({badge: " Bronze Boxout Beast",color:"bronze"});
            else if (attributes["Strength"] < 83) badges.push({badge: " Silver Boxout Beast",color:"silver"});
            else if (attributes["Strength"] < 89) badges.push({badge: " Gold Boxout Beast",color:"gold"});
            else if (attributes["Strength"] >= 90) badges.push({badge: " Hall of Fame Boxout Beast",color:"purple"});
            
            if (attributes["Defense Rebound"] < 82) badges.push({badge: " Bronze Rebound Chaser",color:"bronze"});
            else if (attributes["Defense Rebound"] < 91) badges.push({badge: " Silver Rebound Chaser",color:"silver"});
            else if (attributes["Defense Rebound"] < 98) badges.push({badge: " Gold Rebound Chaser",color:"gold"});
            else if (attributes["Defense Rebound"] >= 99) badges.push({badge: " Hall of Fame Rebound Chaser",color:"purple"});
            
            if (attributes["Stamina"] < 91) badges.push({badge: " Bronze Work Horse",color:"bronze"});
            else if (attributes["Stamina"] < 94) badges.push({badge: " Silver Work Horse",color:"silver"});
            else if (attributes["Stamina"] < 98) badges.push({badge: " Gold Work Horse",color:"gold"});
            else if (attributes["Stamina"] >= 99) badges.push({badge: " Hall of Fame Work Horse",color:"purple"});

            return badges;
        }

        document.querySelector('.player-stats').style.display = 'none';

        function displayPlayerInfo() {
            const name = document.getElementById('name').value;
        
            // Check if a valid player option is selected
            if (name && name !== 'fictionalbackground') {
                const attributes = simulateAttributes(name);
                const badges = assignBadges(name, attributes);
        
                // Display attributes and badges in the HTML
                document.getElementById('attributes').innerText = JSON.stringify(attributes, null, 2);
                const badgesList = document.getElementById('badges');
                badgesList.innerHTML = "";
                badges.forEach(badge => {
                    const listItem = document.createElement("li");
                    listItem.textContent = badge.badge;
                    listItem.style.color = badge.color;
                    badgesList.appendChild(listItem);
                }); 
        
                // Show the player-stats div
                document.querySelector('.player-stats').style.display = 'block';
            } else {
                // Hide the player-stats div if not a valid player option
                document.querySelector('.player-stats').style.display = 'none';
            }
        }
        
        function resetPlayerInfo() {
            // Reset input field
            document.getElementById('name').value = "";
        
            // Reset attributes and badges display
            document.getElementById('attributes').innerText = "";
            document.getElementById('badges').innerHTML = "";
        
            // Hide the player-stats div
            document.querySelector('.player-stats').style.display = 'none';
        }
        
        document.getElementById('name').addEventListener('change', function() {
            const selectedValue = this.value;
            if (selectedValue === 'fictionalbackground') {
                resetPlayerInfo();
            } else {
                displayPlayerInfo();
            }
        });
        