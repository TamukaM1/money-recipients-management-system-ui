import React from "react";
import { useNavigate } from "react-router-dom";

const Recipient = ({ recipient, deleteRecipient }) => {
  const navigate = useNavigate();
  const editRecipient = (e, id) => {
    e.preventDefault();
    navigate(`/editRecipient/${id}`);
  };

  return (
    <tr key={recipient.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{recipient.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{recipient.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{recipient.emailId}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e, id) => editRecipient(e, recipient.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
          Edit
        </a>
        <a
          onClick={(e, id) => deleteRecipient(e, recipient.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Recipient;
