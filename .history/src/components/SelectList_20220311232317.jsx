import React from 'react';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

const SelectList = () => {
  const time = ['24h', '7d', '30d', '1y', '5y'];
  const [selected, setSelected] = useState('7d');

  return (
    <>
      {/* <div className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"> */}
      <select
        id="dropdownButton"
        data-dropdown-toggle="dropdown"
        className="hover:bg-gray-100 text-gray-500 focus:ring-4 focus:ring-transparent font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center "
        type="button"
      >
        {time.map((date) => (
          <option className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 ">
            {date}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectList;
