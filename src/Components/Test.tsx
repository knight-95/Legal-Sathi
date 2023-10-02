import React, { useEffect, useState } from 'react'



function Test() {

    const getdata = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/v1/approval-requests");
          const data = await response.json();
          return data;
        } catch (error) {
          console.error(error);
          return null; // You can return an empty array or handle the error as needed
        }
      };
      
      useEffect(() => {
        // Fetch data from the API
        getdata().then((data) => {
          if (data) {
            // Do something with the data, e.g., set it in state
            // setData(data);
            console.log(data);
          }
        });
      }, []);
  return (
    <div>
      hello ji
    </div>
  )
}

export default Test
