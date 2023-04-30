import Image from "next/image"

async function fetchUser(userid) {
  const response = await fetch(`https://reqres.in/api/users/${userid}`)
  return await response.json()
}

export default async function Page({ params: { id } }) {
  const fetchedUser = await fetchUser(id)
  const user = fetchedUser.data

  return (
    <div className="flex flex-wrap flex-col p-2 w-full m-auto">
      <Image
        className=""
        src={user.avatar}
        alt='profile picture'
        width={160}
        height={160}
      />
      <div className="flex flex-wrap flex-col p-2">
          <span className="text-2xl">
            {user.first_name} {user.last_name}
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <span>
            <strong>Email:</strong> {user.email}
          </span>

      </div>
    </div>
  )
} 