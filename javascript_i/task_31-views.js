// Write code below 💖

const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];

function mean(viewsArray) {
    return (viewsArray.reduce((total, views) => total + views, 0)) / viewsArray.length;
}

function median(viewsArray) {
    const sortedStats = viewsArray.sort((a, b) => a - b);
    const middleIndex = Math.floor(viewsArray.length / 2);
    return sortedStats.length % 2 !== 0 ? sortedStats[middleIndex] : (sortedStats[middleIndex - 1] + sortedStats[middleIndex]) / 2;
}

console.log(`TikTok
Mean: ${mean(recentTikTokViews)}
Median: ${median(recentTikTokViews)}\n
Instagram
Mean: ${mean(recentInstagramViews)}
Median: ${median(recentInstagramViews)}\n
YouTube
Mean: ${mean(recentYouTubeViews)}
Median: ${median(recentYouTubeViews)}`)