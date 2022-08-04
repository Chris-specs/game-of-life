// Components
import Grid from './components/Grid';

function App() {
    return (
        <main className='flex justify-center'>
            <section className='flex flex-col items-center'>
                <h1 className='text-4xl font-semibold py-4'>Game of life</h1>
                <Grid />
            </section>
        </main>
    );
}

export default App;
