import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
    const loggedIn = { firstName: 'Alex', lastName: 'Klykov', email: 'alex@horizon.com'};
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transactions efficiently"
                />

                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={12504.35}
                />
            </header>

            recent transactions
        </div>
        <RightSidebar 
            user={loggedIn}
            transactions={[]}
            banks={[{ currentBalance: 333.99 },{ currentBalance: 3420.99 }]}
        />
    </section>
  )
}

export default Home