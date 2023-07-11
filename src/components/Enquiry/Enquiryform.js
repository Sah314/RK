import React from 'react';
import { useState } from 'react';

const initValues = {email:"",subject:"",message:""};

const initState={values:initValues};
function EnquiryForm(){
  const [state,setState]=useState(initState);

  const {values} = state;
  const handleOnChange=({target})=>setState((prev)=>
    ({
      ...prev,
      values:{
        ...prev.values,
        [target.id]:target.value
      }
    }));
    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
    
      try {
        const response = await fetch('http://localhost:4000/products/enquiry', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values), // Assuming `values` contains the form data
        });
        if (response.ok) {
          // Handle the successful response, e.g., show a success message
          console.log('Email sent successfully!');
          setTimeout(() => {
            setState(initState);
          }, 0);
          ; // Reset form values to initial state

        } else {
          // Handle the error response, e.g., show an error message
          console.error('Failed to send email');
        }
        // Handle the response...
      } catch (error) {
       console.error(error);
      }
    };
    
  return(
    <section id='enquiryform'>
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#f59e0b] dark:text-[#7d77f2]">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about our product? Need details about our Business plan? Let us know.</p>
      <form class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-[#7d77f2]">Your email</label>
              <input type="email"
               id="email"
               class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
               placeholder="abc@xyz.com"
               value={values.email} 
               onChange={handleOnChange}
               required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-[#7d77f2]">Subject</label>
              <input type="text" 
              id="subject" 
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
              placeholder="Let us know how we can help you" 
              value={values.subject}
              onChange={handleOnChange}
              required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-[#7d77f2]">Your message</label>
              <textarea id="message"
               rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."
              value={values.message}
              onChange={handleOnChange} 
              required></textarea>
          </div>
          <button type="button" 
          class="py-3 px-5 text-sm font-medium text-center bg-amber-500 dark:bg-[#7d77f2] rounded-lg sm:w-fit hover:bg-[#F277A7] focus:ring-4 focus:outline-solid focus:ring-blue-300 
          focus:ring-primary-800" 
          onClick={handleSubmit} 
          disabled={!values.email||!values.subject||!values.message}>Send message</button>
      </form>

  </div>
</section>
  );
  }
export default EnquiryForm;