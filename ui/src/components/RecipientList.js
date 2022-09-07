import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipientService from "../services/RecipientService";
import Recipient from "./Recipient";

const RecipientList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [recipients, setRecipients] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await RecipientService.getRecipients();
        setRecipients(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteRecipient = (e, id) => {
    e.preventDefault();
    RecipientService.deleteRecipient(id).then((res) => {
      if (recipients) {
        setRecipients((prevElement) => {
          return prevElement.filter((recipient) => recipient.id !== id);
        });
      }
    });
  };

  return (
    <div className="container text-center">
  <div className="row">
    <div className="col">
      
    </div>
    <div className="col-10">
    <div className="container mx-auto my-16">
      <div className="h-12 text-left">
        
        <button
          onClick={() => navigate("/addRecipient")}
          className="btn  btn-success">
          Add Recipient
        </button>
      </div>
      <hr/>
      
      <br/>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-success-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Email ID
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              
              {recipients.map((recipient) => (
                
                <Recipient
                recipient={recipient}
                
                  deleteRecipient={deleteRecipient}
                  key={recipient.id}></Recipient>
              ))}
              
            </tbody>
            
          )}
          
        </table>
      </div>
    </div>
    </div>
    <div className="col">
      
    </div>
  </div>
  
</div>

    
  );
};

export default RecipientList;
