import DevCard from './components/dev-card/DevCard';
import Footer from './components/footer/Footer';

export default function Page() {
  return (
    <main className='h-full w-full text-neutral-white' role='main'>
      <div className='h-full w-full bg-neutral-off-black flex items-center justify-center'>
        <DevCard />
        <Footer />
      </div>
    </main>
  );
}
