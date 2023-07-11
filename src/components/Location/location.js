import React from 'react';


function Location(){
    return(
        <div>
            <h2 class="font-extrabold text-4xl text-[#f59e0b] dark:text-[#7d77f2] py-2 items ">Find us here</h2>
            <div className="text-[#f59e0b] dark:text-[#7d77f2] lg:grid lg:grid-cols-2 lg:py-16 lg:px-6" id='location'>
            <p className='border-solid h-28 dark:text-[#F277A7] font-light sm:text-lg'>We are located in Satpur,Nashik</p>
            <div className='border-solid border-2 h-auto'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m22!1m12!1m3!1d3749.283086319874!2d73.73726233980486!3d19.99663014635335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m7!3e6!4m3!3m2!1d19.9868241!2d73.7595528!4m1!2sPlot%20no.%2028%2CGala%20no.%20A-22%2C%20Flatted%20Building%2C%20MIDC%2C%20Satpur%20Colony%2C%20Nashik%2C%20Maharashtra%20422007!5e0!3m2!1sen!2sin!4v1686834150728!5m2!1sen!2sin" className='w-full' height={360} allowFullScreen="" title="location" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
        </div>
        </div>
        
    );
}

export default Location;