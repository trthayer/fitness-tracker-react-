export const registerUser = async (username, password) => {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              password,
            })
          })

        const data = await response.json()
        console.log("This is the user data", data)

        return data
    } catch (error) {
        console.error(error);
    }
};


export const previousUser = async (username, password) => {
  // console.log("Username informaiton", password)
    try {
        const response = await fetch ('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              password,
            })
          })
          console.log("the response", response)
          const { 
            token
          } = await response.json();
          
          return token;
    } catch (error) {
        console.error(error)
    }
}; 


export const fetchMe = async (token) => {
  // console.log("This is the token", token)
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          })

          const data = await response.json();
          // console.log("this is the fetchMe data", data)
          return data;
    } catch (error) {
        console.error(error)
    }
};