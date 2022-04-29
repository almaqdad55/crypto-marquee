import React from 'react';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

const SelectList = () => {
  const time = ['24h', '7d', '30d', '1y', '5y'];
  const [selected, setSelected] = useState('7d');

  return (
    <>
      {/* <button
        id="dropdownButton"
        data-dropdown-toggle="dropdown"
        className="text-gray-500   focus:ring-4 focus:ring-transparent font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center "
        type="button"
      >
        Dropdown button{' '}
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        id="dropdown"
        className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
      >
        <ul className="py-1" aria-labelledby="dropdownButton">
          {time.map((date) => (
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                {date}
              </a>
            </li>
          ))}
        </ul>
      </div> */}
      <>
        {/* <div className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"> */}
        <select
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          className="text-gray-500   focus:ring-4 focus:ring-transparent font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center "
          type="button"
        >
          {time.map((date) => (
            <option className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              {date}
            </option>
          ))}
        </select>
        {/* </div> */}
      </>
    </>
  );
};

export default SelectList;
