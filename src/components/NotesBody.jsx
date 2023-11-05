import React from 'react'
import ActiveDate from './ActiveDate';

const NotesBody = ({ title, body, createdAt }) => {
  const currentDate = new Date();
  const monthName = new Intl.DateTimeFormat('en', { month: 'long' }).format(currentDate);
  return (
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <ActiveDate createdAt={createdAt}/>
      
      {/* Buttons */}
      <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLineJoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </button>
      {/* END */}
    </div>
  )
}

export default NotesBody