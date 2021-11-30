function HeaderItem({Icon,title}) {
    return (
        <div className=" flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white" >
            <Icon className='h-8 mb-1 group-hover:animate-bounce stroke-white'/>
            <p className='opacity-0 text-white group-hover:opacity-100 group-hover: text-nav font-bold tracking-widest whitespace-nowrap items-center justify-center '>{title}</p>
        </div>
    )
}

export default HeaderItem
