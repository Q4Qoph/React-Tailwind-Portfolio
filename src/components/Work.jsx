import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2020,
        title: 'Content Creator',
        duration: '3 Years',
        details:'Et nisi culpa deserunt ea adipisicing voluptate reprehenderit consequat aliquip ut ullamco ullamco tempor. Voluptate officia deserunt do et incididunt fugiat laboris exercitation nisi elit sunt non. Deserunt dolore aliqua qui officia ea eiusmod aute.'
    },
    {
        year:2017,
        title:'Google',
        duration:'3 Years',
        details:'Nostrud qui tempor nostrud pariatur incididunt ut pariatur esse. Amet dolor incididunt quis velit dolor reprehenderit irure sint qui deserunt velit. Dolore ad irure cillum duis amet id laboris Lorem enim consectetur fugiat do. Adipisicing consectetur sint laboris exercitation consequat ad ullamco do Lorem sunt minim. Dolore ut dolor esse ex laboris minim tempor.'
    },
    {
        year:2015,
        title:'Amazon',
        duration:'2 years',
        details:'Qui esse veniam do laborum ut dolore eiusmod amet velit nisi. Eiusmod eiusmod duis do nisi eu id duis cillum sint magna. Do id minim sint ullamco sunt. Commodo sunt deserunt ipsum adipisicing veniam cillum velit. Aliqua nostrud laboris sint culpa sit aliqua pariatur commodo ut anim pariatur incididunt mollit.'
    },
    {
        year:2012,
        title:'Facebook',
        duration:'3 Years',
        details:'Fugiat sunt in occaecat nisi pariatur. Qui et reprehenderit velit in consequat mollit consectetur Lorem irure et sunt. Consectetur in consequat sunt laborum amet fugiat cupidatat.'
    }
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item,idx)=>(
            <WorkItem keys={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
        ))}
    </div>
  )
}

export default Work