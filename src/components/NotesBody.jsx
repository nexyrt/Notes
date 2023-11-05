import React from 'react'
import ActiveDate from './ActiveDate';
import BodyInformation from './BodyInformation';
import SwitchButton from './SwitchButton';
import DeleteButton from './DeleteButton';

const NotesBody = ({ title, body, createdAt, isArchived }) => {
  return (
    <section className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <ActiveDate createdAt={createdAt} isArchived={isArchived} />
      <BodyInformation title={title} body={body} />
      <div>
        <SwitchButton isArchived={isArchived} />
        <DeleteButton />
      </div>
    </section>
  )
}

export default NotesBody