import { memo } from 'react'

type Props = {
  firstname: string,
  lastname: string
}

const Profile = memo(({firstname, lastname}: Props) => {
  console.log("Rendered Profile Component")

  return (
    <div>
      <h2>Profile</h2>
      <h4>Name: {firstname} {lastname}</h4>
    </div>
  )
})

export default Profile