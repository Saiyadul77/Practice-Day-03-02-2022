const friendsName = ['asadul', 'saiyadul', 'baharul', 'ziaul', 'safiul', 'saiful', 'faijul', 'badrul', 'fakhrul', 'sadrul', 'nurul', 'khairul Amin Akhand', 'ruhul'];
function bestFriend(names) {
    let biggestNames = '';
    for (const friend of names) {
        if (friend.length > biggestNames.length) {
            biggestNames = friend;
        }
        // console.log(friend);
    }
    return biggestNames;

}
const friendStatus = bestFriend(friendsName);
console.log(friendStatus);