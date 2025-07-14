import useSWR from 'swr'
import { fetcher } from '../src/providers'

function Profile() {
  const { data, error } = useSWR('/api/profile-data')

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  )
}

export default Profile
