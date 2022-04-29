import React from 'react';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

const SelectList = () => {
  const time = ['24h', '7d', '30d', '1y', '5y'];
  const [selected, setSelected] = useState('7d');

  const handleClickButton = () => {
    let element = document
      .getElementById('dropdown')
      .classList.toggle('hidden');
  };

  window.onclick = function (e) {
    if (!e.target.matches('#dropdownButton')) {
      let dropdowns = document.getElementById('dropdown');
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

  return (
    <>
      <button
        id="dropdownButton"
        data-dropdown-toggle="dropdown"
        className="text-gray-500 bg-gray-100 font-semibold    rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center "
        type="button"
        onClick={handleClickButton}
      >
        {selected}
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
        className="absolute  hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow "
      >
        <ul className="py-1" aria-labelledby="dropdownButton">
          {time.map((date) => (
            <div key={date}>
              <p className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                {date}
              </p>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SelectList;
