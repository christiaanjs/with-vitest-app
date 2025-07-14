import useSWR from 'swr'
import './Profile.css'

export interface ProfileData {
  name: string
  bio: string
}

// export function Profile() {
//   const swr = useSWR<ProfileData>('/api/profile-data')

//   // Use props if provided, otherwise use SWR data
//   const profileData = swr.data
//   const error = Boolean(swr.error) || !profileData
//   const loading = swr.isLoading && !error

//   console.log('Profile component rendered with data:', profileData)
//   console.log('Loading state:', loading)
//   console.log('Error state:', error)

//   if (error) return <div>Failed to load</div>
//   if (loading) return <div>Loading...</div>

//   return (
//     <div className="profile-container">
//       <h1>{profileData?.name}</h1>
//       <p>{profileData?.bio}</p>
//     </div>
//   )
// }

export function Profile() {
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
