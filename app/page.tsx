'use client';

import Link from 'next/link'
import './globals.css'

export default function HomePage() {
  // async function postTestUser(param: String) {
  //   console.log(param)
  //   const user = fetch('/api/user', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(param)
  //   })

  //   // return user
  // } onClick={() => postTestUser('test2@mail.com')}

  return (
    <div className='p-4 block w-full'>
      Welcome!

      <button className={`m-4 w-48 h-16 bg-sky-600 hover:bg-sky-400 flex justify-center place-items-center cursor-pointer rounded transition-all duration-150`} value={'Button'}>Button</button>

      <div className='border rounded-lg border-slate-400/50 p-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi a accusantium odit fuga voluptates temporibus nesciunt possimus dolorum placeat dolores ab asperiores itaque unde quasi, corrupti quas provident libero.
        Impedit magni est hic molestias, adipisci officiis sunt, consequuntur suscipit nobis libero doloremque natus ea quaerat. Nemo totam, esse voluptate omnis assumenda itaque cupiditate reprehenderit incidunt quae tempore illum aperiam.
        Perspiciatis, cupiditate. Doloremque obcaecati libero necessitatibus vel dicta ullam nostrum quam quos accusamus maiores officiis quas modi est assumenda, et neque doloribus! Eligendi enim sapiente libero ducimus cumque ea animi.
        Et enim labore aspernatur aperiam dicta accusantium numquam nulla tenetur! Blanditiis, iusto. Vitae at, consequuntur mollitia facere laborum fugit commodi sit incidunt nulla sapiente repellat illum sequi, ratione esse quis?
        Error fuga earum sed excepturi modi. Sed maiores vel, eligendi nihil dolore, deleniti reiciendis quos velit ut totam voluptatum possimus provident odit! Odio iusto quos nisi saepe repellendus dicta soluta.
        Nam maxime sint ea accusantium? Adipisci laudantium modi unde officiis cum hic fuga perferendis eius quaerat, quo mollitia ducimus sequi expedita consequuntur delectus voluptatibus! Autem veritatis nostrum eius sed sapiente?
        Voluptas error ipsa rem ducimus pariatur sapiente in cum ea, voluptatem veritatis, eaque fugiat corrupti ullam? Soluta dignissimos natus blanditiis quasi? Eos, ex cumque voluptates commodi ipsum omnis incidunt temporibus.
        Officiis saepe facilis nemo rem labore minus possimus in explicabo obcaecati quo commodi ea atque, dolores error non alias veritatis repudiandae pariatur illum harum soluta doloribus sapiente sunt! Natus, aspernatur.
        Error corporis reiciendis vel vero voluptatem asperiores laboriosam sunt dicta animi iusto maxime exercitationem cumque totam, sed beatae veritatis reprehenderit. Optio suscipit pariatur sequi vero saepe laboriosam nisi ad ducimus.
        Perferendis ad amet assumenda magni, quae tempora soluta a repudiandae vel excepturi ducimus, autem libero fugiat quas cumque! Unde soluta inventore eveniet dolore. Voluptatibus minus quibusdam quidem sequi, accusamus nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi a accusantium odit fuga voluptates temporibus nesciunt possimus dolorum placeat dolores ab asperiores itaque unde quasi, corrupti quas provident libero.
        Impedit magni est hic molestias, adipisci officiis sunt, consequuntur suscipit nobis libero doloremque natus ea quaerat. Nemo totam, esse voluptate omnis assumenda itaque cupiditate reprehenderit incidunt quae tempore illum aperiam.
        Perspiciatis, cupiditate. Doloremque obcaecati libero necessitatibus vel dicta ullam nostrum quam quos accusamus maiores officiis quas modi est assumenda, et neque doloribus! Eligendi enim sapiente libero ducimus cumque ea animi.
        Et enim labore aspernatur aperiam dicta accusantium numquam nulla tenetur! Blanditiis, iusto. Vitae at, consequuntur mollitia facere laborum fugit commodi sit incidunt nulla sapiente repellat illum sequi, ratione esse quis?
        Error fuga earum sed excepturi modi. Sed maiores vel, eligendi nihil dolore, deleniti reiciendis quos velit ut totam voluptatum possimus provident odit! Odio iusto quos nisi saepe repellendus dicta soluta.
        Nam maxime sint ea accusantium? Adipisci laudantium modi unde officiis cum hic fuga perferendis eius quaerat, quo mollitia ducimus sequi expedita consequuntur delectus voluptatibus! Autem veritatis nostrum eius sed sapiente?
        Voluptas error ipsa rem ducimus pariatur sapiente in cum ea, voluptatem veritatis, eaque fugiat corrupti ullam? Soluta dignissimos natus blanditiis quasi? Eos, ex cumque voluptates commodi ipsum omnis incidunt temporibus.
        Officiis saepe facilis nemo rem labore minus possimus in explicabo obcaecati quo commodi ea atque, dolores error non alias veritatis repudiandae pariatur illum harum soluta doloribus sapiente sunt! Natus, aspernatur.
        Error corporis reiciendis vel vero voluptatem asperiores laboriosam sunt dicta animi iusto maxime exercitationem cumque totam, sed beatae veritatis reprehenderit. Optio suscipit pariatur sequi vero saepe laboriosam nisi ad ducimus.
        Perferendis ad amet assumenda magni, quae tempora soluta a repudiandae vel excepturi ducimus, autem libero fugiat quas cumque! Unde soluta inventore eveniet dolore. Voluptatibus minus quibusdam quidem sequi, accusamus nostrum!
      </div>

      {/* <div className="p-4 w-full h-96 flex flex-wrap">
        {['300', '400', '500', '600', '700', '800', '900'].map(colval => {
          return <div className={`m-4 w-20 h-10 bg-pink-${colval} hover:bg-sky-${colval+100} flex justify-center place-items-center cursor-pointer rounded`}>button</div>
        })}
      </div> */}
    </div>
  )
}