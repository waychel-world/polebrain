// Pole trick data
const poleData = {
    "1": [
        "fireman spin", "geisha", "lotus", "chair spin", "front knee hook", 
        "back knee hook", "crane", "boomerang", "lazy boomerang", "front stag", 
        "back stag", "tess spin", "juliet spin", "fan kick", "crucifix", 
        "viva sit/ fast spin", "layout", "inverted crucifix"
    ],
    "2": [
        "cradle", "wrist sit", "lady garden", "violator", "gemini", 
        "scorpio", "top hand diva", "bottom hand diva", "full star", "plank", 
        "layback", "shishi spin", "bow and arrow", "butterfly", "juliet spin", 
        "pixie spin"
    ],
    "3": [
        "jamilla", "hip hold", "spiral (one hand)", "ribbon (two hands)", 
        "corkscrew (invert grip)", "cupid", "ballerina", "zigzag climb", 
        "aerial invert", "inverted crucifix butterfly", "bottom hand diva butterfly", 
        "tammy", "sit drop", "boomerang drop", "triangle knot", "swan", 
        "pole split", "figure 8", "invert split", "side climb", "gemini split", 
        "side saddle/ martini", "flare", "suicide spin"
    ],
    "4": [
        "roxy", "stargazer", "genie", "tulip", "teddy", "zig zag climb", 
        "matrix", "gemini superman", "scorpio superman", "helicopter", 
        "remy sit", "iguana mount fan", "iguana mount bow and arrow", 
        "bird's nest", "layback brass monkey", "knee swing", "bridge", 
        "crescent"
    ],
    "5": [
        "holly drop", "rainy day", "jamilla superman", "meathook", 
        "knee sit brass monkey", "brass monkey layout", "moonbeam", 
        "cannonball", "iguana mount fang", "skater", "seahorse", 
        "side superman", "chopstick sit drop", "poisson", "symphony"
    ],
    "6": [
        "shouldermount", "teardrop", "claw grip invert", "step up", 
        "backwards invert", "spinny backwards invert", "corkscrew pixie", 
        "ribbon pixie", "aerial step up", "allegra", "jade split", 
        "vortex", "cannonball", "one hand meathook", "elbow meathook", 
        "shouldermount flip"
    ],
    "7": [
        "devils point shuffle", "caterpillar", "elbow ayesha", "superinvert", 
        "flag brass monkey", "jallegra", "broken doll", "q", "teeto twist", 
        "meathook split", "shoulder mount rollover sit", "devils elbow split", 
        "sneaky v", "floor is lava", "tornado"
    ],
    "8": [
        "walkover", "claw grip downward split", "aerial reiko split step up", 
        "sit shouldermount", "sit shouldermount split", "ayesha elbow split", 
        "brass monkey bridge", "titanic", "flag split"
    ],
    "9": [
        "handspring", "press up", "aerial flag split", "toss pixie", 
        "aerial shoulder mount", "archer split", "tabletop", 
        "scorpio split plank", "cherry split"
    ],
    "allowedPairs": [
        "ayesha,brass monkey",
        "ayesha,inverted crucifix",
        "ayesha,gemini",
        "ayesha,scorpio",
        "bottomhand diva,butterfly",
        "bottomhand diva,flatline scorpio",
        "bow and arrow,iguana",
        "brass monkey beat up,aerial step up",
        "brass monkey beat up,sneaky v",
        "brass monkey beat up,stargazer",
        "brass monkey,ayesha elbow split",
        "brass monkey,brass monkey beat up",
        "brass monkey,floor is lava",
        "brass monkey,janeiro",
        "brass monkey,superman",
        "brass monkey,tornado",
        "broken doll,jallegra",
        "butterfly,cannonball",
        "butterfly,gemini",
        "cannonball,hip hold",
        "cast,side sit",
        "cast,gemini",
        "cast,invert",
        "cast,tammy",
        "claw grip,brass monkey",
        "claw grip teeto twist,brass monkey",
        "corkscrew,figure eight",
        "crescent,shouldermount",
        "crucifix,static v",
        "devils point shuffle,gemini",
        "devils point shuffle,genie",
        "elbow ayesha,gemini",
        "figure eight,devils elbow split",
        "flag split,brass monkey",
        "flag swing,brass monkey",
        "flare,step up",
        "flatline scorpio,allegra",
        "gemini,ayesha",
        "gemini,bottomhand diva",
        "gemini,butterfly",
        "gemini,hiphold",
        "gemini,matrix",
        "gemini,scorpio",
        "gemini,sit",
        "gemini,symphony",
        "genie,brass monkey",
        "genie,seahorse",
        "genie,shouldermount split",
        "genie,side superman",
        "genie,sneaky v",
        "hip hold,jade",
        "hip hold,triangle knot",
        "hiphold,scorpio",
        "hiphold,superman",
        "invert,gemini",
        "inverted crucifix,ayesha",
        "inverted crucifix,elbow ayesha",
        "inverted crucifix,poisson",
        "layback,brass monkey",
        "martini,q",
        "matrix,butterfly",
        "meathook,meathook split",
        "meathook split,tammy",
        "poisson,jamilla",
        "q,dangerous bird",
        "ribbon,juliet",
        "scorpio,broken doll",
        "scorpio,scorpio handstand",
        "scorpio,scorpio split",
        "scorpio,sit",
        "scorpio,static v",
        "scorpio,superman",
        "scorpio,swan",
        "scorpio split,scorpio",
        "shouldermount,brass monkey",
        "shouldermount,crucifix",
        "shouldermount,shouldermount rollover",
        "shouldermount rollover,sit",
        "side sit,brass monkey",
        "side superman,seahorse",
        "sit,cannonball",
        "sit,cherry split",
        "sit,scorpio",
        "step up,butterfly",
        "step up,gemini",
        "superman,crescent",
        "superman,jamila",
        "superman,scorpio",
        "superman,scorpio drop",
        "superman,shouldermount",
        "symphony,scorpio",
        "tammy,elbow ayesha",
        "violator,genie",
        "walkover,brass monkey",
        "walkover,gemini",
        "walkover,scorpio"
    ]
};

