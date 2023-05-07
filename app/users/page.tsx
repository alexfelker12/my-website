import Link from "next/link"

export const metadata = {
  title: 'Users | Alex Felker'
}

async function fetchUsers() {
  const response = await fetch('https://reqres.in/api/users')
  return await response.json()
}

export default async function UsersPage() {
  const fetchedData = await fetchUsers()
  const users = fetchedData.data
  // console.log(users.data[0].first_name)

  return (
    <ul className="m-4">
      {users.length && users.map(
        (user) => {
          return <li className="m-2" key={user.id}><Link href={`/users/${user.id}`}>{user.first_name} {user.last_name}</Link></li>
        } 
      )}
    </ul>
  )
} 
