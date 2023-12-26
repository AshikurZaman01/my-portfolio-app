import './Main.css'

const Main = () => {
    return (
        <div>
            <div className='flex justify-center items-start gap-2'>

                <div className='left-section  w-[20%]'>
                    <div className='flex flex-col justify-start items-start gap-10'>
                        <button className='buttons active'>All Projects</button>
                        <button className='buttons'>Tailwind Css</button>
                        <button className='buttons'>Fontend</button>
                        <button className='buttons'>FullStack</button>
                    </div>
                </div>

                <div className='right-section border w-[70%]'>right</div>

            </div>


        </div>
    );
};

export default Main;