// DOM elements
const modeSelection = document.getElementById('mode-selection');
const trainingBtn = document.getElementById('training-btn');
const challengeBtn = document.getElementById('challenge-btn');
const trainingForm = document.getElementById('training-form');
const challengeForm = document.getElementById('challenge-form');
const trainingGenerate = document.getElementById('training-generate');
const challengeGenerate = document.getElementById('challenge-generate');
const resultContainer = document.getElementById('result-container');
const resultContent = document.getElementById('result-content');
const newSequenceBtn = document.getElementById('new-sequence');
const backToModesBtn = document.getElementById('back-to-modes');
const trainingError = document.getElementById('training-error');
const challengeError = document.getElementById('challenge-error');

// Back buttons
const backButtons = document.querySelectorAll('.back-btn');

// Track the current mode: 'training' or 'challenge'
let currentMode = null; 

// Initialize Graph for Training Mode
const graph = {};

// Build graph from allowedPairs (directed version)
function buildGraph() {
    poleData.allowedPairs.forEach(pair => {
        const [a, b] = pair.split(',').map(item => item.trim());
        
        if (!graph[a]) graph[a] = new Set();
        if (!graph[b]) graph[b] = new Set();
        
        graph[a].add(b);
    });
}

buildGraph();

// Get all unique nodes from graph
const allNodes = Object.keys(graph);

// Event Listeners
trainingBtn.addEventListener('click', () => {
    modeSelection.classList.add('hidden');
    trainingForm.classList.remove('hidden');
});

challengeBtn.addEventListener('click', () => {
    modeSelection.classList.add('hidden');
    challengeForm.classList.remove('hidden');
});

// Back button functionality
backButtons.forEach(button => {
    button.addEventListener('click', () => {
        trainingForm.classList.add('hidden');
        challengeForm.classList.add('hidden');
        resultContainer.classList.add('hidden');
        modeSelection.classList.remove('hidden');
        trainingError.classList.add('hidden');
        challengeError.classList.add('hidden');
    });
});

backToModesBtn.addEventListener('click', () => {
    resultContainer.classList.add('hidden');
    modeSelection.classList.remove('hidden');
});

// Training Mode Generate
trainingGenerate.addEventListener('click', () => {
    // Clear previous error
    trainingError.classList.add('hidden');
    
    // Get inputs
    const tricksCount = parseInt(document.getElementById('tricks-count').value);
    const allowRep = document.getElementById('allow-rep').checked;
    
    // Validate input
    if (isNaN(tricksCount)) {
        showError(trainingError, "Please enter a valid number");
        return;
    }
    
    if (tricksCount < 1 || tricksCount > 20) {
        showError(trainingError, "Please enter a number between 1 and 20");
        return;
    }
    
    // Generate sequence
    const sequence = generateSequence(tricksCount, allowRep);
    
    if (!sequence) {
        showError(trainingError, "Could not generate a sequence with the current constraints. Try allowing repetition or reducing the number of tricks.");
        return;
    }
    
    // Set current mode
    currentMode = 'training';

    // Display result
    displayResult(sequence, "Training Sequence");
    trainingForm.classList.add('hidden');
    resultContainer.classList.remove('hidden');
});

// Challenge Mode Generate
challengeGenerate.addEventListener('click', () => {
    // Clear previous error
    challengeError.classList.add('hidden');
    
    // Get inputs
    const minLevel = document.getElementById('min-level').value;
    const maxLevel = document.getElementById('max-level').value;
    const tricksCount = parseInt(document.getElementById('challenge-tricks-count').value);
    
    // Validate input
    if (isNaN(tricksCount)) {
        showError(challengeError, "Please enter a valid number");
        return;
    }
    
    if (tricksCount < 1 || tricksCount > 20) {
        showError(challengeError, "Please enter a number between 1 and 20");
        return;
    }
    
    if (parseInt(minLevel) > parseInt(maxLevel)) {
        showError(challengeError, "Minimum level cannot be greater than maximum level");
        return;
    }
    
    // Generate challenge
    const challenge = generateChallenge(minLevel, maxLevel, tricksCount);
    
    if (!challenge) {
        showError(challengeError, "Not enough tricks in the selected levels. Try expanding your level range.");
        return;
    }
    
    // Set current mode
    currentMode = 'challenge';

    // Display result
    displayResult(challenge, "Challenge Sequence");
    challengeForm.classList.add('hidden');
    resultContainer.classList.remove('hidden');
});

