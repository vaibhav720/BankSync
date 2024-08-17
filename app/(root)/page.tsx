import HeaderBox from '@/components/ui/HeaderBox'
import RightSideBar from '@/components/ui/RightSideBar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Vaibhav', lastName: 'Parikh', email:"parikhvaibhav19@gmail.com"};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox type="greeting" title="Welcome" user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250} />
        </header>

      </div>
      <RightSideBar user={loggedIn} transactions={[]}  banks={[{currentBalance:1250.50},{currentBalance:3450}]} />
    </section>
  )
}

export default Home
