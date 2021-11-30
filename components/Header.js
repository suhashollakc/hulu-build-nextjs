import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
    FilmIcon,
    ServerIcon,
    DesktopComputerIcon


} from "@heroicons/react/outline"


function Header() {
    return (
        
 <header className=" flex flex-col sm:flex-row items-center h-auto bg-gradient-to-r from-red-700 via-red-500 to-red-100 md:bg-gradient-to-r ...  opacity-90 ">

<Image className="object-contain"
    src="https://links.papareact.com/ua6"
    width={100}
    height={100}
    alt="logo"
/>

<div className="flex flex-grow justify-center m-5 ">

    <HeaderItem title='HOME' Icon={HomeIcon} />
    <HeaderItem title='TV' Icon={DesktopComputerIcon} />
    <HeaderItem title='MOVIES' Icon={FilmIcon} />
    <HeaderItem title='MY STUFF' Icon={CollectionIcon} />
    <HeaderItem title='HUBS' Icon={ServerIcon} />
</div>

<div className="flex justify-end ">
    <HeaderItem title='SEARCH' Icon={SearchIcon} />
    <HeaderItem title='PROFILE' Icon={UserIcon} />
</div>



</header>
 
       
    )
}

export default Header