// Add loading indicator to result container
function showLoading() {
    resultContent.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Generating new sequence...</p>
        </div>
    `;
}

// Generate new sequence from result screen
newSequenceBtn.addEventListener('click', async () => {
    // Show loading indicator
    showLoading();
    
    // Add slight delay for better UX (optional)
    await new Promise(resolve => setTimeout(resolve, 300));
    
    if (currentMode === 'challenge') {
        // Regenerate challenge without showing form
        const minLevel = document.getElementById('min-level').value;
        const maxLevel = document.getElementById('max-level').value;
        const tricksCount = parseInt(document.getElementById('challenge-tricks-count').value);
        
        const challenge = generateChallenge(minLevel, maxLevel, tricksCount);
        
        if (challenge) {
            displayResult(challenge, "Challenge Tricks");
        } else {
            showError(resultContent, "Could not generate new challenge. Try different parameters.");
        }
    } 
    else if (currentMode === 'training') {
        // Regenerate training sequence without showing form
        const tricksCount = parseInt(document.getElementById('tricks-count').value);
        const allowRep = document.getElementById('allow-rep').checked;
        
        const sequence = generateSequence(tricksCount, allowRep);
        
        if (sequence) {
            displayResult(sequence, "Training Sequence");
        } else {
            showError(resultContent, "Could not generate new sequence. Try allowing repetition or reducing tricks.");
        }
    }
});


// Helper Functions
function showError(element, message) {
    element.textContent = message;
    element.classList.remove('hidden');
}

function generateSequence(length, allowRepetition) {
    if (length <= 0) return [];
    
    // If only one trick is requested, return a random node
    if (length === 1) {
        return [allNodes[Math.floor(Math.random() * allNodes.length)]];
    }
    
    // Try to generate a valid sequence
    for (let attempt = 0; attempt < 100; attempt++) {
        const sequence = [];
        const used = new Set();
        
        // Start with a random node that has neighbors
        let currentNode = getRandomNodeWithNeighbors();
        if (!currentNode) return null; // No valid starting node
        
        sequence.push(currentNode);
        used.add(currentNode);
        
        // Generate the rest of the sequence
        for (let i = 1; i < length; i++) {
            const neighbors = Array.from(graph[currentNode] || []);
            
            // Filter out neighbors that have already been used if repetition is not allowed
            const validNeighbors = allowRepetition ? 
                neighbors : 
                neighbors.filter(neighbor => !used.has(neighbor));
            
            // If there are no valid neighbors, break out
            if (validNeighbors.length === 0) break;
            
            // Choose a random neighbor
            const nextNode = validNeighbors[Math.floor(Math.random() * validNeighbors.length)];
            
            sequence.push(nextNode);
            if (!allowRepetition) used.add(nextNode);
            currentNode = nextNode;
        }
        
        // If we have the desired length, return the sequence
        if (sequence.length === length) {
            return sequence;
        }
    }
    
    return null; // Failed to generate after multiple attempts
}

function getRandomNodeWithNeighbors() {
    // Filter nodes that have at least one neighbor
    const nodesWithNeighbors = allNodes.filter(node => 
        graph[node] && graph[node].size > 0
    );
    
    if (nodesWithNeighbors.length === 0) return null;
    
    return nodesWithNeighbors[Math.floor(Math.random() * nodesWithNeighbors.length)];
}

function generateChallenge(minLevel, maxLevel, count) {
    // Combine tricks from selected levels
    let combinedTricks = [];
    
    for (let level = minLevel; level <= maxLevel; level++) {
        if (poleData[level]) {
            combinedTricks = combinedTricks.concat(poleData[level]);
        }
    }
    
    // Remove duplicates
    const uniqueTricks = [...new Set(combinedTricks)];
    
    // Check if we have enough tricks
    if (uniqueTricks.length < count) {
        return null;
    }
    
    // Shuffle and select
    const shuffled = [...uniqueTricks].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displayResult(items, title) {
    document.querySelector('.result-title').textContent = title;
    
    let html = '';
    
    if (title === "Training Sequence") {
        html = '<div class="trick-sequence">';
        items.forEach((trick, index) => {
            html += `
                <div class="trick-card">
                    <div class="step-number">${index + 1}</div>
                    <div>${trick}</div>
                </div>
            `;
        });
        html += '</div>';
    } else {
        html = '<div class="trick-sequence">';
        items.forEach((trick, index) => {
            html += `
                <div class="trick-card">
                    <div class="step-number">${index + 1}</div>
                    <div>${trick}</div>
                </div>
            `;
        });
        html += '</div>';
    }
    
    resultContent.innerHTML = html;
}