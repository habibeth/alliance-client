import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const NewsHeadline = () => {
    return (
        <div className='max-w-6xl md:mx-auto flex ml-5 mr-5 flex-col md:flex-row'>
            <span className='px-5 py-2 bg-indigo-600 text-white md:w-48 border-2 text-center border-indigo-600'>News Update</span>
            <Marquee direction="right" pauseOnHover={true} className='border-2 border-indigo-600 px-5 py-2'>
                <Link to="#" className='hover:text-indigo-800'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem esse sit at ab ut quos rem, quibusdam impedit tempora molestias non corrupti dolorum illum libero repellendus dolore, dolor fuga expedita!</Link>
                <span className='mx-2'>||</span>
                <Link to="#" className='hover:text-indigo-800'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem esse sit at ab ut quos rem, quibusdam impedit tempora molestias non corrupti dolorum illum libero repellendus dolore, dolor fuga expedita!</Link>
                <span className='mx-2'>||</span>
                <Link to="#" className='hover:text-indigo-800'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem esse sit at ab ut quos rem, quibusdam impedit tempora molestias non corrupti dolorum illum libero repellendus dolore, dolor fuga expedita!</Link>
                <span className='mx-2'>||</span>
            </Marquee>
        </div>
    );
};

export default NewsHeadline;