import { Container } from './Container/Container';

import user from './Profile/user.json';
import { Profile } from './Profile/Profile';

import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';

import { TransactionHistory } from './Transactions/TransactionHistory';
import transactions from './Transactions/transactions.json'

export const App = () => {
    return (<Container>
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
        <Statistics
        title='Upload stats'
        stats={data} />
        <FriendList
        friends={friends} />
        <TransactionHistory
        items={transactions}/>
    </Container>)
}