function paperRequirements(firstBook, secondBook, thirdBook) {
    const storyBook = 100;
    const poemBook = 200;
    const historyBook = 300;
    const totalStoryBookPage = storyBook * firstBook;
    const totalPoemBookPage = poemBook * secondBook;
    const totalHistoryBookPage = historyBook * thirdBook;
    const totalPage = totalStoryBookPage + totalPoemBookPage + totalHistoryBookPage;
    return totalPage;
}
const bookPageStatus = paperRequirements(3, 5, 10);
console.log('The total page ', bookPageStatus);