const MainLayout = ({ children }) => {
    return (
        <>
            <header>
                <nav className='flex justify-center lg:justify-start px-10 py-2'>
                    <div className='flex items-center'>
                        <img className='w-16 h-16' src='/assets/img/glider.png' alt="Glider" />
                        <p className='text-2xl font-semibold py-4'>Game of life</p>
                    </div>
                </nav>
            </header>
            <main className='flex justify-center pt-20'>
                { children }
            </main>
        </>
    )
}

export default MainLayout