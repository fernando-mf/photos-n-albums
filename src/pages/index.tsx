import Button from '@/components/button'
import { useAuthContext } from '@/hooks/use-auth-context'
import WithAuthentication from '@/hoc/with-authentication'
import Tabs from '@/components/tabs'
import Albums from '@/components/albums'
import Posts from '@/components/posts'

function Home() {
  const { handleLogout } = useAuthContext()

  return (
    <div>
      <header className='flex justify-end pt-2'>
        <Button btnStyle='link' onClick={handleLogout}>
          Log out
        </Button>
      </header>
      <Tabs
        tabs={[
          {
            label: 'Albums',
            component: <Albums />,
          },
          {
            label: 'Posts',
            component: <Posts />,
          },
        ]}
      />
    </div>
  )
}

export default WithAuthentication(Home)
