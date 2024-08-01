// Note: Logo component
import logoLucid  from '../../../public/logos/logo.svg';
import Image from 'next/image';
const Logo = ()=> {
    return (
        <Image src={logoLucid} alt="Lucid Logo" width={24} height={24} priority />
    )
};
export default Logo;