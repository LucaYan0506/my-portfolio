window.addEventListener('DOMContentLoaded', () => update_word_cloud())
window.addEventListener('resize', () => update_word_cloud())

function update_word_cloud(){
    //clear word cloud
    document.getElementById("word-cloud").innerHTML = "";

    var percents = 30;
    var parentWidth = parseInt(document.getElementById("word-cloud").clientWidth);
    var pixels = parentWidth*(percents/100);
    
    console.log(pixels);
    const texts = [
        'Visual Basic', 'C#', 'C++', 'Django', 'JavaScript', 'HTML', 'CSS', 'Git', 'Python', 
        'LeetCode', 'DFS', 'BFS', 'Dynamic Programming', 'Hash Table', 'Bynary Search', 'Bynary Tree'
    ];
    const option = {
        'radius': pixels,
        'maxSpeed': 'fast'
    };

    //generate new one
    TagCloud(document.querySelector('#word-cloud'), texts,option);
}