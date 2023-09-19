import { FaStar } from 'react-icons/fa'

export default function StarsRating(stars: number) {
  const starArray = Array.from({ length: stars });

  return (
    <span className='flex'>
      {starArray.map((_, index) => (
        <FaStar style={{ color: '#FFC716' }} className="text-18" key={index} />
      ))}
    </span>

  )
}
