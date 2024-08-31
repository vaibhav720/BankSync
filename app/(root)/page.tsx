import HeaderBox from '@/components/ui/HeaderBox';
import RightSideBar from '@/components/ui/RightSideBar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.action'
import { cookies } from "next/headers";


const Home = async ( ) => {
 
  const loggedIn = await getLoggedInUser();
  console.log("home page")
  console.log(loggedIn)
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox type="greeting" title="Welcome" user={loggedIn?.name || "Guest"}
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
