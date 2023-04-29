import Image from "next/image"

async function fetchUser(userid) {
  const response = await fetch(`https://reqres.in/api/users/${userid}`)
  return await response.json()
}

export default async function Page({ params: { id } }) {
  const fetchedUser = await fetchUser(id)
  const user = fetchedUser.data

  return (
    <div className="flex flex-col p-2 max-w-2xl m-auto">
      <div className="flex flex-row">
        <Image
        className="min-w-fit"
          src={user.avatar}
          width={160}
          height={160}
        />
        <div className="p-1 px-3">
          <p>
            Hi I'm {user.first_name} {user.last_name}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores assumenda itaque odit placeat non consequatur expedita beatae repudiandae quibusdam.
          </p>
          <p>
            Email: {user.email}
          </p>
        </div>
      </div>
    </div>
  )
} 