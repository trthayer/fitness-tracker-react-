import React from "react";


export const GetMyRoutines = async (token, creatorName) => {
    try {
      const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${creatorName}/routines`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
  
      const results = await response.json();
      const myRoutines = results.data;
  
      console.log("This is myRoutine with possible public Routines", myRoutines)
      return myRoutines;
    } catch (error) {
      console.error(error)
    }
  };