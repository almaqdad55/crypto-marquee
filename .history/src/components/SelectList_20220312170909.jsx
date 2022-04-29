import React from 'react';
import { Fragment, useState, useEffect, useRef } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

const SelectList = () => {
  const time = ['24h', '7d', '30d', '1y', '5y'];
  const [selected, setSelected] = useState('7d');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const onItemClick = (e) => {
      console.log(e.target.innerHTML);
    };
  }, [selected]);

  // useEffect(() => {
  //   const checkIfClickedOutside = (e) => {
  //     // If the menu is open and the clicked target is not within the menu,
  //     // then close the menu
  //     if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
  //       setIsMenuOpen(false);
  //     }
  //   };
  //   document.addEventListener('mousedown', checkIfClickedOutside);

  //   return () => {
  //     // Cleanup the event listener
  //     document.removeEventListener('mousedown', checkIfClickedOutside);
  //   };
  // }, [isMenuOpen]);

  return (
    <>
      <button
        ref={ref}
        id="dropdownButton"
        data-dropdown-toggle="dropdown"
        className="text-gray-500 bg-gray-100 font-semibold    rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center "
        type="button"
        onClick={() => setIsMenuOpen((oldState) => !oldState)}

        // onClick={handleClickButton}
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
        className="absolute   z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow "
      >
        {isMenuOpen && (
          <ul className="py-1" aria-labelledby="dropdownButton">
            {time.map((date) => (
              <div key={date}>
                <p
                  // onClick={(e) => {
                  //   console.log(e.target.innerHTML);
                  // }}
                  onClick={onItemClick}
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  {date}
                </p>
              </div>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SelectList;
