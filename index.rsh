'reach 0.1';

const commonInteract = {};

// TODO 
export const main = Reach.App(() => {
    const User1 = Participant('User1', {});
    const User2   = Participant('User', { show: Fun(true, Null) });
    init();

    // User1.publish();
    // commit();

    // User2.only(() => assume(this != User1));
    // User2.publish();
    // require(User2 != User1);
    // commit();

    // User1.publish();
    // User2.interact.showList(this);
    // commit();
});