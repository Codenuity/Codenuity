
import Image from 'next/image'
import gif from '../../assets/not-found/notfound.gif'

const Gif = () => {
  return <Image src={gif} width={600} height={600} alt="404-Not Found" />;
}

export default Gif