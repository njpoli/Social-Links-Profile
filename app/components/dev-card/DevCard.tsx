import Image from 'next/image';

const links = ['GitHub', 'Frontend Mentor', 'LinkedIn', 'Twitter', 'Instagram'];

export default function DevCard() {
  return (
    <article className='w-96 bg-neutral-dark-grey rounded-xl h-148 flex flex-col items-center gap-y-4 py-10 px-11'>
      <Image
        src='/avatar-jessica.jpeg'
        height={90}
        width={90}
        alt='Picture of the developer'
        className='rounded-full'
      />
      <div className='flex flex-col gap-1 items-center'>
        <p className='font-bold text-2xl'>Jessica Randall</p>
        <p className='font-semibold text-primary-green'>
          London, United Kingdom
        </p>
      </div>
      <p className='italic mb-3'>
        &quot;Front-end developer and avid reader.&quot;
      </p>
      <div className='flex flex-col gap-4 w-full'>
        {links.map((link, index) => (
          <div
            className='w-full text-center rounded-lg py-3 bg-neutral-grey hover:bg-primary-green hover:text-neutral-dark-grey hover:cursor-pointer'
            key={index}
          >
            {link}
          </div>
        ))}
      </div>
    </article>
  );
}
